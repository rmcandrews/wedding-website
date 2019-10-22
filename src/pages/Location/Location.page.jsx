/** @jsx jsx */
import { jsx } from "theme-ui";
import FaAngleDown from "react-icons/lib/fa/angle-down";
import { Footer } from "../../components";
import { Parallax } from "react-parallax";

const detailContainerCss = {
  display: "inline-block",
  verticalAlign: "top",
  width: ["100%", "100%", "100%", "50%"],
  marginBottom: ["1rem", "1rem", "1rem", "0rem"],
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
      <Parallax
        strength={200}
        bgImage={require("./hotel.jpg")}
        style={{ marginTop: 50 }}
      >
        <section
          css={{
            minHeight: [400, 450, 500]
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
      </Parallax>
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
      <Parallax
        strength={200}
        bgImage={require("./what-to-do.jpg")}
        style={{ marginTop: 50 }}
      >
        <section
          css={{
            minHeight: [400, 450, 500]
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
              <div css={{ fontSize: [16, 22, 28], fontWeight: "light" }}>
                EXPLORA LIKE DORA
              </div>
            </div>
          </div>
        </section>
      </Parallax>
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
            marginLeft: ["10%", "20%", "20%"],
            marginRight: ["10%", "20%", "20%"],
            lineHeight: [1.5]
          }}
        >
          Chicago is a city unlike any other. It has architectural marvels,
          world-class museums, dynamic entertainment, and award-winning dining
          scene you’d expect from one of the world’s greatest cities. But it's
          more than just another big city — our welcoming residents, inclusive
          neighborhoods, and Midwestern soul truly make Chicago the city that
          feels like home.
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
              <div style={detailTitleStyle}>PARKS</div>
              <div style={detailContentStyle} css={detailContentCss}>
                The Chicago Park District owns more than 8800 acres of green
                space, making it the largest municipal park manager in the
                nation. Go to Millenium Park to see "The Bean". See Buckingham
                Fountain or sit along the lake front in Grant Park. Head up to
                Lincoln Park to take a walk through the free zoo.
                <br />
                <a
                  href="https://www.chicagoparkdistrict.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e8ca6f" }}
                >
                  www.chicagoparkdistrict.com
                </a>
                <br />
                <a
                  href="https://www.lpzoo.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e8ca6f" }}
                >
                  www.lpzoo.org
                </a>
              </div>
            </div>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "100%", "33.33%"]
              }}
            >
              <div style={detailTitleStyle}>ARCHITECTURE TOUR</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Chicago is known around the world for its architecture. Whether
                you tour downtown or a neighborhood, our expert docent guides
                will tell you the stories behind the buildings. Visit iconic
                skyscrapers, elegant hotels or the legendary houses of Frank
                Lloyd Wright.
                <br />
                <a
                  href="https://www.architecture.org/tours/detail/chicago-architecture-foundation-center-river-cruise-aboard-chicagos-first-lady/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e8ca6f" }}
                >
                  www.architecture.org
                </a>
              </div>
            </div>
            <div
              css={{
                ...detailContainerCss,
                width: ["100%", "100%", "100%", "33.33%"]
              }}
            >
              <div style={detailTitleStyle}>MUSEUMS</div>
              <div style={detailContentStyle} css={detailContentCss}>
                Explore ancient Egyptian tombs, underwater worlds, Impressionist
                masterpieces, the depths of space, and beyond. From major
                exhibits to neighborhood cultural attractions, there’s a whole
                world to explore at Chicago’s renowned museums.
                <br />
                <a
                  href="https://www.fieldmuseum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e8ca6f" }}
                >
                  www.fieldmuseum.org
                </a>
                <br />
                <a
                  href="https://www.sheddaquarium.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e8ca6f" }}
                >
                  www.sheddaquarium.org
                </a>
                <br />
                <a
                  href="https://www.artic.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e8ca6f" }}
                >
                  www.artic.edu
                </a>
                <br />
                <a
                  href="https://www.adlerplanetarium.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e8ca6f" }}
                >
                  www.adlerplanetarium.org
                </a>
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
