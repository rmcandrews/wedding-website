/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, Countdown, Footer } from "../../components";
import FaMap from "react-icons/lib/fa/map";
import FaAngleDown from "react-icons/lib/fa/angle-down";

const detailContainerCss = {
  display: "inline-block",
  verticalAlign: "top",
  width: ["100%", "100%", "100%", "50%"],
  fontWeight: 300,
  marginTop: [25, 25, 25, 0]
};

const detailTitleStyle = {
  fontSize: 20,
  marginBottom: 20,
  color: "#e8ca6f",
  fontWeight: 400
};

const detailContentStyle = { fontSize: 14, lineHeight: "24px" };

const detailContentCss = {
  padding: "0px 5%"
};

function WeddingPage() {
  return (
    <div className="page">
      <section
        css={{ minHeight: [550, 750, 800] }}
        style={{
          background: "url('img/IMG_5592.JPG') center center",
          backgroundSize: "cover"
        }}
      >
        <div
          style={{ textAlign: "center", width: "100%" }}
          css={{ paddingTop: [350, 475, 500] }}
        >
          <Countdown />
          <Button type="fill" size="large" color="#e8ca6f" hoverColor="#e8ca6f">
            RSVP
          </Button>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              padding: "10px 0",
              color: "white",
              fontSize: 30
            }}
            className="scroll-indicator"
          >
            <FaAngleDown />
          </div>
        </div>
      </section>
      <section>
        <div
          style={{ textAlign: "center", fontSize: 30 }}
          css={{ fontWeight: 200, margin: ["50px 5%", "50px 20%"] }}
        >
          Please join Taya and Ryan on July 25th, 2020 as we celebrate our
          wedding in Chicago.
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 200,
            marginBottom: 50,
            margin: "0px 5%"
          }}
        >
          <div style={{ marginTop: 20 }}>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "33.33%", "33.33%"]
              }}
            >
              <img
                alt="ryan"
                src="img/ryan.jpg"
                width="80%"
                style={{ marginBottom: 10 }}
              />
              <div style={detailTitleStyle}>RYAN</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Cras ut sem mi. Phasellus vitae turpis sagittis, vulputate nibh
                id, condimentum libero. Proin ut justo massa.
              </div>
            </div>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "33.33%", "33.33%"]
              }}
            >
              <img
                alt="taya"
                src="img/taya.jpg"
                width="80%"
                style={{ marginBottom: 10 }}
              />
              <div style={detailTitleStyle}>TAYA</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Sed feugiat sit amet justo a dignissim. Duis vulputate nisi in
                quam facilisis, vitae commodo augue tempus.
              </div>
            </div>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "33.33%", "33.33%"]
              }}
            >
              <img
                alt="us"
                src="img/us.jpg"
                width="80%"
                style={{ marginBottom: 10 }}
              />
              <div style={detailTitleStyle}>US</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Nullam ut semper nisl. Praesent volutpat suscipit blandit.
                Vivamus cursus consequat risus, non laoreet neque aliquam at.
                Vivamus eget urna lacus.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        css={{
          minHeight: [400, 450, 500],
          background: "url('img/queens.jpg') center center"
        }}
        style={{
          backgroundSize: "cover"
        }}
      >
        <div
          css={{ height: [400, 450, 500] }}
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50
          }}
        >
          <div style={{ color: "white", textAlign: "center" }}>
            <div css={{ fontSize: [30, 40, 50], fontWeight: "normal" }}>
              CEREMONY
            </div>
            <div css={{ fontSize: [16, 22, 28], fontWeight: "light" }}>
              HERE COMES THE BRIDE
            </div>
          </div>
        </div>
      </section>
      <section style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 20,
            color: "#e8ca6f",
            fontWeight: 400,
            marginTop: 50
          }}
        >
          QUEEN OF ALL SAINTS
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginTop: 15
          }}
        >
          3:00 PM
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            marginTop: 15,
            lineHeight: "28px"
          }}
        >
          6280 N Sauganash Ave
          <br />
          Chicago, IL 60646
          <br />
          (773) 736-6060
        </div>
        <div style={{ marginTop: 15 }}>
          <Button
            type="fill"
            onClick={() => {
              window.open(
                "https://www.google.com/maps/place/Queen+of+All+Saints+Basilica/@41.9954372,-87.7468087,17z/data=!3m1!4b1!4m5!3m4!1s0x880fce8d2001307f:0xbc6e8ed0ef34e0fc!8m2!3d41.9954372!4d-87.74462",
                "_newtab"
              );
            }}
            style={{ marginRight: 5 }}
          >
            <FaMap /> MAP
          </Button>
          <Button
            type="fill"
            onClick={() => {
              window.open(
                "https://m.uber.com/ul/?action=setPickup&client_id=xHi2Lo0Eu_rfUeCrxghCA8jKjWULjNAp&pickup=my_location&dropoff[formatted_address]=Queen%20of%20All%20Saints%20Basilica%2C%20North%20Sauganash%20Avenue%2C%20Chicago%2C%20IL%2C%20USA&dropoff[latitude]=41.995437&dropoff[longitude]=-87.744620",
                "_newtab"
              );
            }}
            style={{ marginLeft: 5 }}
          >
            <i class="fab fa-uber" /> UBER
          </Button>
        </div>
      </section>
      <section
        css={{
          minHeight: [400, 450, 500],
          background: "url('img/reception.webp') center center"
        }}
        style={{
          backgroundSize: "cover"
        }}
      >
        <div
          css={{ height: [400, 450, 500] }}
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50
          }}
        >
          <div style={{ color: "white", textAlign: "center" }}>
            <div css={{ fontSize: [30, 40, 50], fontWeight: "normal" }}>
              RECEPTION
            </div>
            <div css={{ fontSize: [16, 22, 28], fontWeight: "light" }}>
              PARTY TIME
            </div>
          </div>
        </div>
      </section>
      <section style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 20,
            color: "#e8ca6f",
            fontWeight: 400,
            marginTop: 50
          }}
        >
          CITY HALL
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginTop: 15
          }}
        >
          6:00 PM
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            marginTop: 15,
            lineHeight: "28px"
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
        <div style={{ marginTop: 15 }}>
          <Button
            type="fill"
            onClick={() => {
              window.open(
                "https://www.google.com/maps/place/838+W+Kinzie+St,+Chicago,+IL+60642/@41.889282,-87.6512327,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2cd1c3af1c43:0xfcce64686d814594!8m2!3d41.889278!4d-87.649044",
                "_newtab"
              );
            }}
            style={{ marginRight: 5 }}
          >
            <FaMap style={{ fontSize: 12 }} /> MAP
          </Button>
          <Button
            type="fill"
            onClick={() => {
              window.open(
                "https://m.uber.com/ul/?action=setPickup&client_id=xHi2Lo0Eu_rfUeCrxghCA8jKjWULjNAp&pickup=my_location&dropoff[formatted_address]=838%20West%20Kinzie%20Street%2C%20Chicago%2C%20IL%2C%20USA&dropoff[latitude]=41.889278&dropoff[longitude]=-87.649044",
                "_newtab"
              );
            }}
            style={{ marginLeft: 5 }}
          >
            <i class="fab fa-uber" /> UBER
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WeddingPage;
