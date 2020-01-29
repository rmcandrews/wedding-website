import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Footer } from "../../components";
import { NameForm, InvitationSelect, RsvpForm } from "./components";
import { Button } from "semantic-ui-react";

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
      <div style={{ padding: 10, minHeight: 700 }}>
        <Switch>
          <Route exact path="/rsvp">
            <NameForm handleInvitationsRetrieved={handleInvitationsRetrieved} />
          </Route>
          <Route exact path="/rsvp/select">
            <InvitationSelect
              history={history}
              invitations={matchedInvitations}
              handleInvitationSelect={handleInvitationSelect}
            />
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
