import React, { useState } from "react";
import styles from "../styles/Dice.module.css";

const Dice = ({ value }) => {
  const [dieValue, setDieValue] = useState(value);

  const handleClick = () => {
    setDieValue(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <img
        className={styles.dice}
        src={`path/to/dice-images/dice-${dieValue}.png`}
        alt={dieValue}
        onClick={handleClick}
      />
    </div>
  );
};

export default Dice;
