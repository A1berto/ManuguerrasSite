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
      activeButtons: [false, false, false, false, false],
      numActBtn: null,
      photos: [
        {
          number: 0,
          url: "http://lorempixel.com/400/200",
        },
        {
          number: 1,
          url: "http://lorempixel.com/400/200",
        },
        {
          number: 2,
          url: "http://lorempixel.com/400/200",
        },
        {
          number: 3,
          url: "http://lorempixel.com/400/200",
        },
        {
          number: 4,
          url: "http://lorempixel.com/400/200",
        },
      ],
    };
  }

  btnClicked = (e) => {
    e.preventDefault();
    this.setState(
      (prevState) => ({
        numActBtn: null,
        activeButtons: prevState.activeButtons.map((val) => {
          if (1 === 1) {
            return false;
          }
          return false;
        }),
      }),
      () => {
        console.log("Resetto tutto");
      }
    );

    let number = parseInt(e.target.id);
    this.setState(
      {
        numActBtn: number,
      },
      () => {
        console.log(
          " setState " +
            number +
            "  " +
            "ho settato il numero del bottone cliccato: " +
            this.state.numActBtn
        );
      }
    );
    this.setState(
      (prevState) => ({
        activeButtons: prevState.activeButtons.map((val, index) => {
          if (index === number) {
            return !val;
          }
          return val;
        }),
      }),
      () => {
        console.log(
          " setState " + number + "  " + this.state.activeButtons[number]
        );
      }
    );
    let arra = this.state.activeButtons.map((val) => val);
    console.log("arra with all values: " + arra);
  };

  render() {
    return (
      <div className="App">
        {Array.isArray(this.state.photos)
          ? this.state.photos.map((photo) =>
              photo.number === this.state.numActBtn &&
              this.state.numActBtn !== null ? (
                <LeftRight
                  activeButton={this.state.numActBtn}
                  url={photo.url}
                />
              ) : (
                ""
              )
            )
          : ""}
        <ListCenButs
          activeButtons={this.state.activeButtons}
          cliccato={(e) => this.btnClicked(e)}
        />
        <Logo />
      </div>
    );
  }
}

export default App;
