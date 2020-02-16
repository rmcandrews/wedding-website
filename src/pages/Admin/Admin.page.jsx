import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import { Footer } from "../../components";
import { Invitation } from "./components/Invitation";
import { CreateInvitation } from "./components/CreateInvitation";
import { Button } from "semantic-ui-react";

const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://fngvfv45l9.execute-api.us-east-1.amazonaws.com/production";

function AdminPage() {
  const [invitations, setInvitations] = useState([]);
  const [invitationsEditing, setInvitationsEditing] = useState([]);
  const [isAddingInvitation, setIsAddingInvitation] = useState(false);

  useEffect(() => {
    const fetchInvitations = async () => {
      const result = await axios(apiHost + "/invitations");
      setInvitations(result.data);
    };
    fetchInvitations();
  }, []);

  const handleCreateInvitation = async id => {
    try {
      const result = await axios(apiHost + "/invitations");
      setInvitations(result.data);
      setIsAddingInvitation(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditCancel = (e, id) => {
    if (e) e.preventDefault();
    let newInvitationsEditing = [...invitationsEditing];
    const index = newInvitationsEditing.indexOf(id);
    if (index !== -1) {
      newInvitationsEditing.splice(index, 1);
      setInvitationsEditing(newInvitationsEditing);
    }
  };

  const handleDelete = async (e, id) => {
    try {
      await axios.delete(apiHost + `/invitations/${id}`);
      const result = await axios(apiHost + "/invitations");
      handleEditCancel(undefined, id);
      setInvitations(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditInvitation = async id => {
    try {
      const result = await axios(apiHost + "/invitations");
      handleEditCancel(undefined, id);
      setInvitations(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditOpen = id => {
    setInvitationsEditing([...invitationsEditing, id]);
  };

  const exportCsv = () => {
    let csv =
      "Invite Name, First Name, Last Name, Meal, Wedding Invite, Attending Wedding, Rehersal Invite, Attending Rehersal, Address Line 1, Address Line 2, City, State, Zip\n";
    invitations.forEach(invitation => {
      invitation.guests.forEach(guest => {
        csv += `"${invitation.name}",`;
        csv += `"${guest.firstName}",`;
        csv += `"${guest.lastName}",`;
        csv += `"${guest.mealSelection}",`;
        csv += `"${guest.weddingInvite ? "TRUE" : "FALSE"}",`;
        csv += `"${guest.isAttendingWedding || "Unknown"}",`;
        csv += `"${guest.rehersalInvite ? "TRUE" : "FALSE"}",`;
        csv += `"${
          guest.rehersalInvite ? guest.isAttendingRehersal || "Unknown" : "No"
        }",`;
        if (invitation.address) {
          csv += `"${invitation.address.line1 || ""}",`;
          csv += `"${invitation.address.line2 || ""}",`;
          csv += `"${invitation.address.city || ""}",`;
          csv += `"${invitation.address.state || ""}",`;
          csv += `"${invitation.address.zip || ""}"\n`;
        } else {
          csv += '"","","","",""\n';
        }
      });
    });

    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
    );
    element.setAttribute("download", "Guest List.csv");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const invitationItems = invitations.map(invitation => {
    if (invitationsEditing.includes(invitation.id)) {
      return (
        <CreateInvitation
          id={invitation.id}
          invitation={invitation}
          handleSubmit={handleEditInvitation}
          key={invitation.id}
          isEdit={true}
          handleCancel={handleEditCancel}
          handleDelete={handleDelete}
        />
      );
    } else {
      return (
        <Invitation
          invitation={invitation}
          key={invitation.id}
          handleEdit={handleEditOpen}
        />
      );
    }
  });

  return (
    <div style={{ marginTop: -150 }}>
      <div style={{ height: 149, backgroundColor: "black" }} />
      <div style={{ padding: 10, minHeight: 700 }}>
        <div style={{ overflow: "auto", marginBottom: 10 }}>
          <span style={{ fontSize: 22, lineHeight: "2em" }}>INVITATIONS</span>
          {!isAddingInvitation && (
            <Button
              positive
              onClick={() => setIsAddingInvitation(true)}
              className="addInviteButton"
              size="tiny"
            >
              Add Invitation
            </Button>
          )}
          {isAddingInvitation && (
            <Button
              onClick={() => setIsAddingInvitation(false)}
              className="addInviteButton"
              size="tiny"
            >
              Cancel
            </Button>
          )}
          <Button
            onClick={exportCsv}
            className="addInviteButton"
            style={{ marginRight: "1rem" }}
            size="tiny"
          >
            CSV
          </Button>
        </div>
        <div>
          {isAddingInvitation && (
            <CreateInvitation
              handleSubmit={handleCreateInvitation}
              handleCancel={() => setIsAddingInvitation(false)}
            />
          )}
          {invitationItems}
        </div>
      </div>
      <Footer style={{ marginTop: 0 }} />
    </div>
  );
}

export default AdminPage;
