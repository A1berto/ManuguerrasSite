import React, { Component } from "react";
import Card from "./Card";
import AltaVisione from "./AltaVisione";
import Logo from "./logo";
import "../style/Logo.css";

class Scelta extends Component {
  render() {
    return (
      <div className="ss">
        //mettere logo più alto
        <Logo />
        <AltaVisione
          sections={this.props.buttons}
          currentId={this.props.currentId}
        />
      </div>
    );
  }
}

export default Scelta;

//inserire card
