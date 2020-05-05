import React from "react";
import Countdown from "react-countdown";

function Time(props) {
  const key = props.newKey;
  const button = document.getElementById("theButton");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const numbers = document.getElementById("timer");

  const audio = new Audio("sound.mp3");

  const Complete = () => <span>Over</span>;

  const renderer = ({ minutes, seconds, completed }) => {
    audio.pause();
    audio.currentTime = 0;

    if (plus) {
      plus.style.display = "inline-block";
    }
    if (minus) {
      minus.style.display = "inline-block";
    }
    if (button) {
      button.innerText = "Start";
    }

    if (completed) {
      audio.play();

      const colors = setInterval(() => {
        numbers.style.color === "red"
          ? (numbers.style.color = "white")
          : (numbers.style.color = "red");
      }, 500);

      button.addEventListener("click", () => {
        audio.pause();
        clearInterval(colors);
        numbers.style.color = "white";
      });
      plus.style.display = "none";
      minus.style.display = "none";
      button.innerText = "Restart";

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
          date={Date.now() + parseInt(props.setTime) * 60000} 
          key={key}
          renderer={renderer}
          autoStart={key === 0 ? false : true}
        />
      </h1>
      <button onClick={stop} id="toggle" className="cancel-button">
        Cancel
      </button>
    </div>
  );
}

export default Time;
