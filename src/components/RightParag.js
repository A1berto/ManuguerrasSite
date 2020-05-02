import React, { Component } from "react";
import { Link } from "react-router-dom";

class RightParag extends Component {

  render() {
    
    return (
      <div className="rightParag ">
        <Link to="/Approfondisci" sections={this.props.buttons} currentId={this.props.currentId}>
          <h1 className="riquadro">{this.props.title}</h1>
        </Link>
        <p>{this.props.parag}</p>
      </div>
    );
  }
}

export default RightParag;
