import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import moment from "moment";

class CancelLessonModel extends Component {
  state = {
    open: false,
    nextLessonDate: moment(this.props.pupil.nextLessonDate)
      .clone()
      .add(this.props.pupil.lessonInterval, "day")
  };

  open = () =>
    this.setState({
      open: true,
      nextLessonDate: moment(this.props.pupil.nextLessonDate)
        .clone()
        .add(this.props.pupil.lessonInterval, "day")
    });
  close = () => this.setState({ open: false });

  cancelLesson = () => {
    this.setState({ open: false });

    this.props.onLessonCancel(this.props.pupil.pupilID, this.state.nextLessonDate);
  };

  nextLessonChange = (e, { value }) => {
    this.setState({ nextLessonDate: moment(value, "DD/MM/YYYY") });
  };

  notesChange = (e, { value }) => {
    this.setState({ notes: value });
  };

  render() {
    const { open } = this.state;

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <Button basic negative>
            Cancel
          </Button>
        }
      >
        <Modal.Header>{this.props.pupil.name} - Cancel Lesson</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.props.onCompletion}>
          <Form.Input
              label="Next Lesson"
              value={this.state.nextLessonDate.format("DD/MM/YYYY")}
              placeholder="DD/MM/YYYY"
              onChange={this.nextLessonChange}
            />
            <Form.TextArea
              label="Notes"
              placeholder="Notes from the lesson..."
              onChange={this.notesChange}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            icon="cancel"
            content="Cancel"
            negative
            onClick={this.close}
          />
          <Button
            icon="check"
            content="Submit"
            positive
            onClick={this.cancelLesson}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CancelLessonModel;
