import React, { Component } from "react";
import RightParag from "./RightParag";

import Vivande from "../images/pietanze.jpg";
import Eventi from "../images/eventi.png";
import Nonni from "../images/nonni.jpg";
import Famiglia from "../images/famiglia.jpg";
import Idee from "../images/idee.png";
class LeftRightSize extends Component {
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
            <img src={this.props.image} />
            <p>
              {
                " QUESTO NON FUNZIONA. RITORNA L'URL MA PER VEDERLO SUL DISPLAY NON VA"
              }
            </p>
          </div>
        </div>

        <div className="col-md-6 no-gutters">
          <div
            id="right"
            style={{
              backgroundColor: `${this.props.backColor}`,
              opacity: "0.8",
            }}
            key={this.props.backColor}
            className={
              "animated rightSide d-flex justify-content-center align-items-center "
            }
          >
            <RightParag
              title={this.props.title}
              parag={this.props.parag}
              buttons={this.props.buttons}
              currentId={this.props.currentId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LeftRightSize;
