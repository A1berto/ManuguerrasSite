import React, { Component } from "react";
import CentralB from "./centralButton";
import "../App.css";
import Titolo from "./alberto.JPG";
import ReactDOM from "react-dom";

//buttonSelected, [color,id]
class ListCenButs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="lista">
          {Array.isArray(this.props.buttons)
            ? this.props.buttons.map((button) => (
                <CentralB
                  id={button.id}
                  color={button.buttonColor}
                  activeButton={button.id === this.props.buttonSelected}
                  handleBtnClick={(e) => this.props.handleClick(e)}
                />
              ))
            : "Nessun bottone"}
        </ul> 
      </div>
    );
  }
}

export default ListCenButs;
