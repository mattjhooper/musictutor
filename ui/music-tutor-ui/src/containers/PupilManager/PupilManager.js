import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import pupilList from "../../testdata/fakePupils";
import PupilCard from "../PupilCard/PupilCard";

class PupilManager extends Component {
  state = {
    pupils: pupilList,
    selected: ""
  };

  onCardSelect = p => {
    this.setState({ selected: p });
  };

  onLessonComplete = (pupilID, lessonDetails) => {
    console.log(`PupilID: ${pupilID}. Lesson: ${lessonDetails.nextLessonDate}`)

    this.setState((prevState, props) => {
      const pupilIndex = prevState.pupils.findIndex(p => p.pupilID === pupilID)

      const pupil = { ...prevState.pupils[pupilIndex] }

      pupil.accountBalance -= lessonDetails.rate;
      pupil.nextLessonDate = lessonDetails.nextLessonDate;

      prevState.pupils[pupilIndex] = pupil;
      
      return {
        pupils: prevState.pupils
      }
    })
  }

  render() {
    // console.log(this.state.pupils);

    const pupilCards = this.state.pupils.map(pupil => {
      return (
        <PupilCard
          key={pupil.pupilID}
          pupil={pupil}
          selectedPupil={this.state.selected}
          onLessonComplete={this.onLessonComplete}
        />
      );
    });

    return (
      <div>
        <p>No of Pupils: {this.state.pupils.length} </p>
        <Card.Group itemsPerRow={3} stackable>
          {pupilCards}{" "}
        </Card.Group>
      </div>
    );
  }
}

export default PupilManager;
