import React, { useEffect, useRef } from "react";
import RightParag from "./RightParag";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// TODO se non serve lo stato usa i componenti sensa stato FunctionComponent, non è una classe non c'è il this !!!
// esempio di seguito LeftRightSize
function LeftRightSize(props) {
  // TODO usare lo stesso componente per right e left! non duplicare codice

  // TODO questo è un custom hooks capirai cosa è appena leggi la nuova docs di react
  const prevColor = usePrevious(props.backColor);

  return (
    <div className="row no-gutters">
      <div
        className="col-md-6 no-gutters"
        style={{ backgroundColor: prevColor }}
      >
        <div
          id="left"
          style={{ backgroundColor: props.backColor }}
          key={props.backColor}
          className={
            "animated leftSide d-flex justify-content-center align-items-center "
          }
        >
          <img src={props.image} className="imgProp" alt="relativeImage" />
        </div>
      </div>

      <div
        className="col-md-6 no-gutters"
        style={{
          backgroundColor: `${prevColor}`,
          opacity: "0.8",
        }}
      >
        <div
          id="right"
          style={{
            backgroundColor: `${props.backColor}`,
            opacity: "0.8",
          }}
          key={props.backColor}
          className={
            "animated rightSide d-flex justify-content-center align-items-center "
          }
        >
          <RightParag
            title={props.title}
            parag={props.parag}
            buttons={props.buttons}
            currentId={props.currentId}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftRightSize;
