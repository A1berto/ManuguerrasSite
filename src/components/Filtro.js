import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;
const options = [
  {
    id: 0,
    name: " Antipasto   ",
  },
  {
    id: 1,
    name: " Primo   ",
  },
  {
    id: 2,
    name: " Secondo   ",
  },
  {
    id: 3,
    name: " Contorno   ",
  },
  {
    id: 4,
    name: " Dolce   ",
  },
];

function Filtro(props) {
  const [Checked, setChecked] = useState([]);


  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    props.handleFilters(newChecked)
  };

  const renderCheckBoxLists = () =>
    options.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value.id)}
          type="checkbox"
          checked={Checked.indexOf(value.id)=== -1 ? false : true}
        />
        <span>{value.name}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="FILTRO" key="1">
          {renderCheckBoxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default Filtro;
