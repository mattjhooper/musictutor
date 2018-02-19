import React, { Component } from "react";
import { Card, Input } from "semantic-ui-react";
import pupilList from "../../testdata/fakePupils";
import PupilCard from "../PupilCard/PupilCard";
import moment from "moment";

class PupilManager extends Component {
  state = {
    pupils: pupilList,
    selected: "",
    filterText: ""
  };

  filterChange = (e, { value }) => {
    this.setState({ filterText: value });
  };

  onCardSelect = p => {
    this.setState({ selected: p });
  };

  onLessonComplete = (pupilID, lessonDetails) => {
    console.log(`PupilID: ${pupilID}. Lesson: ${lessonDetails.nextLessonDate}`);

    this.setState((prevState, props) => {
      const pupilIndex = prevState.pupils.findIndex(p => p.pupilID === pupilID);

      const pupil = { ...prevState.pupils[pupilIndex] };

      pupil.accountBalance -= lessonDetails.rate;
      pupil.nextLessonDate = lessonDetails.nextLessonDate;

      prevState.pupils[pupilIndex] = pupil;

      return {
        pupils: prevState.pupils
      };
    });
  };

  onLessonCancel = (pupilID, nextLessonDate) => {
    this.setState((prevState, props) => {
      const pupilIndex = prevState.pupils.findIndex(p => p.pupilID === pupilID);

      const pupil = { ...prevState.pupils[pupilIndex] };

      pupil.nextLessonDate = nextLessonDate;

      prevState.pupils[pupilIndex] = pupil;

      return {
        pupils: prevState.pupils
      };
    });
  };

  onPaymentAdd = (pupilID, paymentDetails) => {
    this.setState((prevState, props) => {
      const pupilIndex = prevState.pupils.findIndex(p => p.pupilID === pupilID);

      const pupil = { ...prevState.pupils[pupilIndex] };

      pupil.accountBalance =
        Number(pupil.accountBalance) + Number(paymentDetails.paymentAmount);

      prevState.pupils[pupilIndex] = pupil;

      return {
        pupils: prevState.pupils
      };
    });
  };

  render() {
    // console.log(this.state.pupils);

    const pupilCards = this.state.pupils
      .filter(pupil =>
        pupil.name.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
      .sort((a, b) => moment(a.nextLessonDate) > moment(b.nextLessonDate))
      .map(pupil => {
        return (
          <PupilCard
            key={pupil.pupilID}
            pupil={pupil}
            selectedPupil={this.state.selected}
            onLessonComplete={this.onLessonComplete}
            onLessonCancel={this.onLessonCancel}
            onPaymentAdd={this.onPaymentAdd}
          />
        );
      });

    return (
      <div>
        <p>
          <Input
            icon="search"
            placeholder="Search..."
            value={this.state.filterText}
            onChange={this.filterChange}
          />
        </p>
        <p>Found {pupilCards.length} of {this.state.pupils.length} pupils</p>
        <Card.Group itemsPerRow={3} stackable>
          {pupilCards}{" "}
        </Card.Group>
      </div>
    );
  }
}

export default PupilManager;
