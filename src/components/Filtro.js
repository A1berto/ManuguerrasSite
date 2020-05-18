import React, { useState, useEffect } from "react";
import "../style/Checkbox.css";




export default function Filtro(props) {
  const [optionState, setOptionState] = useState([]);

  useEffect(() => {
    setOptionState(
      props.optionState.map((d) => {
        return {
          select: d.clicked,
          id: d.id,
          name: d.name,
          clicked: d.clicked,
        };
      })
    );
  }, []);

  return (
    <div className="ordinato justify-content-center">
      {" "}
      SOCCU VOE MANGIARE? 
      <div
        className=" stile checkbox d-flex justify-content-center"
       >
        <input
          type="checkbox"
          id="tutto"
          onChange={(e) => {
            let checked = e.target.checked;
            setOptionState(
              props.optionState.map((d) => {
                d.select = checked;
                d.clicked = checked;
                return d;
              })
            );
          }}
        />
        <label htmlFor="tutto" style={{marginLeft:"0"}}>Tutto</label>

        {optionState.map((d, i) => (
          <tr key={i}>
            <th scope="row">
              <input
                onChange={(event) => {
                  let checked = event.target.checked;
                  setOptionState(
                    props.optionState.map((data) => {
                      if (d.id === data.id) {
                        d.select = checked;
                        data.clicked = checked;
                      }
                      return data;
                    })
                  );
                }}
                id={d.id}
                type="checkbox"
                checked={d.select}
              />
              
              <label htmlFor={d.id}>{d.name}</label>
            </th>
          </tr>
        ))}
      </div>
    </div>
  );
}
