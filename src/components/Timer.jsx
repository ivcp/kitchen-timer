import React from "react";
import Countdown from "react-countdown";

function Time(props) {
  const key = props.setTime + props.newKey;

  const audio = new Audio("sound.mp3");

  const Complete = () => <span>Over</span>;

  const renderer = ({ minutes, seconds, completed }) => {
    audio.pause();
    if (completed) {
      audio.play();
      const numbers = document.getElementById("timer");
      const colors = setInterval(() => {
        numbers.style.color === "red"
          ? (numbers.style.color = "white")
          : (numbers.style.color = "red");
      }, 500);
      document.getElementById("theButton").addEventListener("click", () => {
        audio.pause();
        clearInterval(colors);
        numbers.style.color = "white";
      }); // ??  audio.currentTime = 0;

      return <Complete />;
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  function stop() {
    window.location.reload();    
  }

  return (
    <div className="ticker">
      <h1 id="timer">
        <Countdown
          date={Date.now() + parseInt(props.setTime) * 60000} //*60000 for minutes
          key={key}
          renderer={renderer}
          autoStart={props.newKey === 0 ? false : true}
        />
      </h1>
      <button onClick={stop} id="toggle" className="cancel-button">
        Clear
      </button>
    </div>
  );
}

export default Time;
