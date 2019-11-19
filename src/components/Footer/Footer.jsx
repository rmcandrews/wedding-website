/** @jsx jsx */
import { jsx } from "theme-ui";

function Footer({ style }) {
  return (
    <div
      style={{
        height: 100,
        marginTop: 50,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        ...style
      }}
    >
      <span>
        Powered by{" "}
        <a
          href="https://github.com/rmcandrews"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Ryan
        </a>
      </span>
    </div>
  );
}

export default Footer;
