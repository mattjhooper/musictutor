import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import moment from "moment";

class DateField extends Component {
  constructor(props) {
    super(props);

    let internalDate = null;
    let isValid = false;

    if (this.isValidDate(props.defaultDate)) {
      internalDate = moment(props.defaultDate, "DD/MM/YYYY");
      isValid = true;
    }

    this.state = {
      displayDate: props.defaultDate,
      internalDate: internalDate,
      isValid: isValid
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.defaultDate !== nextProps.defaultDate) {
      let internalDate = null;
      let isValid = false;

      if (this.isValidDate(nextProps.defaultDate)) {
        internalDate = moment(nextProps.defaultDate, "DD/MM/YYYY");
        isValid = true;
      }

      this.setState({
        displayDate: nextProps.defaultDate,
        internalDate: internalDate,
        isValid: isValid
      });
    }
  };

  isValidDate = displayDate => {

    if (displayDate === "" && !this.props.required)
    {
        return true;
    }

    if (
      /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/.test(
        displayDate
      ) &&
      moment(displayDate, "DD/MM/YYYY").isValid()
    ) {
      return true;
    }
    return false;
  };

  dateChange = (e, { value }) => {
    if (value.length <= 10) {
      this.setState({ displayDate: value });

      if (this.isValidDate(value)) {
        this.setState({
          internalDate: moment(value, "DD/MM/YYYY"),
          isValid: true
        });

        this.props.onValidDate(e, { value });
      } else {
        this.setState({
          internalDate: null,
          isValid: false
        });
      }
    }
  };

  render() {
    const { label } = this.props;
    const { isValid, displayDate } = this.state;

    return (
      <Form.Input
        label={label}
        error={!isValid}
        value={displayDate}
        placeholder="DD/MM/YYYY"
        onChange={this.dateChange}
      />
    );
  }
}

export default DateField;
