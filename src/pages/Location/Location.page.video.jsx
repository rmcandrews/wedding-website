/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import YouTube from "react-youtube";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function LocationPage() {
  const [isVideoReady, setVideoReady] = useState(false);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      start: 40
    }
  };

  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.mute();
  };

  const _onEnd = event => {
    event.target.playVideo();
  };

  return (
    <div className="page">
      <section>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {!isVideoReady ? (
            <div
              style={{
                position: "fixed",
                height: 465,
                width: "100%",
                top: 0,
                backgroundColor: "black",
                transform: "opacity 0.5s ease"
              }}
            />
          ) : (
            undefined
          )}
        </ReactCSSTransitionGroup>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: isVideoReady ? 465 : 0
          }}
        >
          <div className="video-background">
            <div className="video-foreground">
              <YouTube
                videoId="NtCM2O9v9mQ"
                opts={opts}
                className="video-iframe"
                onPlay={() => {
                  setVideoReady(true);
                }}
                onReady={_onReady}
                onEnd={_onEnd}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LocationPage;
