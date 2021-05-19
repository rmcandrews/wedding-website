import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";
import { Button, Input, Form, Confirm } from "semantic-ui-react";
import nanoid from "nanoid";

import "./CreateInvitation.css";

const mealOptions = [
  { key: "Unknown", value: "Unknown", text: "Unknown" },
  { key: "Beef", value: "Beef", text: "Beef" },
  { key: "Fish", value: "Fish", text: "Fish" },
  { key: "Veggie", value: "Veggie", text: "Veggie" },
  { key: "Kid", value: "Kid", text: "Kid" },
];

const attendingOptions = [
  { key: "Yes", value: "Yes", text: "Yes" },
  { key: "No", value: "No", text: "No" },
  { key: "Unknown", value: "Unknown", text: "Unknown" },
];

const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://fngvfv45l9.execute-api.us-east-1.amazonaws.com/production";

function GuestFormGroup({
  handleChange,
  index,
  handleRemove,
  allowRemove,
  value,
}) {
  return (
    <div className="guest">
      <div>
        <Form.Group className="guestFromField">
          <Form.Field
            onChange={handleChange}
            control={Input}
            name={`firstName-${index}`}
            label="First Name"
            placeholder="First Name"
            width={5}
            value={value.firstName}
          />
          <Form.Field
            onChange={handleChange}
            control={Input}
            name={`lastName-${index}`}
            label="Last Name"
            placeholder="Last Name"
            width={6}
            value={value.lastName}
          />
          <Form.Select
            onChange={handleChange}
            name={`mealSelection-${index}`}
            options={mealOptions}
            label="Meal"
            width={5}
            value={value.mealSelection}
          />
        </Form.Group>
        <Form.Group className="guestFromField" widths="equal">
          <Form.Checkbox
            onChange={handleChange}
            name={`rehersalInvite-${index}`}
            label="Rehersal Dinner"
            className="rehersalDinnerCheckbox"
            checked={value.rehersalInvite}
          />
          <Form.Select
            fluid
            onChange={handleChange}
            name={`isAttendingWedding-${index}`}
            label="Is Attending"
            options={attendingOptions}
            value={value.isAttendingWedding || "Unknown"}
          />
          <Form.Select
            fluid
            onChange={handleChange}
            name={`isAttendingRehersal-${index}`}
            label="Is Attending Rehersal"
            options={attendingOptions}
            value={value.isAttendingRehersal || "Unknown"}
          />
        </Form.Group>
      </div>
      <div className="guestRemoveButtonContainer">
        <Button
          size="mini"
          negative
          className="guestRemoveButton"
          onClick={(e) => handleRemove(e, index)}
          disabled={!allowRemove}
          fluid
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

class CreateInvitation extends Component {
  constructor(props) {
    super(props);
    let { invitation } = this.props;
    this.state = {
      name: invitation && invitation.name ? invitation.name : "",
      address: invitation && invitation.address ? invitation.address : {},
      line2:
        invitation && invitation.address && invitation.address.line2
          ? invitation.address.line2
          : undefined,
      guests:
        invitation && invitation.guests
          ? invitation.guests
          : [
              {
                firstName: "",
                lastName: "",
                weddingInvite: true,
                rehersalInvite: false,
                mealSelection: "Unknown",
                id: nanoid(10),
              },
            ],
      isComplete: false,
      saving: false,
      showCancelConfrim: false,
    };
  }

  componentDidMount = () => {
    this.checkComplete();
  };

  checkComplete = () => {
    let isComplete = true;
    if (!this.state.name) isComplete = false;
    if (this.state.guests.length === 0) isComplete = false;
    this.state.guests.forEach((guest) => {
      if (!guest.firstName) isComplete = false;
      if (!guest.lastName) isComplete = false;
    });
    this.setState({ isComplete });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value }, () => {
      this.checkComplete();
    });
  };

  handleSubmit = async () => {
    this.setState({ saving: true });
    const { name, address, line2, guests } = this.state;
    let completeAddress = {
      ...address,
      line2,
    };
    if (this.state.isComplete) {
      const data = {
        name,
        address: completeAddress,
        guests,
      };
      try {
        if (!this.props.isEdit) {
          await axios.post(apiHost + "/invitations", data);
        } else {
          await axios.put(`${apiHost}/invitations/${this.props.id}`, data);
        }
        this.props.handleSubmit(this.props.id);
      } catch (err) {
        console.error(err);
        this.setState({ saving: false });
      }
    }
  };

  handleGuestChange = (e, { name, value, checked }) => {
    let { guests } = this.state;
    let fieldName = name.split("-")[0];
    let index = parseInt(name.split("-")[1]);
    guests[index][fieldName] = value || checked;
    this.setState({ guests }, () => {
      this.checkComplete();
    });
  };

  addGuest = (e) => {
    e.preventDefault();
    let { guests } = this.state;
    guests.push({
      firstName: "",
      lastName: "",
      weddingInvite: true,
      rehersalInvite: false,
      mealSelection: "Unknown",
      id: nanoid(10),
    });
    this.setState({ guests }, () => {
      this.checkComplete();
    });
  };

  removeGuest = (e, index) => {
    e.preventDefault();
    let { guests } = this.state;
    if (guests.length !== 1) {
      guests.splice(index, 1);
      this.setState({ guests }, () => {
        this.checkComplete();
      });
    }
  };

  render() {
    let { guests, address, line2 } = this.state;
    return (
      <div className="invitation">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group style={{ margin: "0 0 1em" }}>
            <Form.Field
              onChange={this.handleChange}
              control={Input}
              value={this.state.name}
              name="name"
              label="Name"
              placeholder="Name"
              width={16}
            />
          </Form.Group>
          <Form.Group style={{ margin: "0 0 1em" }}>
            <Form.Field width={12}>
              <label>Address</label>
              <Autocomplete
                className={
                  this.props.isEdit && this.state.address.line1
                    ? "addressAutocomplete"
                    : ""
                }
                apiKey="AIzaSyAIeZ9AdBdLh0oFsyzVWWjgbgqFQIM1Nr4"
                placeholder={address.line1 ? address.line1 : "Address"}
                onPlaceSelected={(place) => {
                  let tempAddress = {};
                  place.address_components.forEach((addressComponent) => {
                    if (addressComponent.types.includes("street_number"))
                      tempAddress.streetNumber = addressComponent.short_name;
                    else if (addressComponent.types.includes("route"))
                      tempAddress.route = addressComponent.short_name;
                    else if (addressComponent.types.includes("locality"))
                      tempAddress.city = addressComponent.short_name;
                    else if (
                      addressComponent.types.includes(
                        "administrative_area_level_1"
                      )
                    )
                      tempAddress.state = addressComponent.short_name;
                    else if (addressComponent.types.includes("postal_code"))
                      tempAddress.zip = addressComponent.short_name;
                  });
                  const address = {
                    line1: `${tempAddress.streetNumber} ${tempAddress.route}`,
                    city: tempAddress.city,
                    state: tempAddress.state,
                    zip: tempAddress.zip,
                  };
                  this.handleChange(undefined, {
                    name: "address",
                    value: address,
                  });
                }}
                types={["address"]}
                componentRestrictions={{ country: "us" }}
              />
            </Form.Field>
            <Form.Field
              onChange={this.handleChange}
              value={line2}
              control={Input}
              name="line2"
              label="Apt/Unit"
              placeholder="Apt/Unit"
              width={4}
            />
          </Form.Group>
          <div style={{ margin: "0 0 1em", padding: "0 0.5em" }}>
            <div className="guestsLabel">Guests</div>
            <div style={{ marginBottom: "0.5rem" }}>
              {guests.map((guest, index, array) => (
                <GuestFormGroup
                  key={guest.id}
                  value={guest}
                  handleChange={this.handleGuestChange}
                  handleRemove={this.removeGuest}
                  index={index}
                  allowRemove={array.length !== 1}
                />
              ))}
            </div>
            <Button size="tiny" basic fluid onClick={this.addGuest}>
              Add Guest
            </Button>
          </div>
          <Button.Group fluid>
            {this.props.id && (
              <React.Fragment>
                <Button
                  type="button"
                  onClick={() => this.setState({ showCancelConfrim: true })}
                  negative
                >
                  Delete
                </Button>
                <Confirm
                  className="deleteConfrimModal"
                  open={this.state.showCancelConfrim}
                  cancelButton={
                    <Button
                      fluid
                      className="deleteModalButton"
                      onClick={() =>
                        this.setState({ showCancelConfrim: false })
                      }
                    >
                      Cancel
                    </Button>
                  }
                  confirmButton={
                    <Button
                      fluid
                      className="deleteModalButton"
                      negative
                      onClick={(e) => {
                        this.props.handleDelete(e, this.props.id);
                        this.setState({ showCancelConfrim: false });
                      }}
                    >
                      Delete
                    </Button>
                  }
                  content={
                    <div style={{ padding: 20, textAlign: "center" }}>
                      Are you sure you want to delete <b>{this.state.name}'s</b>{" "}
                      invitation?
                    </div>
                  }
                />
              </React.Fragment>
            )}
            <Button
              onClick={(e) => this.props.handleCancel(e, this.props.id)}
              disabled={this.state.saving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              positive
              disabled={!this.state.isComplete || this.state.saving}
              loading={this.state.saving}
            >
              Save
            </Button>
          </Button.Group>
        </Form>
      </div>
    );
  }
}

export default CreateInvitation;
