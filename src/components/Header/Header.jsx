import { useState } from "react";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
/** @jsx jsx */
import { jsx } from "theme-ui";
import Headroom from "react-headroom";
import { MorphIcon } from "react-svg-buttons";
import useWindowSize from "@rooks/use-window-size";
import { useScrollYPosition } from "react-use-scroll-position";
import { Button } from "../Button";

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
  return (
    <Headroom
      style={{
        backgroundColor: `rgba(0,0,0,${Math.min((scrollY * 4) / 100, 0.99)}`
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
          <div style={dib}>TAYA & RYAN</div>
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
                  <Link to="/travel">TRAVEL</Link>
                </li>
                <li style={lgMenuItemStyle}>REGISTRY</li>
              </ul>
            </nav>
          </div>
          <Button
            csss={{ display: ["none", "none", "inline-block"] }}
            style={{ float: "right", marginTop: -8 }}
            type="ghost"
            color="white"
            hoverColor="#e8ca6f"
          />
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
                    <li
                      className="menu-list-item"
                      style={{ animationDelay: "0.1s" }}
                    >
                      WEDDING
                    </li>
                    <li
                      className="menu-list-item"
                      style={{ animationDelay: "0.2s" }}
                    >
                      LOCATION
                    </li>
                    <li
                      className="menu-list-item"
                      style={{ animationDelay: "0.3s" }}
                    >
                      REGISTRY
                    </li>
                    <li
                      className="menu-list-item"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <Button
                        type="fill"
                        color="#e8ca6f"
                        hoverColor="#e8ca6f"
                      />
                    </li>
                  </ul>
                </nav>
              </div>
            ) : (
              ""
            )}
          </ReactCSSTransitionGroup>
        </div>
      </header>
    </Headroom>
  );
}

export default Header;
