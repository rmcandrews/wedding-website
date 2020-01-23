import React from "react";
import { Button } from "semantic-ui-react";
import "./Invitation.css";

function Invitation({ invitation, handleEdit }) {
  let { address } = invitation;

  let displayedAddress = "";
  if (address.line1) {
    displayedAddress = `${address.line1} ${
      address.line2 ? ` ${address.line2}` : ""
    }, ${address.city}, ${address.state} ${address.zip}`;
  }

  return (
    <div className="invitation" style={{ overflow: "auto" }}>
      <div>
        <span className="title">
          <span className="titleName">{invitation.name}</span>
          <span className="titleAddress">{displayedAddress}</span>
        </span>
        <Button
          size="mini"
          basic
          onClick={() => handleEdit(invitation.id)}
          style={{ float: "right" }}
        >
          View/Edit
        </Button>
      </div>
    </div>
  );
}

export default Invitation;
