import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftRight from "./components/leftRightSize";
import Logo from "./components/logo";
import ListCenButs from "./components/listCenButs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: null,
      buttons: [
        {
          id: 0,
          url: "http://lorempixel.com/400/200",
          buttonColor: "#b2d8ca",
        },
        {
          id: 1,
          url: "http://lorempixel.com/400/200",
          buttonColor: "#fef6bb",
        },
        {
          id: 2,
          url: "http://lorempixel.com/400/200",
          buttonColor: "#fcc182",
        },
        {
          id: 3,
          url: "http://lorempixel.com/400/200",
          buttonColor: "#f15d73",
        },
        {
          id: 4,
          url: "http://lorempixel.com/400/200",
          buttonColor: "#f8dbd1",
        },
      ],
    };
  }

  btnClicked = (e) => {
    e.preventDefault();
    const buttonClicked = parseInt(e.target.id);
    this.setState(
      {
        currentId: buttonClicked,
      },
      () => {
        console.log(
          "E' stato cliccato il bottone con id: " +
            this.state.currentId +
            " " +
            buttonClicked
        );
      }
    );
  };

  getCurrentBackgroundColor = () => {
    const currentButton = this.state.buttons.find((button) => {
      return button.id === this.state.currentId;
    });
    console.log(currentButton);

    return currentButton === undefined ? "" : currentButton.buttonColor;
  };

  render() {
    return (
      <div className="App">
        <LeftRight
          backColor={this.getCurrentBackgroundColor()}
          currentId={this.state.currentId}
        />

        <ListCenButs
          buttonSelected={this.state.currentId}
          buttons={this.state.buttons}
          handleClick={(e) => this.btnClicked(e)}
        />

        <Logo />
      </div>
    );
  }
}

export default App;

/*
()=>this.getCurrentBackgroundColor()
diverso da  this.getCurrentBackgroundColor()
ma uguale a this.getCurrentBackgroundColor  (perchè ho fatto il bind)
 */
