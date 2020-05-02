import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

import "../Slide.css";

import Famiglia from "../images/famiglia.jpg";
import Eventi from "../images/eventi.png";
import Vivande from "../images/pietanze.jpg";
import Nonni from "../images/nonni.jpg";

class AltaVisione extends Component {
  render() {
    const properties = {
      duration: 99999999999999999,
      transitionDuration: 700,
      infinite: true,
      indicators: true,
      arrows: true,
    };

    return (
      <div className="containerSlide">
        <Slide {...properties}>
          <div className="each-slide">
            <div>
              <img src={Eventi} alt="img1" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={Famiglia} alt="img2" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={Vivande} alt="img3" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={Nonni} alt="img4" />
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default AltaVisione;
