import React, { Component } from "react";
import { Card, Image, Statistic } from "semantic-ui-react";
import Moment from "react-moment";

const pupilList = [
  {
    pupilID: "P1",
    name: "Matt",
    tutorID: "T1",
    tutorName: "The Piano Man",
    contactName: "Matt",
    contactPhone: "07950 212121",
    contactEmail: "my.email@gmail.com",
    startDate: "2018-01-01",
    instrument: "Piano",
    lessonRate: "15.0",
    accountBalance: "0.00",
    lessonInterval: "7",
    nextLessonDate: "2018-02-14",
    profilePicture:
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/M75.jpg",
    notes: ""
  },
  {
    pupilID: "P2",
    name: "Mark",
    tutorID: "T1",
    tutorName: "The Piano Man",
    contactName: "Mark",
    contactPhone: "07950 212121",
    contactEmail: "p2@email.com",
    startDate: "2018-01-01",
    instrument: "Piano",
    lessonRate: "15.0",
    accountBalance: "30.00",
    lessonInterval: "7",
    nextLessonDate: "2018-02-14",
    profilePicture:
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/85.jpg",
    notes: ""
  },
  {
    pupilID: "P3",
    name: "Mary",
    tutorID: "T1",
    tutorName: "The Piano Man",
    contactName: "Mary",
    contactPhone: "07950 212121",
    contactEmail: "p3@email.com",
    startDate: "2018-01-01",
    instrument: "Piano",
    lessonRate: "15.0",
    accountBalance: "0.00",
    lessonInterval: "7",
    nextLessonDate: "2018-02-14",
    profilePicture:
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/W85.jpg",
    notes: ""
  },
  {
    pupilID: "P4",
    name: "Martha",
    tutorID: "T1",
    tutorName: "The Piano Man",
    contactName: "Martha",
    contactPhone: "07950 212121",
    contactEmail: "p4@email.com",
    startDate: "2018-01-01",
    instrument: "Piano",
    lessonRate: "15.0",
    accountBalance: "-15.00",
    lessonInterval: "7",
    nextLessonDate: "2018-02-14",
    profilePicture:
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/21.jpg",
    notes: ""
  }
];

class PupilManager extends Component {
  state = {
    pupils: pupilList
  };
  render() {
    console.log(this.state.pupils);

    const pupilCards = this.state.pupils.map(pupil => {
      return (
        <Card>
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
            </Card.Description>
          </Card.Content>
        </Card>
      );
    });

    return (
      <div>
        <p>No of Pupils: {this.state.pupils.length} </p>
        <Card.Group>{pupilCards}</Card.Group>
      </div>
    );
  }
}

export default PupilManager;
