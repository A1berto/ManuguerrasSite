import React, { Component } from "react";
import foto from "./alberto.JPG";

class LeftRightSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: this.props.activeButton,
      photo: this.props.url,
    };
  }
  render() {
    return (
      <div className="row no-gutters">
        <div className="col-md-6 no-gutters">
          <div
            id="left"
            className={
              this.props.activeButton === 0
                ? "animated slideInUp zeroLeftColor   leftSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 1
                ? "animated slideInUp oneLeftColor    leftSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 2
                ? "animated slideInUp twoLeftColor    leftSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 3
                ? "animated slideInUp threeLeftColor    leftSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 4
                ? "animated slideInUp fourLeftColor    leftSide d-flex justify-content-center align-items-center"
                : "leftSide d-flex justify-content-center align-items-center"
            }
          >
            <h1>leftSize</h1>
          </div>
        </div>

        <div className="col-md-6 no-gutters">
          <div
            id="right"
            className={
              this.props.activeButton === 0
                ? "animated slideInDown zeroRightColor   rightSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 1
                ? "animated slideInDown oneRightColor    rightSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 2
                ? "animated slideInDown twoRightColor    rightSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 3
                ? "animated slideInDown threeRightColor    rightSide d-flex justify-content-center align-items-center"
                : this.props.activeButton === 4
                ? "animated slideInDown fourRightColor    rightSide d-flex justify-content-center align-items-center"
                : "rightSide d-flex justify-content-center align-items-center"
            }
          ></div>
        </div>
      </div>
    );
  }
}

export default LeftRightSize;
