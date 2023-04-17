import React, { useState } from "react";
import Dice from "./Dice";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [dices, setDices] = useState(
    Array.from({ length: 5 }, () => ({ value: null, count: 0 }))
  );

  const handleLaunch = () => {
    setGameStarted(true);
    setDices(
      dices.map((die) => ({
        value: Math.floor(Math.random() * 6) + 1,
        count: die.count,
      }))
    );
  };

  const handleDieClick = (index) => {
    setDices(
      dices.map((die, i) =>
        i === index
          ? { value: Math.floor(Math.random() * 6) + 1, count: die.count + 1 }
          : die
      )
    );
  };

  return (
    <div className={styles.container}>
      {/* ... autres éléments ... */}
      <div className={styles.middleSection}>
        {/* ... autres éléments ... */}
        <div className={styles.board}>
    {gameStarted &&
      dices.map((die, index) => (
        <Dice
          key={index}
          number={index + 1}
          value={die.value}
          count={die.count}
          onClick={() => handleDieClick(index)}
        />
          ))}
        </div>
      </div>
      {/* ... autres éléments ... */}
      {!gameStarted && (
        <button className="launchBtn" onClick={handleLaunch}>
          Launch
        </button>
      )}
    </div>
  );
};
export default Home;
