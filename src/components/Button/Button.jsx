import { useState } from "react";
import { isMobile } from "react-device-detect";
/** @jsx jsx */
import { jsx } from "theme-ui";

const styles = {
  fill: {
    backgroundColor: "transparent"
  },
  ghost: {
    background: "transparent",
    border: "solid 2px"
  }
};

const sizes = {
  small: {
    padding: "8px 30px",
    borderRadius: 40
  },
  large: {
    padding: "13px 45px",
    borderRadius: 40
  }
};

const Button = ({
  color,
  hoverColor,
  size,
  type,
  csss,
  style,
  children,
  id,
  onClick
}) => {
  const [isHovering, setIsHovering] = useState(false);

  if (!size) size = "small";
  if (!color) color = "#e8ca6f";
  if (!hoverColor) hoverColor = color;

  let finalStyle = {
    color,
    borderColor: color,
    cursor: "pointer",
    fontSize: 14,
    transition:
      "color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
    ...sizes[size],
    ...styles[type || "fill"],
    ...style
  };

  const onMouseEnter = () => {
    setIsHovering(!isMobile);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  if (isHovering) {
    if (type === "ghost") {
      finalStyle.color = hoverColor;
      finalStyle.borderColor = hoverColor;
    } else {
      finalStyle.color = "white";
      finalStyle.borderColor = hoverColor;
      finalStyle.backgroundColor = hoverColor;
    }
  }

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      css={{ fontWeight: "semibold", fontFamily: "sansSerif", ...csss }}
      style={finalStyle}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
