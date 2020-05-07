import React, { Component } from "react";
import Titolo from "../images/logo.png";
import "../style/Logo.css";
class Logo extends Component {
  render() {
    return (
      <div>
        <img
          className="animated bounceInDown titoloImg"
          src={Titolo}
          alt="RelativeImageOrImages"
        ></img>
      </div>
    );
  }
}

export default Logo;
