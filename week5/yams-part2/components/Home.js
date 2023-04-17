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
      dices.map((dice) => ({
        value: Math.floor(Math.random() * 6) + 1,
        count: dice.count,
      }))
    );
  };

  const handleDieClick = (index) => {
    setDices(
      dices.map((dice, i) =>
        i === index
          ? { value: Math.floor(Math.random() * 6) + 1, count: dice.count + 1 }
          : dice
      )
    );
  };

  return (
    <div className={styles.container}>
    
      <div className={styles.middleSection}>
       
        <div className={styles.board}>
    {gameStarted &&
      dices.map((dice, index) => (
        <Dice
          key={index}
          value={dice.value}
          count={dice.count}
          onClick={() => handleDieClick(index)}
        />
          ))}
        </div>
      </div>
    
      {!gameStarted && (
        <button className="launchBtn" onClick={handleLaunch}>
          Launch
        </button>
      )}
    </div>
  );
};

export default Home;


