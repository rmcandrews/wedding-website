/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import {
  Loader,
  Card,
  Button,
  Select,
  CardContent,
  Icon
} from "semantic-ui-react";
import Modal from "react-responsive-modal";
import { FaUtensils, FaCalendarDay } from "react-icons/fa";
import { Button as MyButtom } from "../../../../components";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import Menu from "./Menu";
import Details from "./Details";
import clonedeep from "lodash.clonedeep";

import "./RsvpForm.css";
import "react-semantic-toasts/styles/react-semantic-alert.css";

const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://7j47jby7yj.execute-api.us-east-1.amazonaws.com/production";

const mealOptions = [
  {
    key: "Beef",
    value: "Beef",
    text: (
      <span>
        Beef <span className="entreeDescriptor">• Herb Crusted Tenderloin</span>
      </span>
    )
  },
  {
    key: "Fish",
    value: "Fish",
    text: (
      <span>
        Fish <span className="entreeDescriptor">• Blackened Barramundi</span>
      </span>
    )
  },
  {
    key: "Veggie",
    value: "Veggie",
    text: (
      <span>
        Veggie{" "}
        <span className="entreeDescriptor">• Black Truffle Strigoli</span>
      </span>
    )
  },
  { key: "Kid", value: "Kid", text: "Kid" }
];

const RsvpGuest = ({ guest, onUpdateGuest, previousGuest, index }) => {
  const [loadingComponent, setLoadingComponent] = useState(undefined);

  const resetLoading = () => {
    setLoadingComponent(undefined);
  };

  // If the guest is at an odd index, does not have a rehersal invite,
  // and the preivous guest does another element must be added to match height
  let shouldFillForLackOfReheral =
    index % 2 === 1 && !guest.rehersalInvite && previousGuest.rehersalInvite;

  return (
    <Card fluid>
      <CardContent>
        <Card.Header>
          <div className="guestCardTitle">{`${guest.firstName} ${guest.lastName}`}</div>
        </Card.Header>
      </CardContent>
      <Card.Content extra className="cardContent">
        {guest.rehersalInvite && (
          <div className="selectorContainer">
            <div className="selectorTitle">Rehersal Dinner</div>
            <div className="ui two buttons">
              <Button
                basic={
                  guest.isAttendingRehersal === undefined ||
                  guest.isAttendingRehersal === "No"
                }
                className={`acceptButton ${
                  guest.isAttendingRehersal ? "acceptButtonSelected" : ""
                }`}
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
                {guest.isAttendingRehersal === "Yes" ? "Accepted" : "Accept"}
              </Button>
              <Button
                basic={
                  guest.isAttendingRehersal === undefined ||
                  guest.isAttendingRehersal === "Yes"
                }
                className={`declineButton ${
                  guest.isAttendingRehersal ? "declineButtonSelected" : ""
                }`}
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
                {guest.isAttendingRehersal === "No" ? "Declined" : "Decline"}
              </Button>
            </div>
          </div>
        )}
        {shouldFillForLackOfReheral && (
          <div className="noRehersalFiller">
            <Icon name="heart" size="big" />
            <Icon name="diamond" size="big" />
            <Icon name="beer" size="big" />
          </div>
        )}
        <div className="selectorContainer">
          <div className="selectorTitle">Wedding</div>
          <div className="ui two buttons">
            <Button
              basic={
                guest.isAttendingWedding === undefined ||
                guest.isAttendingWedding === "No"
              }
              className={`acceptButton ${
                guest.isAttendingWedding ? "acceptButtonSelected" : ""
              }`}
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
              {guest.isAttendingWedding === "Yes" ? "Accepted" : "Accept"}
            </Button>
            <Button
              basic={
                guest.isAttendingWedding === undefined ||
                guest.isAttendingWedding === "Yes"
              }
              className={`declineButton ${
                guest.isAttendingWedding ? "declineButtonSelected" : ""
              }`}
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
              {guest.isAttendingWedding === "No" ? "Declined" : "Decline"}
            </Button>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="selectorTitle">Meal</div>
          <Select
            placeholder="Select your meal"
            options={mealOptions}
            fluid
            disabled={guest.isAttendingWedding !== "Yes"}
            value={guest.mealSelection === "Unknown" ? "" : guest.mealSelection}
            onChange={(event, data) => {
              onUpdateGuest(
                guest.id,
                { mealSelection: data.value },
                resetLoading
              );
            }}
          />
        </div>
      </Card.Content>
    </Card>
  );
};

const RsvpForm = ({ selectedInvitation, history }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [invitation, setInvitation] = useState(selectedInvitation);
  const [
    hasAtLeastOneRehersalInvite,
    setHasAtLeastOneRehersalInvite
  ] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  useEffect(() => {
    const fetchInvitation = async () => {
      if (!invitation) {
        try {
          let response = await axios.get(`${apiHost}/invitations/${id}`);
          setInvitation(response.data);
          for (let i = 0; i < response.data.guests.length; i++) {
            if (response.data.guests[i].rehersalInvite) {
              setHasAtLeastOneRehersalInvite(true);
              break;
            }
          }
          setLoading(false);
        } catch (error) {
          console.error(error);
          history.push("/rsvp");
        }
      } else {
        for (let i = 0; i < invitation.guests.length; i++) {
          if (invitation.guests[i].rehersalInvite) {
            setHasAtLeastOneRehersalInvite(true);
            break;
          }
        }
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
    <div className="rsvpForm">
      <h2 className="invitationTitle">{invitation.name}</h2>
      <div className="rsvpDirections">
        <div>Please RSVP for each guest bellow and choose a meal.</div>
        <div style={{ padding: "1.5rem 0" }}>
          <MyButtom
            id="RSVP_Details-click"
            onClick={() => setDetailsModalOpen(true)}
            className="topButton"
          >
            <div className="menuButtonContent">
              <span className="menuButtonIcon">
                <FaCalendarDay />
              </span>
              <span className="menuButtonText"> DETAILS</span>
            </div>
          </MyButtom>
          <MyButtom
            id="RSVP_Menu-click"
            onClick={() => setMenuModalOpen(true)}
            className="topButton"
            style={{ margin: "0 2.25rem 0 0" }}
          >
            <div className="menuButtonContent">
              <span className="menuButtonIcon">
                <FaUtensils />
              </span>
              <span className="menuButtonText"> MENU</span>
            </div>
          </MyButtom>
          <Modal
            open={menuModalOpen}
            onClose={() => setMenuModalOpen(false)}
            center
          >
            <Menu />
          </Modal>
          <Modal
            open={detailsModalOpen}
            onClose={() => setDetailsModalOpen(false)}
            center
          >
            <Details showRehersal={hasAtLeastOneRehersalInvite} />
          </Modal>
        </div>
      </div>
      <SemanticToastContainer position="bottom-right" />
      <Card.Group itemsPerRow={2} stackable>
        {invitation.guests.map((guest, i) => (
          <RsvpGuest
            guest={guest}
            key={guest.id}
            previousGuest={i > 0 ? invitation.guests[i - 1] : undefined}
            index={i}
            onUpdateGuest={handleGuestUpdate}
          />
        ))}
      </Card.Group>
    </div>
  );
};

export default withRouter(RsvpForm);
