import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Logo.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Scelta from "./components/Scelta";

import LeftRight from "./components/leftRightSize";
import Logo from "./components/logo";
import ListCenButs from "./components/listCenButs";

import Famiglia from "./images/famiglia.jpg";
import Nonni from "./images/nonni.jpg";
import Eventi from "./images/eventi.png";
import Vivande from "./images/pietanze.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
      buttons: [
        {
          id: 0,
          url: Famiglia, // basta che lo assegni cosi! questo path verrà cambiato in fase di build! "./images/idee.png";
          buttonColor: "#b2d8ca",
          paragTitle: "Famiglia",
          paragPreview: "La famiglia è la patria del cuore. (Giuseppe Mazzini)",
        },
        {
          id: 1,
          url: Nonni,
          buttonColor: "#fef6bb",
          paragTitle: " Nonni ",
          paragPreview:
            " Nessuno può fare per i bambini quel che fanno i nonni: essi spargono polvere di stelle sulla vita dei più piccoli. (Alex Haley)  ",
        },
        {
          id: 2,
          url: Eventi,
          buttonColor: "#fcc182",
          paragTitle: "Eventi",
          paragPreview:
            " Cose organizzate in famiglia. Uscite. Mastersfinch ecc..",
        },
        {
          id: 3,
          url: Vivande,
          buttonColor: "#f37487",
          paragTitle: "Pietanze",
          paragPreview:
            " Alla famiglia Manuguerra piace cucinare diverse pietanze. Diversi sono i cuochi. Elencare pietanze principali",
        },
        {
          id: 4,
          url: {},
          buttonColor: "#f8dbd1",
          paragTitle: "Proponi",
          paragPreview:
            " Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. ",
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

    // default color #4f4f4f
    return currentButton === undefined ? "#4f4f4f" : currentButton.buttonColor;
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

  Home = () => {
    return (
      <div>
        <LeftRight
          backColor={this.getCurrentBackgroundColor()}
          image={this.getCurrentImage()}
          title={this.getCurrentTitle()}
          parag={this.getCurrentParag()}
          currentId={this.state.currentId}
          buttons={this.state.buttons}
        />

        <ListCenButs
          buttonSelected={this.state.currentId}
          buttons={this.state.buttons}
          handleClick={(e) => this.btnClicked(e)}
        />
        <div className="titoloImg">
          <Logo />
        </div>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" exact component={this.Home} />
            <Route
              path="/approfondisci"
              component={() => (
                <Scelta 
                  backColor={this.getCurrentBackgroundColor()}
                  currentId={this.state.currentId}
                  buttons={this.state.buttons}
                />
              )}
            />
            {/*REDIRECT AUTOMATICO*/}
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

/*
()=>this.getCurrentBackgroundColor()
diverso da  this.getCurrentBackgroundColor()
ma uguale a this.getCurrentBackgroundColor  (perchè ho fatto il bind)
 */
