import React, { Component } from "react";
import Card from "./Card";
import AltaVisione from "./AltaVisione";

class Scelta extends Component {
  render() {
    return (
      <div className="ss">
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
