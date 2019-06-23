/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, Countdown } from "../../components";

function WeddingPage() {
  return (
    <div className="page">
      <section
        css={{ minHeight: [600, 750, 900] }}
        style={{
          background: "url('img/IMG_5592.JPG') center center",
          backgroundSize: "cover"
        }}
      >
        <div
          style={{ textAlign: "center", width: "100%" }}
          css={{ paddingTop: [425, 500, 600] }}
        >
          <Countdown />
          <Button
            type="fill"
            size="large"
            color="#e8ca6f"
            hoverColor="#e8ca6f"
          />
        </div>
      </section>
      <section style={{ height: 1000 }} />
    </div>
  );
}

export default WeddingPage;
