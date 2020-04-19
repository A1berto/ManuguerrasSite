import React, { Component } from "react";
import "../App.css";

class CentralButton extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeButton: this.props.activeButton
    }
  }

  render() {
    return (
      <div>
        <li
          id={this.props.id}
          style={{ backgroundColor: this.props.color }}
          className={
            this.props.activeButton
              ? "space rounde r buttonClicked "
              : "space rounde r"
          }
          onClick={(e) => this.props.handleClick(e)}
        ></li>
      </div>
    );
  }
}

export default CentralButton;
