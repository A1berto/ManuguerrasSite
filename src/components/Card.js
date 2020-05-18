import React from "react";
import immagine from "../images/famiglia.jpg";

export default function Card(props) {
  return (
    <div className="col-md-3" style={{ marginBottom: "4vh" }}>
      <div className="card text-center">
        <div className="card-body text-dark" style={{paddingTop:"0", paddingBottom:"0"}}>
          <h4 className="card-title">{props.title}</h4>
        </div>
        <div className="overflow">
          <img src={immagine} className="card-img-top" alt="" />
        </div>
        <div className="card-body text-dark">
          <p className="card-text text-secondary">
            {props.ingredienti}
          </p>
          <a
            href="#Curiusu"
            className="btn btn-outline-success"
            onClick={props.btnClicked}
          >
            Curiosità
          </a>
        </div>
      </div>
    </div>
  );
}
