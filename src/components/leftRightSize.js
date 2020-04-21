import React, { Component } from "react";
import foto from "./alberto.JPG";

class LeftRightSize extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row no-gutters">
        <div className="col-md-6 no-gutters">
          <div
            id="left"
            style={{ backgroundColor: this.props.backColor }}
            key={this.props.backColor}
            className={
              "animated leftSide d-flex justify-content-center align-items-center "
            }
          >
            <h1>leftSize</h1>
          </div>
        </div>
        <div className="col-md-6 no-gutters">
          <div
            id="right"
            style={{
              backgroundColor: `${this.props.backColor}`,
              opacity: "0.8",
            }}
            className={
              "rightSide d-flex justify-content-center align-items-center "
            }
          >
            <h1>rightSize</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftRightSize;
