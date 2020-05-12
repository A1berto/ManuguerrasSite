import React, { Component } from "react";
import Cards from "./Cards";
import AltaVisione from "./AltaVisione";
import Filtro from "./Filtro";
import Logo from "./logo";
import "../style/Logo.css";

function Scelta(props) {
  const handleFilters = (filters, category) => {
    console.log(filters);
    //TODO  query per modificare la richiesta della card
  };
  return (
    <div className="ss">
      //mettere logo più alto
      <Logo />
      <AltaVisione
        sections={props.buttons}
        currentId={props.currentId}
      />
      //sistemare un metodo che va utilizzato per tutti
      {props.currentId === 3 
        ?
        <div>
        <Filtro handleFilters={(filters) => handleFilters(filters, "options")} />
        <Cards/>
        </div>
        : 
        <div></div>}
        
      
 


      </div>
  );
}

export default Scelta;

//inserire card
