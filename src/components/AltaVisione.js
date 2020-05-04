import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import Filtro from "./Filtro";

import "../Slide.css";

function AltaVisione(props) {

  let arr = props.sections;
  let modified = arr.splice(0, props.currentId);
  arr.push(...modified);

  const properties = {
    duration: 99999999999999999,
    transitionDuration: 700,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  const handleFilters = (filters, category) => {
    console.log(filters);
    //TODO  query per modificare la richiesta della card
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

      <Filtro handleFilters={(filters) => handleFilters(filters, "options")} />

    </div>
  );
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
