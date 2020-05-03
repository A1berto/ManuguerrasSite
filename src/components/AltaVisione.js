import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

import "../Slide.css";

class AltaVisione extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
    let arr = this.props.sections;
    let modified = arr.splice(0, this.props.currentId);
    arr.push(...modified);

    const properties = {
      duration: 99999999999999999,
      transitionDuration: 700,
      infinite: true,
      indicators: true,
      arrows: true,
    };

    return (
      <div className="containerSlide">
        <Slide {...properties}>
          {arr.map((e) => (
            <div className="each-slide">
              <div>
                <img src={e.url} alt="img1" />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  }
}

export default AltaVisione;

/*

          <div className="each-slide">
            <div>
              <img src={Famiglia} alt="img2" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={Vivande} alt="img3" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={Nonni} alt="img4" />
            </div>
          </div>

*/
