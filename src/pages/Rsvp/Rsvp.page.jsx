import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Footer } from "../../components";
import { NameForm, InvitationSelect, RsvpForm } from "./components";
import { Button } from "semantic-ui-react";
import RSVPImage from "../../assets/RSVP.png";
import "./Rsvp.css";

const RsvpPage = ({ history }) => {
  const [matchedInvitations, setMatchedInvitations] = useState(undefined);
  const [selectedInvitation, setSelectedInvitation] = useState(undefined);

  const handleInvitationsRetrieved = invitations => {
    setMatchedInvitations(invitations);
    if (invitations.length > 1) {
      history.push(`/rsvp/select`);
    } else {
      setSelectedInvitation(invitations[0]);
      history.push(`/rsvp/${invitations[0].id}`);
    }
  };

  const handleInvitationSelect = invitation => {
    setSelectedInvitation(invitation);
    history.push(`/rsvp/${invitation.id}`);
  };

  return (
    <div style={{ marginTop: -150 }}>
      <div style={{ height: 149, backgroundColor: "black" }} />
      <div className="rsvpPageContainer">
        <Switch>
          <Route exact path="/rsvp">
            <div style={{ textAlign: "center", paddingTop: "2em" }}>
              <img
                src={RSVPImage}
                alt="rsvp"
                width="50%"
                style={{ maxWidth: 300 }}
              />
              <div
                style={{ textAlign: "center", fontSize: 16, padding: "2em" }}
              >
                Search for your name below to find your invitation and RSVP
              </div>
              <div style={{ textAlign: "center" }}>
                <NameForm
                  handleInvitationsRetrieved={handleInvitationsRetrieved}
                />
              </div>
            </div>
          </Route>
          <Route exact path="/rsvp/select">
            <div style={{ textAlign: "center", paddingTop: "2em" }}>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  padding: "2em",
                  paddingTop: "1em"
                }}
              >
                We found multiple invitations that match your search. Please
                choose your invite.
              </div>
              <div style={{ textAlign: "center" }}>
                <InvitationSelect
                  history={history}
                  invitations={matchedInvitations}
                  handleInvitationSelect={handleInvitationSelect}
                />
              </div>
            </div>
          </Route>
          <Route path="/rsvp/:id">
            <RsvpForm selectedInvitation={selectedInvitation} />
          </Route>
        </Switch>
        {history.location.pathname === "/rsvp/select" && (
          <div style={{ width: "100%", textAlign: "center", padding: "1rem" }}>
            <Button
              content="Back"
              color="black"
              icon="left arrow"
              labelPosition="left"
              onClick={() => {
                history.push("/rsvp");
              }}
            />
          </div>
        )}
      </div>
      <Footer style={{ marginTop: 0 }} />
    </div>
  );
};

export default withRouter(RsvpPage);
