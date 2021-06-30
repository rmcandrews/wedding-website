/** @jsx jsx */
import { jsx } from "theme-ui";
import { Footer } from "../../components/Footer";

const items = [
  {
    time: "1:45pm",
    title: "Shuttles Depart for Ceremony",
    description:
      "Please be in the lobby of The Gwen Hotel by 1:40pm to catch the shuttles to the venue.",
  },
  {
    time: "3:00pm",
    title: "Ceremony",
    description:
      "The ceremony will take place at Queen of All Saints Basilica - 6280 N Sauganash Ave, Chicago, IL",
  },
  {
    time: "4:15pm",
    title: "Shuttles Depart back to the hotel",
    description: "After the ceremony the shuttles will return to the hotel.",
  },
  {
    time: "",
    title: "Break",
    description: (
      <span>
        In the downtime before cocktail hour feel free to go back to your room
        to freshen up or get the party started early. The hotel has a lovely{" "}
        <a
          href="https://www.thegwenchicago.com/dining/upstairs-at-the-gwen/"
          style={{ color: "#e8ca6f" }}
        >
          rooftop bar
        </a>{" "}
        or you can head over early and drink at the{" "}
        <a href="https://www.chicagoinrecess.com/" style={{ color: "#e8ca6f" }}>
          bar associated with the venue
        </a>
        .
      </span>
    ),
  },
  {
    time: "5:10pm",
    title: "Shuttles #1 Departs to the venue",
    description: (
      <span>
        For those of you who want to drink at the{" "}
        <a href="https://www.chicagoinrecess.com/" style={{ color: "#e8ca6f" }}>
          bar associated with the venue
        </a>{" "}
        a shuttle will take you from the hotel to the reception venue a little
        early.
      </span>
    ),
  },
  {
    time: "5:50pm",
    title: "Shuttles #2 Departs to the venue",
    description: (
      <span>Will arrive at the venue for the beggining of cocktail hour.</span>
    ),
  },
  {
    time: "6:00pm",
    title: "Reception",
    description: (
      <span>
        The reception will take place at{" "}
        <a href="https://thecityhall.com/" style={{ color: "#e8ca6f" }}>
          City Hall
        </a>{" "}
        - 838 W Kinzie St, Chicago, IL
        <br />
        <br />
        <strong>Complimentary valet parking will be available</strong>
        <br />
        <br />
        <i>
          Important Note: This is not the Chicago City Hall, that is just the
          name of the venue. Do not hop into a cab and tell them to take you to
          city hall.
        </i>
      </span>
    ),
  },
  {
    time: "6:00pm",
    title: "Cocktail Hour",
    description: <span></span>,
  },
  {
    time: "7:00pm",
    title: "Dinner",
    description: <span></span>,
  },
  {
    time: "10:00p",
    title: "Shuttle service",
    description: (
      <span>
        A small shuttle will start to run between the reception venue and hotel.
        Shuttle service will end at 12:15am
      </span>
    ),
  },
];

function TimelinePage() {
  return (
    <div style={{ marginTop: -150 }}>
      <div style={{ height: 149, backgroundColor: "black" }} />
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            maxWidth: 500,
            margin: "auto",
            marginTop: "2rem",
          }}
        >
          {items.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  marginBottom: "2rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  style={{
                    flex: "0 0 125px",
                    textAlign: "right",
                    fontSize: 26,
                    paddingRight: "1.5rem",
                    color: "#e8ca6f",
                  }}
                >
                  {item.time}
                </div>
                <div style={{ flexGrow: 3, textAlign: "left" }}>
                  <div style={{ fontSize: 26, marginBottom: "0.5rem" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 16, lineHeight: 1.25 }}>
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TimelinePage;
