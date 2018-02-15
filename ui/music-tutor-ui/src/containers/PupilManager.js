import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

const pupilList = [
  {
    "Pupil ID": "P1",
    Name: "Matt",
    "Tutor ID": "T1",
    "Tutor Name": "The Piano Man",
    "Contact Name": "Matt",
    "Contact phone": "07950 212121",
    "Contact email": "my.email@gmail.com",
    "Start Date": "2018-01-01",
    Instrument: "Piano",
    "Lesson Rate": "15.0",
    "Account Balance": "0.00",
    "Lesson Interval": "7",
    "Next Lesson Date": "2018-02-14",
    "Profile Picture":
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/M75.jpg",
    Notes: ""
  },
  {
    "Pupil ID": "P2",
    Name: "Mark",
    "Tutor ID": "T1",
    "Tutor Name": "The Piano Man",
    "Contact Name": "Mark",
    "Contact phone": "07950 212121",
    "Contact email": "p2@email.com",
    "Start Date": "2018-01-01",
    Instrument: "Piano",
    "Lesson Rate": "15.0",
    "Account Balance": "0.00",
    "Lesson Interval": "7",
    "Next Lesson Date": "2018-02-14",
    "Profile Picture":
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/85.jpg",
    Notes: ""
  },
  {
    "Pupil ID": "P3",
    Name: "Mary",
    "Tutor ID": "T1",
    "Tutor Name": "The Piano Man",
    "Contact Name": "Mary",
    "Contact phone": "07950 212121",
    "Contact email": "p3@email.com",
    "Start Date": "2018-01-01",
    Instrument: "Piano",
    "Lesson Rate": "15.0",
    "Account Balance": "0.00",
    "Lesson Interval": "7",
    "Next Lesson Date": "2018-02-14",
    "Profile Picture":
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/W85.jpg",
    Notes: ""
  },
  {
    "Pupil ID": "P4",
    Name: "Martha",
    "Tutor ID": "T1",
    "Tutor Name": "The Piano Man",
    "Contact Name": "Martha",
    "Contact phone": "07950 212121",
    "Contact email": "p4@email.com",
    "Start Date": "2018-01-01",
    Instrument: "Piano",
    "Lesson Rate": "15.0",
    "Account Balance": "0.00",
    "Lesson Interval": "7",
    "Next Lesson Date": "2018-02-14",
    "Profile Picture":
      "https://musictutorapiba1f.blob.core.windows.net/profilepics/21.jpg",
    Notes: ""
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
            <Image
              floated="right"
              size="small"
              src={pupil["Profile Picture"]}
            />
            <Card.Header>{pupil["Name"]}</Card.Header>
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
