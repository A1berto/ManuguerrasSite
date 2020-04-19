import React, { Component } from "react";
import Titolo from "./Titolo.png";
class Logo extends Component {
  state = {};
  render() {
    return (
      <div className="titolo">
        <img className="animated bounceInDown titoloImg" src={Titolo}></img>
      </div>
    );
  }
}

export default Logo;
