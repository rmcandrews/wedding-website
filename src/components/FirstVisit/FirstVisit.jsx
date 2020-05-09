import React from "react";
import Particles from "react-particles-js";
import useWindowSize from "@rooks/use-window-size";

const particleParameters = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const FirstVisit = ({ opacity }) => {
  const { innerWidth, innerHeight } = useWindowSize();

  const imageHeight = 150;
  const imageWidth = imageHeight * 0.5266666667;
  const circleRadius = 120;

  return (
    <div
      style={{
        position: "fixed",
        padding: 0,
        margin: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
        zIndex: 2,
        opacity
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          height: circleRadius * 2,
          width: circleRadius * 2,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 2px rgba(255,255,255,.2)",
          marginLeft: -circleRadius,
          marginTop: -circleRadius
        }}
      />
      <img
        alt="logo"
        src="img/Taya+Ryan.svg"
        height={imageHeight}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: imageWidth,
          height: imageHeight,
          marginTop: -(imageHeight / 2) + 5,
          marginLeft: -(imageWidth / 2) - 2.5
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: circleRadius,
          height: circleRadius * 2,
          marginLeft: -circleRadius,
          marginTop: -circleRadius,
          overflow: "hidden",
          WebkitTransformOrigin: `${circleRadius}px ${circleRadius}px`,
          MozTransformOrigin: `${circleRadius}px ${circleRadius}px`,
          MsTransformOrigin: `${circleRadius}px ${circleRadius}px`,
          OTransformOrigin: `${circleRadius}px ${circleRadius}px`,
          transformOrigin: `${circleRadius}px ${circleRadius}px`,
          WebkitMaskImage:
            "-webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0))",
          WebkitAnimation: "rotate 1.2s infinite linear",
          MozAnimation: "rotate 1.2s infinite linear",
          OAnimation: "rotate 1.2s infinite linear",
          animation: "rotate 1.2s infinite linear"
        }}
      >
        <div
          style={{
            width: circleRadius * 2,
            height: circleRadius * 2,
            borderRadius: "50%",
            boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.5)"
          }}
        />
      </div>
      <Particles
        style={{
          marginTop: -innerWidth * 0.2,
          marginLeft: -innerHeight * 0.2,
          marginBottom: 0,
          marginRight: 0
        }}
        width={innerWidth * 1.5}
        height={innerHeight * 1.5}
        params={particleParameters}
      />
    </div>
  );
};

export default FirstVisit;
