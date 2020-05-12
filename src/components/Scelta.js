import React from "react";
import AltaVisione from "./AltaVisione";
import Logo from "./logo";
import "../style/Logo.css";

function Scelta(props) {
  return (
    <div className="ss">
      //mettere logo più alto
      <Logo />
      <AltaVisione
      backColor={props.backColor}
        sections={props.buttons}
        currentId={props.currentId}
      />
    </div>
  );
}

export default Scelta;

//inserire card
