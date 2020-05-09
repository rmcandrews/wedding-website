import React from "react";
import "./ShuttleDetails.css";

const ShuttleDetails = () => {
  return (
    <div className="shuttleDetailsContainer">
      <h1>Shuttle Schedule</h1>
      <h2>Ceremony</h2>
      <h3>2:15 PM</h3>
      <p>Busses from The Gwen Hotel to Queen of All Saints</p>
      <h3>4:15 PM</h3>
      <p>Busses from Queen of All Saints to The Gwen Hotel</p>
      <h2>Reception</h2>
      <h3>5:40 PM</h3>
      <p>Busses from The Gwen Hotel to the reception venue</p>
      <h3>10:00 PM - 1:00 AM</h3>
      <p>
        Shuttle between the reception venue and The Gwen Hotel every 15 minutes
      </p>
    </div>
  );
};

export default ShuttleDetails;
