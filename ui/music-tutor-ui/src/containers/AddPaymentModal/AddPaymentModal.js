import React, { Component } from "react";
import moment from "moment";
import {Button, Form, Modal} from "semantic-ui-react";
import DateField from "../../Components/DateFIeld/DateField"

class AddPaymentModal extends Component {
  state = {
    open: false,
    paymentDate: moment(),
    notes: "",
    paymentAmount: this.props.pupil.lessonRate,
    paymentmethod: this.props.pupil.defaultPaymentMethod
  };

  open = () =>
    this.setState({
      open: true,
      paymentDate: moment(),
      notes: "",
      paymentAmount: this.props.pupil.lessonRate,
      paymentmethod: this.props.pupil.defaultPaymentMethod
    });
  close = () => this.setState({ open: false });

  addPayment = () => {
    const paymentDetails = { ...this.state };

    this.setState({ open: false });

    this.props.onPaymentAdd(this.props.pupil.pupilID, paymentDetails);
  };

  dateChange = (e, { value }) => {
    this.setState({ paymentDate: moment(value, "DD/MM/YYYY") });
  };

  amountChange = (e, { value }) => {
    this.setState({ paymentAmount: value });
  };

  notesChange = (e, { value }) => {
    this.setState({ notes: value });
  };

  paymentmethodChange = (e, { value }) => {
    this.setState({ paymentmethod: value });
  };

  render() {
    const { open } = this.state;
    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
            <Button basic content="Add Payment" icon="payment" labelPosition="left" />
        }
      >
        <Modal.Header>{this.props.pupil.name} - Add Payment</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.addPayment}>
            <DateField
              label="Date"
              defaultDate={this.state.paymentDate.format("DD/MM/YYYY")}
              onValidDate={this.dateChange}
            />
            <Form.Input
              label="Amount"
              value={this.state.paymentAmount}
              placeholder="0.00"
              onChange={this.amountChange}
            />
            <Form.Input
              label="Payment Method"
              value={this.state.paymentmethod}
              placeholder="Cash/Bank Transfer"
              onChange={this.paymentmethodChange}
            />
            <Form.TextArea
              label="Notes"
              placeholder="Notes regarding payment..."
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
            onClick={this.addPayment}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddPaymentModal;
