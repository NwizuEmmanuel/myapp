import React from "react";
import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClicks = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const handleRightClicks = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return <div>The app is used by pressing the buttons</div>;
    }
    return <div>button press history: {props.allClicks.join(" ")}</div>;
  };

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClicks} text="left" />
      {right}
      <Button handleClick={handleRightClicks} text="right" />
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
