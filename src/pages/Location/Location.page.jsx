/** @jsx jsx */
import { jsx } from "theme-ui";
import FaAngleDown from "react-icons/lib/fa/angle-down";
import { Footer } from "../../components";

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

const detailContentStyle = { fontSize: 16, lineHeight: "30px" };

const detailContentCss = {
  padding: ["0px 10%", "0px 10%", "0px 20%", "0px 20%"]
};

function LocationPage() {
  return (
    <div className="page">
      <section
        css={{
          minHeight: [550, 650, 700],
          background: [
            "url('img/chicago-small.jpg') center center",
            "url('img/chicago-medium.jpg') center center",
            "url('img/chicago-medium.jpg') center center",
            "url('img/chicago-large.jpg') center center"
          ]
        }}
        style={{
          backgroundSize: "cover"
        }}
      >
        <div
          css={{ height: [550, 650, 700] }}
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <div
            css={{ height: [500, 600, 650] }}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ color: "white", textAlign: "center" }}>
              <div css={{ fontSize: [30, 40, 50], fontWeight: "normal" }}>
                TRAVEL
              </div>
              <div css={{ fontSize: [16, 22, 28], fontWeight: "light" }}>
                CHICAGO, IL
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
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
          style={{ textAlign: "center", margin: "50px 0px", fontSize: 40 }}
          css={{ fontWeight: 200 }}
        >
          DIRECTIONS
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 200,
            marginBottom: 50
          }}
        >
          <div>AIRPORTS</div>
          <div style={{ marginTop: 20 }}>
            <div css={detailContainerCss}>
              <div style={detailTitleStyle}>O'HARE (ORD)</div>
              <div style={detailContentStyle} css={detailContentCss}>
                From O'Hare you can take the CTA Blue Line downtown. An Uber or
                Lyft will cost about $45 and take 20-40 minutes
              </div>
            </div>
            <div css={detailContainerCss}>
              <div style={detailTitleStyle}>MIDWAY (MDW)</div>
              <div style={detailContentStyle} css={detailContentCss}>
                From Midway you can take the CTA Orange Line downtown. An Uber
                or Lyft will cost about $25 and take 20-30 minutes
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        css={{
          minHeight: [400, 450, 500],
          background: "url('img/hotel.jpg') center center"
        }}
        style={{
          backgroundSize: "cover"
        }}
      >
        <div
          css={{ height: [400, 450, 500] }}
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ color: "white", textAlign: "center" }}>
            <div css={{ fontSize: [30, 40, 50], fontWeight: "normal" }}>
              WHERE TO STAY
            </div>
            <div css={{ fontSize: [16, 22, 28], fontWeight: "light" }}>
              HOTELS
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
            fontSize: 16
          }}
          css={{
            fontWeight: 200,
            marginLeft: ["10%", "20%", "30%"],
            marginRight: ["10%", "20%", "30%"]
          }}
        >
          We have rooms blocked off for wedding guests at a hotel and a
          guesthouse in the Yvoire-Excenevex area. Mention the Pillai–Chopra
          wedding when you book to get the group discount.
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 200,
            marginBottom: 50
          }}
        >
          <div style={{ marginTop: 20 }}>
            <div css={detailContainerCss}>
              <div style={detailTitleStyle}>ACE HOTEL</div>
              <div style={detailContentStyle} css={detailContentCss}>
                The Ace Hotel is cool. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam vel rutrum lacus. Nunc molestie sem
                maximus tincidunt euismod. Integer maximus risus urna, quis
                scelerisque odio ultricies in.
              </div>
            </div>
            <div css={detailContainerCss}>
              <div style={detailTitleStyle}>SOMETHING DOWNTON</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Something downtown is also cool. Maecenas in mi nulla. Nam
                elementum metus vitae eros malesuada, eu vestibulum leo
                suscipit. Praesent sollicitudin tellus vel ipsum elementum.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        css={{
          minHeight: [400, 450, 500],
          background: "url('img/what-to-do.jpg') center center"
        }}
        style={{
          backgroundSize: "cover"
        }}
      >
        <div
          css={{ height: [400, 450, 500] }}
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ color: "white", textAlign: "center" }}>
            <div css={{ fontSize: [30, 40, 50], fontWeight: "normal" }}>
              WHAT TO DO
            </div>
            <div css={{ fontSize: [16, 22, 28], fontWeight: "light" }}>FUN</div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
            fontSize: 16
          }}
          css={{
            fontWeight: 200,
            marginLeft: ["10%", "20%", "30%"],
            marginRight: ["10%", "20%", "30%"]
          }}
        >
          Donec nulla ante, efficitur sit amet gravida et, dignissim ut enim.
          Quisque at diam vel nisl vestibulum imperdiet consectetur efficitur
          sapien. Maecenas at dolor ut purus imperdiet egestas. Donec sed
          sagittis lacus, sit amet finibus mi.
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 200,
            marginBottom: 50
          }}
        >
          <div style={{ marginTop: 20 }}>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "100%", "33.33%"]
              }}
            >
              <div style={detailTitleStyle}>WOW SUCH FUN</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Cras ut sem mi. Phasellus vitae turpis sagittis, vulputate nibh
                id, condimentum libero. Proin ut justo massa.
              </div>
            </div>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "100%", "33.33%"]
              }}
            >
              <div style={detailTitleStyle}>SO MUCH FUN</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Sed feugiat sit amet justo a dignissim. Duis vulputate nisi in
                quam facilisis, vitae commodo augue tempus.
              </div>
            </div>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "100%", "33.33%"]
              }}
            >
              <div style={detailTitleStyle}>THE MOST FUN</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Nullam ut semper nisl. Praesent volutpat suscipit blandit.
                Vivamus cursus consequat risus, non laoreet neque aliquam at.
                Vivamus eget urna lacus.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LocationPage;
