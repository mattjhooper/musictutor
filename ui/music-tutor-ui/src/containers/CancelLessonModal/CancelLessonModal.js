import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import moment from "moment";
import DateField from "../../Components/DateFIeld/DateField"

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
          <Button basic negative content="Lesson Cancelled" icon="cancel" labelPosition="left" />
        }
      >
        <Modal.Header>{this.props.pupil.name} - Cancel Lesson</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.props.onCompletion}>
            <DateField
              label="Next Lesson"
              defaultDate={this.state.nextLessonDate.format("DD/MM/YYYY")}
              onValidDate={this.nextLessonChange}
            />            
            <Form.TextArea
              label="Notes"
              placeholder="Reason for cancellation..."
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
