import React from "react";
import "./RsvpForm.css";

const Details = ({ showRehersal }) => {
  return (
    <div className="detailsContainer">
      {showRehersal && (
        <section style={{ textAlign: "center" }}>
          <h3 className="detailsTitle">Rehersal Dinner</h3>
          <div
            style={{
              fontSize: 20,
              fontWeight: 400,
            }}
          >
            Friday July 16th, 7:00 PM
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 500,
              marginTop: 20,
            }}
          >
            HOME SLICE PIZZA
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginTop: 15,
              lineHeight: "28px",
            }}
          >
            938 W Webster Ave
            <br />
            Chicago, IL 60614
            <br />
            <a
              href="http://www.getsomehomie.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              getsomehomie.com
            </a>
          </div>
        </section>
      )}
      <section
        style={{
          textAlign: "center",
          marginTop: showRehersal ? "2rem" : "",
        }}
      >
        <h3 className="detailsTitle">Wedding</h3>
        <div
          style={{
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          Saturday July 17th, 3:00 PM
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginTop: 15,
          }}
        >
          QUEEN OF ALL SAINTS
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginTop: 20,
            lineHeight: "28px",
          }}
        >
          6280 N Sauganash Ave
          <br />
          Chicago, IL 60646
          <br />
          (773) 736-6060
        </div>
      </section>
      <section style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3 className="detailsTitle">Reception</h3>
        <div
          style={{
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          Saturday July 17th, 6:00 PM
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginTop: 20,
          }}
        >
          CITY HALL
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginTop: 15,
            lineHeight: "28px",
          }}
        >
          838 W Kinzie St
          <br />
          Chicago, IL 60642
          <br />
          <a
            href="https://thecityhall.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            thecityhall.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Details;
