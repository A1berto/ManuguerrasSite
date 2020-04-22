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
      currentId: "",
      buttons: [
        {
          id: 0,
          url: "./famiglia.jpg",
          buttonColor: "#b2d8ca",
          paragTitle: "Famiglia",
          paragPreview:
            "quanti siamo. Dove viviamo. Cosa ci piace fare. curiosità",
        },
        {
          id: 1,
          url: "./nonni.jpg",
          buttonColor: "#fef6bb",
          paragTitle: " Nonni ",
          paragPreview:
            " anteprima sui nonni. Quanti figli hanno. Cosa gli piace fare",
        },
        {
          id: 2,
          url: "./eventi.jpg",
          buttonColor: "#fcc182",
          paragTitle: "Eventi",
          paragPreview:
            " Cose organizzate in famiglia. Uscite. Mastersfinch ecc..",
        },
        {
          id: 3,
          url: "./pietanze.jpg",
          buttonColor: "#f15d73",
          paragTitle: "Pietanze",
          paragPreview:
            " Alla famiglia Manuguerra piace cucinare diverse pietanze. Diversi sono i cuochi. Elencare pietanze principali",
        },
        {
          id: 4,
          url: "./idee.png",
          buttonColor: "#f8dbd1",
          paragTitle: "Proponi",
          paragPreview: " Idee per migliorare il sito o per fare cose insieme",
        },
      ],
    };
  }

  btnClicked = (e) => {
    e.preventDefault();
    const buttonClicked = e.target.id;
    this.setState(
      {
        currentId: parseInt(buttonClicked),
      },
      () => {
        console.log(
          "Button clicked with id: " +
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

    return currentButton === undefined ? "" : currentButton.buttonColor;
  };

  getCurrentImage = () => {
    const currentButton = this.state.buttons.find((button) => {
      return button.id === this.state.currentId;
    });

    return currentButton === undefined ? "" : currentButton.url;
  };
  getCurrentTitle = () => {
    const currentButton = this.state.buttons.find((button) => {
      return button.id === this.state.currentId;
    });

    return currentButton === undefined ? "" : currentButton.paragTitle;
  };
  getCurrentParag = () => {
    const currentButton = this.state.buttons.find((button) => {
      return button.id === this.state.currentId;
    });

    return currentButton === undefined ? "" : currentButton.paragPreview;
  };
  getOggetto =()=>{
    const currentButton = this.state.buttons.find((button) => {
      return button.id === this.state.currentId;
    });

    return currentButton === undefined ? "" : currentButton;
  }

  render() {
    return (
      <div className="App">
        <LeftRight
          backColor={this.getCurrentBackgroundColor()}
          image={this.getCurrentImage()}
          currentId={this.state.currentId}
          title={this.getCurrentTitle()}
          parag={this.getCurrentParag()}
          oggetto={this.getOggetto()}
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
