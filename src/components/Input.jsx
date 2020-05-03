import React, { useState } from "react";

function Input(props) {
  const [min, setMin] = useState(5);
  const [key, setKey] = useState(1);

  function handleChange(event) {
    const newMin = parseInt(event.target.value);
    setMin(newMin);
  }

  function getMinutes(event) {
    props.minutes(min);
    setKey(key + 1);       
    props.sendKey(key);
    //setMin("");
  }

  return (
    <div className="input-box">
      <form>
        <label htmlFor="minutes">minutes:</label>
        <input
          onChange={handleChange}
          type="number"
          name="minutes"
          id="minutes"
          value={min}
        ></input>
        <button onClick={getMinutes} id="theButton" type="button" className="start-button">
          Start
        </button>
      </form>
    </div>
  );
}

export default Input;
