import React, { Component } from "react";

class RightParag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rightParag ">
        <h1 className="riquadro">{this.props.title}</h1>
        <p>{this.props.parag}</p>
      </div>
    );
  }
}

export default RightParag;
