/** @jsx jsx */
import { jsx } from "theme-ui";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTimer } from "react-timer-hook";

const circleSize = [75, 75, 100];
const circleCss = {
  width: circleSize,
  display: "inline-block",
  marginLeft: "10px",
  marginRight: "10px"
};

const Countdown = ({ style }) => {
  const expiryTimestamp = new Date("07/25/2020 15:00 UTC-5").getTime();
  const { minutes, hours, days } = useTimer({
    expiryTimestamp
  });

  return (
    <div
      style={{ ...style }}
      css={{ marginTop: ["1rem", "2rem", "3rem"], marginBottom: "1rem" }}
    >
      <div css={circleCss}>
        <CircularProgressbar value={(days / 365) * 100} text={`${days}`} />;
      </div>
      <div css={circleCss}>
        <CircularProgressbar value={(hours / 24) * 100} text={`${hours}`} />;
      </div>
      <div css={circleCss}>
        <CircularProgressbar value={(minutes / 60) * 100} text={`${minutes}`} />
        ;
      </div>
    </div>
  );
};

export default Countdown;
