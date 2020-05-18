import React, { Component } from "react";
import Card from "./Card";
import MyModal from "./MyModal";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      items: this.props.items,
      itemsFiltered: [],
      isLoaded: this.props.isLoaded,
    };
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

    

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container" style={{ marginTop: "12vh" }}>
          <div className="row">{this.props.visualizzoSoloQuelliFiltrati}</div>
          <MyModal show={this.state.addModalShow} onHide={addModalClose} />
        </div>
      );
    }
  }
}
