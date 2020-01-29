/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";

import "./InvitationSelect.css";

const InvitationSelect = ({ invitations, handleInvitationSelect, history }) => {
  useEffect(() => {
    if (!invitations || invitations.length === 0) history.push("/rsvp");
  }, []);

  if (invitations && invitations.length > 0) {
    return (
      <Card.Group>
        {invitations.map(invitation => {
          const { address } = invitation;
          const displayedAddress = `${address.line1}${
            address.line2 ? ` ${address.line2}` : ""
          }, ${address.city}, ${address.state} ${address.zip}`;
          return (
            <Card
              fluid
              key={invitation.id}
              header={invitation.name}
              description={displayedAddress}
              className="invitationSelect"
              tabIndex={0}
              onClick={() => {
                handleInvitationSelect(invitation);
              }}
            />
          );
        })}
      </Card.Group>
    );
  }
  return <div></div>;
};

export default InvitationSelect;
