import React, { Component } from "react";
import Titolo from "./logo2.png";
class Logo extends Component {
 
  render() {
    return (
      <div className="titolo">
        <img className="animated bounceInDown titoloImg" src={Titolo} alt="RelativeImageOrImages"></img>
      </div>
    );
  }
}

export default Logo;
