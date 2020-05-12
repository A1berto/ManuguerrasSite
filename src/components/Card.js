import React from "react";
import immagine from "../images/famiglia.jpg";

export default function CardMia() {
  return (
    
        <div className="col-md-3" style={{marginBottom:"4vh"}}>
          <div className="card text-center">
            <img src={immagine} className="card-img-top" alt="" />

            <div className="card-body text-dark">
              <h4 className="card-title">Lasagna</h4>
              <p className="">
                Il testo che mi passo come descrizione della card e
                pepperepeppeppero
              </p>
              <a href="#boh" className="btn btn-outline-success">
                Clicca qui
              </a>
            </div>
          </div>
        </div>
  );
}
