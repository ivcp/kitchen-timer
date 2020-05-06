import React, { useState } from "react";



function Input(props) {
  const [min, setMin] = useState(5);
  const [key, setKey] = useState(1);

  function handleChange(event) {
        
    if (event.target.name === "plus") {
      if (min < 60) {
        setMin(min + 1);
        props.minutes(min + 1);
      }
    } else if (event.target.name === "minus") {
      if (min > 1) {
        setMin(min - 1);
        props.minutes(min - 1);
      }
    }
  };

  function getKey(event) {
    setKey(key + 1);
    props.sendKey(key);
  };

  return (
    <div className="input-box">
    
      <button
        className="plus-minus"
        type="button"
        id="plus"
        name="minus"
        onClick={handleChange}
      >
        -
      </button>
      <button
        className="plus-minus"
        type="button"
        id="minus"
        name="plus"
        onClick={handleChange}
      >
        +
      </button>
      <button
        onClick={getKey}
        id="theButton"
        type="button"
        className="start-button"
      >
       Start
      </button>
    
    </div>
  );
};

export default Input;
