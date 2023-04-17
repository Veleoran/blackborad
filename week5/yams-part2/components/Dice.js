import React from "react";
import styles from "../styles/Dice.module.css";

const Dice = ({ number, value, count, onClick }) => {
  return (
    <div>
      <img
        className={styles.dice}
        src={`path/to/dice-images/dice-${value}.png`}
        alt={number}
        onClick={onClick}
      />
      <div className={styles.count}>{count}</div>
    </div>
  );
};
export default Dice;
