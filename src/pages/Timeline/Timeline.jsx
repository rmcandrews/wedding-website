/** @jsx jsx */
import { jsx } from "theme-ui";
import { Footer } from "../../components/Footer";

const items = [
  {
    time: "Friday 7:00p",
    title: "Rehearsal Dinner",
    description: "Homeslice -  938 W Webster Ave, Chicago, IL",
  },
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
    time: "4:45pm",
    title: "Shuttles Arrive back at hotel and begin shuttle service",
    description: (
      <span>
        When the busses arrive back at the hotel they will immidieatly begin a
        shuttle service between the hotel and the reception venue. For those of
        you who want to get a head start at the{" "}
        <a href="https://www.chicagoinrecess.com/" style={{ color: "#e8ca6f" }}>
          bar associated with the venue
        </a>
        , you can catch an early shuttle. The hotel also has a lovely{" "}
        <a
          href="https://www.thegwenchicago.com/dining/upstairs-at-the-gwen/"
          style={{ color: "#e8ca6f" }}
        >
          rooftop bar
        </a>{" "}
        if you prefer that. For those of you that need a power nap, the last
        shuttle will depart from the hotel at 6:30.
      </span>
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
    time: "6:30pm",
    title: "Evening Shuttle Service Ends",
    description: (
      <span>
        The shuttle service between the hotel and the venue will pause
        temporarily. This is the estimated time of the last shuttle leaving the
        hotel.
      </span>
    ),
  },
  {
    time: "7:00pm",
    title: "Dinner",
    description: <span></span>,
  },
  {
    time: "9:30pm",
    title: "Night Shuttle Service Begins",
    description: (
      <span>
        A small shuttle will start to run between the reception venue and hotel.
        Shuttle service will end at 12:15am
      </span>
    ),
  },
  {
    time: "12:00a",
    title: "Reception Ends",
    description: "",
  },
  {
    time: "12:00a",
    title: "After Party Begins?",
    description: "",
  },
  {
    time: "12:30a",
    title: "Night Shuttle Service Ends",
    description: "",
  },
  {
    time: "Sunday 9:00a",
    title: "Brunch",
    description:
      "For those of you staying at The Gwen or nearby, join us for a complimentary brunch from 9 to noon at The Gwen.",
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
