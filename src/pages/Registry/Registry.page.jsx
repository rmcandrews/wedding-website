import React, { Component } from "react";
import { Footer } from "../../components";
import ZolaFrame from "./ZolaFrame";

class RegistryPage extends Component {
  constructor() {
    super();
    this.state = {
      iFrameHeight: "0px"
    };
  }

  render() {
    return (
      <div style={{ marginTop: -150 }}>
        <div style={{ height: 149, backgroundColor: "black" }} />
        <ZolaFrame />
        <Footer />
      </div>
    );
  }
}

export default RegistryPage;
