// Confetti.js
import React, { useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function Confetti() {
  const [fire, setFire] = useState(false);
  const [reset, setReset] = useState(false);

  const onClickFire = () => {
    setFire({ fire: {} });
  };

  const onClickReset = () => {
    setReset({ reset: {} });
  };

  const onFire = () => {
    console.log("do something after fire");
  };

  const onReset = () => {
    console.log("do something after reset");
  };

  const onDecay = () => {
    console.log("do something after animation");
  };

  const style = {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <>
      <ReactCanvasConfetti
        // set the styles as for a usual react component
        style={style}
        // set the class name as for a usual react component
        className={"yourClassName"}
        // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
        fire={fire}
        // if value in this.state.reset cast to the logical true and will differ from the previous, then will be cleared canvas
        reset={reset}
        // set the callback on new animation
        onFire={onFire}
        // set the callback on decay animation
        onDecay={onDecay}
        // set the callback on reset canvas
        onReset={onReset}
      />

      <button onClick={onClickFire}>Fire</button>
      <button onClick={onClickReset}>Reset</button>
    </>
  );
}

export default Confetti;
