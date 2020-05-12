import React, { Component } from "react";
import Card from "./Card";
import { Button, ButtonToolbar } from "react-bootstrap";
import MyModal from "./MyModal";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
    };
  }
  btnClicked = () => {
    let a = 2;
  };
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <div className="container" style={{ marginTop: "12vh" }}>
        <div className="row">
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
          <Card btnClicked={() => this.setState({ addModalShow: true })} />
        </div>
        <MyModal show={this.state.addModalShow} onHide={addModalClose} />
      </div>
    );
  }
}
