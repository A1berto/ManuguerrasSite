import React from "react";
import { Slide } from "react-slideshow-image";

import "../style/Slide.css";

function AltaVisione(props) {

  let arr = props.sections;
  let modified = arr.splice(0, props.currentId);
  arr.push(...modified);

  const properties = {
    duration: 99999999999999999,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    arrows: true,
  };


  return (
    <div className="containerSlide justify-content-center">
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

export default AltaVisione;


