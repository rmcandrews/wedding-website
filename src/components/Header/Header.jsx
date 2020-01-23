import { useState } from "react";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
/** @jsx jsx */
import { jsx } from "theme-ui";
import Headroom from "react-headroom";
import { MorphIcon } from "react-svg-buttons";
import useWindowSize from "@rooks/use-window-size";
import { useScrollYPosition } from "react-use-scroll-position";

const dib = { display: "inline-block" };
const lgMenuItemStyle = { display: "inline", paddingRight: "25px" };

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { innerWidth } = useWindowSize();
  const scrollY = useScrollYPosition();

  if (innerWidth > 831 && isMenuOpen) {
    setMenuOpen(false);
  }

  let mobileHeaderPadding = Math.min(40 - Math.min(scrollY, 20), 40);
  let headerPadding = Math.min(50 - Math.min(scrollY, 20), 50);

  let logoTop;
  if (innerWidth >= 640) {
    logoTop = Math.min(20 - Math.min(scrollY, 20), 20);
  } else {
    logoTop = Math.min(15 - Math.min(scrollY, 25), 15);
  }

  return (
    <Headroom
      style={{
        backgroundColor: `rgba(0,0,0,${Math.min((scrollY * 4) / 100, 0.6)}`
      }}
    >
      <header
        css={{
          fontWeight: "semibold",
          fontFamily: "sansSerif",
          padding: [`${mobileHeaderPadding}px 0px`, `${headerPadding}px 0px`]
        }}
        style={{
          opacity: 0.99,
          color: "white",
          borderBottom: `1px solid rgba(255,255,255,${0.8 -
            (scrollY * 4) / 100}`,
          marginLeft: "5%",
          marginRight: "5%"
        }}
      >
        <div>
          <div style={{ position: "absolute", top: logoTop }}>
            <img alt="logo" src="img/logo.png" height="75px" />
          </div>
          <div style={dib}>
            <nav css={{ display: ["none", "none", "block"] }}>
              <ul
                style={{
                  margin: "0 0 0 75px",
                  listStyle: "none",
                  display: "inline-block"
                }}
              >
                <li style={lgMenuItemStyle}>
                  <Link to="/">WEDDING</Link>
                </li>
                <li style={lgMenuItemStyle}>
                  <Link to="/location">LOCATION</Link>
                </li>
                <li style={lgMenuItemStyle}>
                  <Link to="/gallery">GALLERY</Link>
                </li>
                {/* <li style={lgMenuItemStyle}>
                  <Link to="/registry">REGISTRY</Link>
                </li> */}
              </ul>
            </nav>
          </div>
          {/* <Button
            csss={{ display: ["none", "none", "inline-block"] }}
            style={{ float: "right", marginTop: -8 }}
            type="ghost"
            color="white"
            hoverColor="#e8ca6f"
          >
            RSVP
          </Button> */}
          <MorphIcon
            style={{
              position: "fixed",
              marginTop: "-16px",
              right: "6%",
              zIndex: 10
            }}
            css={{ display: ["inline", "inline", "none"] }}
            type={isMenuOpen ? "crossSparks" : "bars"}
            size={50}
            thickness={2}
            damping={20}
            stiffness={250}
            color="#FFF"
            id="Hamburger-Menu-click"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {isMenuOpen ? (
              <div
                style={{
                  position: "fixed",
                  height: "100vh",
                  width: "100vw",
                  top: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  zIndex: 1
                }}
              >
                <nav style={{ position: "relative", top: 150 }}>
                  <ul
                    className="menu-list"
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      textAlign: "center"
                    }}
                  >
                    <Link
                      className="noSelect"
                      to="/"
                      onClick={() => setMenuOpen(false)}
                    >
                      <li
                        className="menu-list-item"
                        style={{ animationDelay: "0.1s" }}
                      >
                        WEDDING
                      </li>
                    </Link>
                    <Link
                      className="noSelect"
                      to="/location"
                      onClick={() => setMenuOpen(false)}
                    >
                      <li
                        className="menu-list-item"
                        style={{ animationDelay: "0.2s" }}
                      >
                        LOCATION
                      </li>
                    </Link>
                    <Link
                      className="noSelect"
                      to="/gallery"
                      onClick={() => setMenuOpen(false)}
                    >
                      <li
                        className="menu-list-item"
                        style={{ animationDelay: "0.3s" }}
                      >
                        GALLERY
                      </li>
                    </Link>
                    {/* <li
                      className="menu-list-item"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <Link to="/registry" onClick={() => setMenuOpen(false)}>
                        REGISTRY
                      </Link>
                    </li> */}
                    {/* <li
                      className="menu-list-item"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <Button type="fill" color="#e8ca6f" hoverColor="#e8ca6f">
                        RSVP
                      </Button>
                    </li> */}
                  </ul>
                </nav>
              </div>
            ) : (
              ""
            )}
          </ReactCSSTransitionGroup>
        </div>
      </header>
      {/* <RSVP isOpen={true} /> */}
    </Headroom>
  );
}

export default Header;
