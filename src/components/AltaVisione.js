import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import Cards from "./Cards";
import Card from "./Card";
import Filtro from "./Filtro";
import Idee from "./Idee";
import FamNonn from "./Fam-Nonn";

import "../style/Slide.css";

class AltaVisione extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: props.currentId,
      siOno: false,
      optionState: [
        { id: 0, name: "Antipasto", clicked: false },
        { id: 1, name: "Primo", clicked: false },
        { id: 2, name: "Secondo", clicked: false },
        { id: 3, name: "Contorno", clicked: false },
        { id: 4, name: "Dolce", clicked: false },
      ],

      items: [],
      isLoaded: false
    };
  }

  componentDidMount = () => {
    fetch("http://demo1526987.mockable.io/")
      .then((res) => res.json())
      .then((json) => {
        this.setState(
          {
            items: json,
            isLoaded: true,
          },
          () => {
            console.log("Fetch finish");
          }
        );
      });
  };

  render() {
    var { isLoaded, items } = this.state;
    let arr = this.props.sections;
    let modified = arr.splice(0, this.props.currentId);
    arr.push(...modified);

    
    let filterTrueElements=[];

    const properties = {
      duration: 99999999999999999,
      transitionDuration: 1000,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      onChange: (oldIndex, newIndex) => {
        this.setState({ ID: newIndex, siOno: true }, () => {
          console.log("Finish update field newIndex of SlideShow");
        });
      },
    };


    const getCurrentBackgroundColor = () => {
      const currentButton = this.props.sections.find((button) => {
        return button.id === this.state.ID;
      });
      return currentButton === undefined
        ? "#4f4f4f"
        : currentButton.buttonColor;
    };
    const getCurrentElements = ( ) => {
      let elementiVeriFiltrati= this.state.optionState.map( elem =>{
        if(elem.clicked === true) return elem.id;
      })
      elementiVeriFiltrati= elementiVeriFiltrati.filter(i =>  i !== undefined);
      
        filterTrueElements= elementiVeriFiltrati
        
      return filterTrueElements;
    }

    const visualizzoSoloQuelliFiltrati = () => {
      return this.state.items.map((item) =>
        filterTrueElements.some(
          (elem) => elem === item.identificativo
        ) ? (
          <Card
            key={item.id}
            title={item.nome}
            ingredienti={item.ingredienti}
            btnClicked={() => this.setState({ addModalShow: true })}
          />
        ) : (
          console.log("non ti ho selezionato")
        )
      );
    };

    return (
      <div style={{ backgroundColor: getCurrentBackgroundColor() }}>
        {
          "capire come accedere agli arrow e mettere animazione come ha fatto vito per leftRightSize"
        }
        <div className="containerSlide justify-content-center">
          <Fade {...properties}>
            {arr.map((e) => (
              <div className="each-fade" key={e.id}>
                <div>
                  <img src={e.url} alt="" />
                </div>
              </div>
            ))}
          </Fade>
        </div>
        {"//sistemare un metodo che va utilizzato per tutti"}
        {this.state.ID === 3 ? (
          <React.Fragment>
            <Filtro
              handleFilters={(filters) =>
                this.handleFilters(filters, "options")
              }
              optionState={this.state.optionState}
            />
            {this.state.optionState.map((data) => {
              console.log("ciaoAltaView   " + data.id + "   " + data.clicked);
            })}
            {getCurrentElements()}

            <Cards
              itemsFiltrati={filterTrueElements}
              items={this.state.items}
              isLoaded={this.state.isLoaded}
              optionState={this.state.optionState}
              elements={getCurrentElements()}
              visualizzoSoloQuelliFiltrati={visualizzoSoloQuelliFiltrati()}
            />
          </React.Fragment>
        ) : this.state.ID === 4 ? (
          <Idee />
        ) : this.state.ID === 0 || this.state.ID === 1 ? (
          <FamNonn />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default AltaVisione;
