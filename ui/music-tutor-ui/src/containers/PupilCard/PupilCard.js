import React, { Component } from "react";
import { Button, Card, Image, Statistic } from "semantic-ui-react";
import Moment from "react-moment";
import CompleteLessonModal from "../CompleteLessonModal/CompleteLessonModal";
import CancelLessonModal from"../CancelLessonModal/CancelLessonModal";

class PupilCard extends Component {
  state = { isCompletingLesson: false };

  completeLessonHandler = () => this.setState({ isCompletingLesson: true });
  lessonAdded = () => {
    console.log("Lesson added");
    this.setState({ isCompletingLesson: false });
  };

  render() {
    const pupil = this.props.pupil;

    return (
      <Card
        // onClick={() => this.onCardSelect(pupil.pupilID)}
        raised={this.props.selectedPupil === pupil.pupilID}
        color={this.props.selectedPupil === pupil.pupilID ? "red" : "grey"}
      >
        <Card.Content>
          <Image floated="right" size="tiny" src={pupil.profilePicture} />
          <Card.Header>{pupil.name}</Card.Header>
          <Statistic.Group color={pupil.accountBalance < 0 ? "red" : "green"}>
            <Statistic>
              <Statistic.Label>Account Balance</Statistic.Label>
              <Statistic.Value>{pupil.accountBalance}</Statistic.Value>
            </Statistic>
          </Statistic.Group>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            Next Lesson:{" "}
            <Moment format="ddd DD/MM/YYYY">{pupil.nextLessonDate}</Moment>
            <div className="ui two buttons">
              <CompleteLessonModal pupil={pupil} onLessonComplete={this.props.onLessonComplete} />
              <CancelLessonModal pupil={pupil} onLessonCancel={this.props.onLessonCancel} />
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button content="Add Payment" icon="payment" labelPosition="left" />
        </Card.Content>
      </Card>
    );
  }
}

export default PupilCard;
