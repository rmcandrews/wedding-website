import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ZolaFrame extends Component {
  constructor() {
    super();
    this.state = {
      iFrameHeight: "0px"
    };
  }

  render() {
    return (
      <iframe
        title="registry"
        style={{
          width: "100%",
          height: this.state.iFrameHeight,
          overflow: "visible"
        }}
        onLoad={() => {
          const obj = ReactDOM.findDOMNode(this);
          this.setState({
            iFrameHeight: obj.contentWindow.document.body.scrollHeight + "px"
          });
        }}
        ref="iframe"
        src="/registry.html"
        width="100%"
        height={this.state.iFrameHeight}
        scrolling="no"
        frameBorder="0"
      />
    );
  }
}
