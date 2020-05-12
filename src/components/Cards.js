import React from "react";
import Card from "./Card";
import immagine from "../images/famiglia.jpg";
function Cards() {
  return (
    <div className="container" style={{marginTop:"12vh"}}>
      <div className="row">
        <Card />
        <Card/>
        <Card />
        <Card/>
        <Card />
        <Card/>
        <Card/>
        <Card />
        <Card/>
      </div>
    </div>
  );
}

export default Cards;
