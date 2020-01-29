import React, { Component } from "react";
import axios from "axios";
import { Form, Message } from "semantic-ui-react";

import "./NameForm.css";

const firstNameError = {
  content: "Please enter your first name",
  pointing: "below"
};

const lastNameError = {
  content: "Please enter your last name",
  pointing: "below"
};

const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://7j47jby7yj.execute-api.us-east-1.amazonaws.com/production";

class NameForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    firstNameMissing: false,
    lastNameMissing: false,
    loading: false,
    error: false,
    warning: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = async () => {
    const { firstName, lastName } = this.state;
    this.setState({
      firstNameMissing: !firstName,
      lastNameMissing: !lastName,
      error: false,
      warning: false
    });
    if (firstName && lastName) {
      this.setState({ loading: true });
      try {
        const response = await axios.get(
          apiHost + `/invitations?firstName=${firstName}&lastName=${lastName}`
        );
        const invitations = response.data;
        this.setState({ loading: false });
        if (invitations.length === 0) {
          this.setState({ warning: true });
        } else {
          this.props.handleInvitationsRetrieved(invitations);
        }
      } catch (error) {
        this.setState({ loading: false, error: true });
        console.error(error);
      }
    }
  };

  render() {
    const {
      firstNamePlaceholder,
      lastNamePlaceholder,
      firstNameMissing,
      lastNameMissing,
      loading,
      error,
      warning
    } = this.state;

    return (
      <Form
        onSubmit={this.handleSubmit}
        loading={loading}
        error={error}
        warning={warning}
      >
        <Form.Input
          error={firstNameMissing ? firstNameError : false}
          placeholder={firstNamePlaceholder}
          name="firstName"
          onChange={this.handleChange}
          onSelect={() => this.setState({ firstNamePlaceholder: "" })}
          onBlur={() => this.setState({ firstNamePlaceholder: "First Name" })}
          fluid
          className="nameField"
        />
        <Form.Input
          error={lastNameMissing ? lastNameError : false}
          placeholder={lastNamePlaceholder}
          name="lastName"
          onChange={this.handleChange}
          onSelect={() => this.setState({ lastNamePlaceholder: "" })}
          onBlur={() => this.setState({ lastNamePlaceholder: "Last Name" })}
          fluid
          className="nameField"
        />
        <Message
          error
          header="Error"
          content="There was a problem retrieving your information. If the problem persists please contact Ryan or Taya."
        />
        <Message
          warning
          header="We couldn't find you"
          list={[
            "Try a different name",
            "Try a name of someone else in your party",
            "Contact Ryan or Taya"
          ]}
        />
        <Form.Button color="black" content="Search" fluid />
      </Form>
    );
  }
}

export default NameForm;
