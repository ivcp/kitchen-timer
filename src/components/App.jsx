import React from 'react';


function App() {
  return (
    <div className="timer-box">
      <div>
        <form>
          <label for="minutes">minutes:</label>
          <input type="text" name="minutes" id="minutes" placeholder="0"></input>
          <button type="button" className="start-button">Start</button>
        </form>
      </div>
      <div>
        <h1>04:99</h1>
        <button type="button" className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

export default App;
