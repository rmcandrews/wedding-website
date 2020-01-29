/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { Loader, Card, Button, Select } from "semantic-ui-react";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import clonedeep from "lodash.clonedeep";

import "./RsvpForm.css";
import "react-semantic-toasts/styles/react-semantic-alert.css";

const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://7j47jby7yj.execute-api.us-east-1.amazonaws.com/production";

const mealOptions = [
  { key: "Beef", value: "Beef", text: "Beef" },
  { key: "Chicken", value: "Chicken", text: "Chicken" },
  { key: "Fish", value: "Fish", text: "Fish" },
  { key: "Veggie", value: "Veggie", text: "Veggie" },
  { key: "Kid", value: "Kid", text: "Kid" }
];

const RsvpGuest = ({ guest, onUpdateGuest }) => {
  const [loadingComponent, setLoadingComponent] = useState(undefined);

  const resetLoading = () => {
    setLoadingComponent(undefined);
  };

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{`${guest.firstName} ${guest.lastName}`}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        {guest.rehersalInvite && (
          <div>
            <div>Attending Rehersal Dinner</div>
            <div className="ui two buttons">
              <Button
                basic={guest.isAttendingRehersal === "No"}
                color="green"
                onClick={() => {
                  setLoadingComponent("REHERSAL_ACCEPT");
                  onUpdateGuest(
                    guest.id,
                    { isAttendingRehersal: "Yes" },
                    resetLoading
                  );
                }}
                loading={loadingComponent === "REHERSAL_ACCEPT"}
              >
                Accept
              </Button>
              <Button
                basic={
                  guest.isAttendingRehersal === undefined ||
                  guest.isAttendingRehersal === "Yes"
                }
                color="red"
                onClick={() => {
                  setLoadingComponent("REHERSAL_DECLINE");
                  onUpdateGuest(
                    guest.id,
                    { isAttendingRehersal: "No" },
                    resetLoading
                  );
                }}
                loading={loadingComponent === "REHERSAL_DECLINE"}
              >
                Decline
              </Button>
            </div>
          </div>
        )}
        <div>
          <div>{`Attending${guest.rehersalInvite ? "" : " Wedding"}`}</div>
          <div className="ui two buttons">
            <Button
              basic={guest.isAttendingWedding === "No"}
              color="green"
              onClick={() => {
                setLoadingComponent("WEDDING_ACCEPT");
                onUpdateGuest(
                  guest.id,
                  { isAttendingWedding: "Yes" },
                  resetLoading
                );
              }}
              loading={loadingComponent === "WEDDING_ACCEPT"}
            >
              Accept
            </Button>
            <Button
              basic={
                guest.isAttendingWedding === undefined ||
                guest.isAttendingWedding === "Yes"
              }
              color="red"
              onClick={() => {
                setLoadingComponent("WEDDING_DECLINE");
                onUpdateGuest(
                  guest.id,
                  { isAttendingWedding: "No" },
                  resetLoading
                );
              }}
              loading={loadingComponent === "WEDDING_DECLINE"}
            >
              Decline
            </Button>
          </div>
        </div>
        {guest.isAttendingWedding && (
          <div>
            <Select
              placeholder="Select your meal"
              options={mealOptions}
              value={
                guest.mealSelection === "Unknown" ? "" : guest.mealSelection
              }
              onChange={(event, data) => {
                onUpdateGuest(
                  guest.id,
                  { mealSelection: data.value },
                  resetLoading
                );
              }}
            />
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

const RsvpForm = ({ selectedInvitation, history }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [invitation, setInvitation] = useState(selectedInvitation);

  useEffect(() => {
    const fetchInvitation = async () => {
      if (!invitation) {
        try {
          let response = await axios.get(`${apiHost}/invitations/${id}`);
          setInvitation(response.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          history.push("/rsvp");
        }
      } else {
        setLoading(false);
      }
    };

    fetchInvitation();
  }, []);

  const handleGuestUpdate = async (id, updatedFields, callback) => {
    let originalInvitation = clonedeep(invitation);
    let updatedInvitation = clonedeep(invitation);
    const guestIndex = updatedInvitation.guests.findIndex(
      guest => guest.id === id
    );
    for (let [key, value] of Object.entries(updatedFields)) {
      updatedInvitation.guests[guestIndex][key] = value;
    }
    try {
      setInvitation(updatedInvitation);
      await axios.put(
        `${apiHost}/invitations/${updatedInvitation.id}`,
        updatedInvitation
      );
    } catch (error) {
      console.error(error);
      setInvitation(originalInvitation);
      toast({
        type: "error",
        title: "Error",
        description: "There was an issue updating your RSVP.",
        animation: "zoom",
        time: 5000
      });
    }
    callback();
  };

  if (loading) return <Loader active inline="centered" />;

  return (
    <div>
      <h2 className="invitationTitle">{invitation.name}</h2>
      <SemanticToastContainer position="bottom-right" />
      <Card.Group>
        {invitation.guests.map(guest => (
          <RsvpGuest
            guest={guest}
            key={guest.id}
            onUpdateGuest={handleGuestUpdate}
          />
        ))}
      </Card.Group>
    </div>
  );
};

export default withRouter(RsvpForm);
