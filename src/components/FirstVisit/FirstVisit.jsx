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
          height: 120,
          width: 120,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 2px rgba(255,255,255,.2)",
          marginLeft: "-60px",
          marginTop: "-60px"
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "60px",
          height: "120px",
          marginLeft: "-60px",
          marginTop: "-60px",
          overflow: "hidden",
          WebkitTransformOrigin: "60px 60px",
          MozTransformOrigin: "60px 60px",
          MsTransformOrigin: "60px 60px",
          OTransformOrigin: "60px 60px",
          transformOrigin: "60px 60px",
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
            width: "120px",
            height: "120px",
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
