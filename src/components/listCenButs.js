import React, { Component } from "react";
import CentralB from "./centralButton";
import "../App.css";

//buttonSelected, [color,id]
class ListCenButs extends Component {

  render() {
    return (
      <div>
        <ul className="lista">
          {Array.isArray(this.props.buttons)
            ? this.props.buttons.map((button,index) => (
                <CentralB
                  id={button.id}
                  key={index}
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
