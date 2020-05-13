import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import Cards from "./Cards";
import Filtro from "./Filtro";
import Idee from "./Idee";

import "../style/Slide.css";

class AltaVisione extends Component {
  constructor(props) {
    super(props);
    this.state = { ID: props.currentId };
  }

  
  render() {
    let arr = this.props.sections;
    let modified = arr.splice(0, this.props.currentId);
    arr.push(...modified);


    const properties = {
      duration: 99999999999999999,
      transitionDuration: 800,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        this.setState({ ID: newIndex });
      },
    };
    const handleFilters = (filters, category) => {
      console.log(filters);
      //TODO  query per modificare la richiesta della card
    };

    const getCurrentBackgroundColor = () => {
      const currentButton = this.props.sections.find((button) => {
        return button.id === this.state.ID;
      });
      return currentButton === undefined
        ? "#4f4f4f"
        : currentButton.buttonColor;
    };

    return (
      <div className="ss" 
        style={{
          backgroundColor: getCurrentBackgroundColor()
        }}
      >
        <div className="containerSlide justify-content-center">
          <Slide {...properties}>
            {arr.map((e) => (
              <div className="each-slide" key={e.id}>
                <div>
                  <img src={e.url} alt="" />
                </div>
              </div>
            ))}
          </Slide>
        </div>
        {"//sistemare un metodo che va utilizzato per tutti"}
        {this.state.ID === 3 ? (
          <React.Fragment>
            <Filtro
              handleFilters={(filters) =>
                this.handleFilters(filters, "options")
              }
            />
            <Cards />
          </React.Fragment>
        ): this.state.ID === 4 ?(
          <Idee/>
        ): <div></div>}
      </div>
    );
  }
}

export default AltaVisione;
