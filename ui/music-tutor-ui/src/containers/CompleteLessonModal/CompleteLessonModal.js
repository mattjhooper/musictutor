import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import moment from "moment";
import DateField from "../../Components/DateFIeld/DateField"


class CompleteLessonModal extends Component {
  state = {
    open: false,
    lessonDate: moment(this.props.pupil.nextLessonDate),
    includePayment: false,
    notes: "",
    rate: this.props.pupil.lessonRate,
    nextLessonDate: moment(this.props.pupil.nextLessonDate)
      .clone()
      .add(this.props.pupil.lessonInterval, "day")
  };

  open = () =>
    this.setState({
      open: true,
      lessonDate: moment(this.props.pupil.nextLessonDate),
      nextLessonDate: moment(this.props.pupil.nextLessonDate)
        .clone()
        .add(this.props.pupil.lessonInterval, "day")
    });
  close = () => this.setState({ open: false });

  completeLesson = () => {
    const lessonDetails = { ...this.state };

    this.setState({ open: false });

    this.props.onLessonComplete(this.props.pupil.pupilID, lessonDetails);
  };

  dateChange = (e, { value }) => {
    this.setState({ lessonDate: moment(value, "DD/MM/YYYY") });
  };

  rateChange = (e, { value }) => {
    this.setState({ rate: value });
  };

  nextLessonChange = (e, { value }) => {
    this.setState({ nextLessonDate: moment(value, "DD/MM/YYYY") });
  };

  notesChange = (e, { value }) => {
    this.setState({ notes: value });
  };

  includePaymentChange = (e, { value }) => {
    this.setState((prevState, props) => ({
      includePayment: !prevState.includePayment
    }));
  };

  render() {
    const { open } = this.state;
    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <Button
            basic
            positive
            content="Lesson Complete"
            icon="check"
            labelPosition="left"
          />
        }
      >
        <Modal.Header>{this.props.pupil.name} - Lesson Complete</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.props.onCompletion}>
            <DateField
              label="Date"
              required 
              defaultDate={this.state.lessonDate.format("DD/MM/YYYY")}
              onValidDate={this.dateChange}
            />
            {this.state.lessonDate.format("YYYY-MM-DD")}
            <Form.Input
              label="Rate"
              value={this.state.rate}
              placeholder="0.00"
              onChange={this.rateChange}
            />
            <Form.TextArea
              label="Notes"
              placeholder="Notes from the lesson..."
              onChange={this.notesChange}
            />
            <Form.Checkbox
              label="Include Payment?"
              checked={this.state.includePayment}
              onClick={this.includePaymentChange}
            />
            <DateField
              label="Next Lesson"
              defaultDate={this.state.lessonDate
                .clone()
                .add(this.props.pupil.lessonInterval, "day")
                .format("DD/MM/YYYY")}
              onValidDate={this.nextLessonChange}
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
            onClick={this.completeLesson}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CompleteLessonModal;
