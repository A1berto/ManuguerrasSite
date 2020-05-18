import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";



function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
}

export default function RightParag(props) {
  const [ref, hovered] = useHover();

  const [background, setBackground] = useState("#fffff");
  const [font, setFont]= useState("#424246");

  
  const setStyle= (background,font)=>{
    setBackground(background);
    setFont(font);
  }
  return (
    <div className="rightParag">
      <Link
        style={{ textDecoration: "none", backgroundColor:{background}}}
        to="/Approfondisci"
        sections={props.buttons}
        currentId={props.currentId}
        onMouseEnter={()=> setStyle("#424246","#fdfdfd")}
        onMouseOut={()=> setStyle("#fdfdfd","#424246")}
         
      >

        <h1 className="titoloPar" ref={ref}>
          {props.title}
        </h1>
      </Link>
      <div></div>
      <p>{props.parag}</p>
    </div>
  );
}

/**
 * <form className={classes.root} noValidate autoComplete="off">
      <TextField
          id="standard-read-only-input"
          label=""
          defaultValue={props.title}
          InputProps={{
            readOnly: true,
          }}
        />
        </form>
 * 
 * 
 */
