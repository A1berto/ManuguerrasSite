import React, { Component } from "react";
import Card from "./Card";
import AltaVisione from "./AltaVisione";

class Cards extends Component {
  render() {
    
    return (
      <div className="ss">
        <AltaVisione sections={this.props.sections} currentId={this.props.currentId}
        />

        <Card />
      </div>
    );
  }
}

export default Cards;
