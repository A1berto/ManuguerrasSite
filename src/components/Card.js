import React, { Component } from 'react';
import immagine from "../images/famiglia.jpg";

class Card extends Component {
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">


          <div className="card text-center">
            <div className="overflow">
              <img src={immagine} className="card-img-top" alt=""/>
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Card Title</h4>
              <p className="card-text text-secondary">
                lorem ipsum advvie ciicoe c eiieoeo v rrjbrjj eo eooe v
                rjrjbjrin iwniewbv wivuerbfer eg e gvth trvhrt hrvthrhr
                vrhrthbrt
              </p>
              <a href="#boh" className="btn btn-outline-success">
                Clicca qui
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
         );
    }
}
 
export default Card;