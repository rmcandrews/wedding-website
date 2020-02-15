import { useState } from "react";
import { isMobile } from "react-device-detect";
/** @jsx jsx */
import { jsx } from "theme-ui";

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
  className,
  onClick,
  ref
}) => {
  const [isHovering, setIsHovering] = useState(false);

  let textColor;
  let backgroundColor;
  if (!type) type = "fill";
  if (!size) size = "small";
  if (!color) {
    backgroundColor = type === "fill" ? "#e8ca6f" : "white";
    textColor = type === "fill" ? "white" : "#e8ca6f";
  } else {
    backgroundColor = type === "fill" ? color : "white";
    textColor = type === "fill" ? "white" : color;
  }

  if (!hoverColor) hoverColor = type === "fill" ? "white" : backgroundColor;

  let finalStyle = {
    color: textColor,
    backgroundColor,
    borderColor: textColor,
    cursor: "pointer",
    fontSize: 14,
    border: "solid 1px",
    transition:
      "color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
    ...sizes[size],
    ...style
  };

  const onMouseEnter = () => {
    setIsHovering(!isMobile);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  if (isHovering) {
    finalStyle.color = backgroundColor;
    finalStyle.backgroundColor = textColor;
    finalStyle.borderColor = textColor;
  }

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      css={{ fontWeight: "semibold", fontFamily: "sansSerif", ...csss }}
      style={finalStyle}
      id={id}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
