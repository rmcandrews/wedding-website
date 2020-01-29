import React from "react";
import { Button } from "semantic-ui-react";
import "./Invitation.css";

function Invitation({ invitation, handleEdit }) {
  let { address } = invitation;

  let displayedAddress = "";
  let addressNeeded = false;
  if (address.line1) {
    displayedAddress = `${address.line1}${
      address.line2 ? ` ${address.line2}` : ""
    }, ${address.city}, ${address.state} ${address.zip}`;
  } else {
    displayedAddress = "Address Needed";
    addressNeeded = true;
  }

  return (
    <div className="invitation" style={{ overflow: "auto" }}>
      <div>
        <span className="title">
          <div className="titleName">{invitation.name}</div>
          <div
            className="titleAddress"
            style={{ color: addressNeeded ? "red" : "" }}
          >
            {displayedAddress}
          </div>
        </span>
        <Button
          size="mini"
          basic
          onClick={() => handleEdit(invitation.id)}
          style={{ float: "right", marginRight: 0, marginTop: "0.9em" }}
        >
          View/Edit
        </Button>
      </div>
    </div>
  );
}

export default Invitation;
