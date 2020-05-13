import React, { Component } from "react";
import Titolo from "../images/logo.png";
import "../style/Logo.css";
class Logo extends Component {
  render() {
    return (
      
        <img
          className="animated bounceInDown dimImg"
          src={Titolo}
          alt="RelativeImageOrImages"
        ></img>
      
    );
  }
}

export default Logo;
