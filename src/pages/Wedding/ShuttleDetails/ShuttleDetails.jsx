import React from "react";
import "./ShuttleDetails.css";

const ShuttleDetails = () => {
  return (
    <div className="shuttleDetailsContainer">
      <h1>Schedule</h1>
      <h2>Saturday 7/16</h2>
      <h3>7:00PM - Rehearsal Dinner</h3>
      <p>
        <strong>Homeslice Pizza</strong>
        <br />
        938 W Webster Ave, Chicago, IL 60614
      </p>
      <h2>Sunday 7/17</h2>
      <h3>1:50PM - Shuttle #1 Departs</h3>
      <h3>2:00PM - Shuttle #2 Departs</h3>
      <p>
        <strong>From The Gewn Hotel</strong>
        <br />
        521 N Rush St, Chicago, IL 60611
      </p>
      <h3>3:00PM - Ceremony</h3>
      <p>
        <strong>Queen of All Saints Basilica</strong>
        <br />
        6280 N Sauganash Ave, Chicago, IL 60646
      </p>
      <h3>After the Cermony</h3>
      <p>Shuttles return to The Gwen Hotel</p>
      <h3>5:40PM - Shuttles Depart the Hotel to the reception</h3>
      <h3>6:00PM - Cocktail Hour</h3>
      <p>
        <strong>City Hall Events</strong>
        <br />
        East Entrance, 838 W Kinzie St, Chicago, IL 60642
      </p>
      <h3>7:00PM - Dinner</h3>
      <h3>Between 10:00 and Midnight</h3>
      <p>
        Shuttle service availble between the reception venue and The Gwen hotel
      </p>
    </div>
  );
};

export default ShuttleDetails;
