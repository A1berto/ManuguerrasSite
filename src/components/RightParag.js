import React, { Component } from "react";
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

  return (
    <div className="rightParag">
      <Link
        style={{ textDecoration: "none" }}
        to="/Approfondisci"
        sections={props.buttons}
        currentId={props.currentId}
      >
        {hovered && <h6>Clicca qui per sapere di più</h6>}

        <h1 className="titoloPar" ref={ref}>
          {props.title}
        </h1>
      </Link>
      <p>{props.parag}</p>
    </div>
  );
}
