import React, { useState } from "react";
import Input from "./Input";
import Timer from "./Timer";

function App() {
  const [newT, setNewT] = useState(5);
  const [key, setKey] = useState(0)
  

  function minutesInput(nMin) {
    setNewT(nMin);
  }

  function keyS(k){
    setKey(k);   
    
  }

  
  return (
    <div className="timer-box">
      <Input minutes={minutesInput} sendKey={keyS} />
      <Timer setTime={newT} newKey={key} />
    </div>
  );
}

export default App;
