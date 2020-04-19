import React, { Component } from "react";
import CentralB from "./centralButton";
import "../App.css";
import Titolo from "./alberto.JPG";
import ReactDOM from "react-dom";

class ListCenButs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtons: this.props.activeButtons,
    };
  }

  

  render() {
    return (
      <div>
        <ul className="lista ">
          <CentralB
            id="0"
            color="#b2d8ca"
            handleClick={(e) => this.props.cliccato(e)}
            activeButton={this.props.activeButtons[0]}
          />
          <CentralB
            id="1"
            color="#fef6bb"
            handleClick={(e) => this.props.cliccato(e)}
            activeButton={this.props.activeButtons[1]}
          />
          <CentralB
            id="2"
            color="#f4a654"
            handleClick={(e) => this.props.cliccato(e)}
            activeButton={this.props.activeButtons[2]}
          />
          <CentralB
            id="3"
            color="#d6324a"
            handleClick={(e) => this.props.cliccato(e)}
            activeButton={this.props.activeButtons[3]}
          />
          <CentralB
            id="4"
            color="#e6c9be"
            handleClick={(e) => this.props.cliccato(e)}
            activeButton={this.props.activeButtons[4]}
          />
        </ul>
      </div>
    );
  }
}

export default ListCenButs;
