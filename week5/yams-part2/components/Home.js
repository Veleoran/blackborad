import React, { useState } from "react";
import Dice from "./Dice";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [dices, setDices] = useState(
    Array.from({ length: 5 }, (_, i) => i + 1)
  );

  const handleLaunch = () => {
    setGameStarted(true);
    setDices(dices.map(() => Math.floor(Math.random() * 6) + 1));
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.triangleLeft}></div>
        <div className={styles.triangleLeftRed}></div>
        <div className={styles.triangleLeft}></div>
      </div>
      <div className={styles.middleSection}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.board}>
          {dices.map((value, index) => (
            <Dice key={index} value={value} />
          ))}
        </div>
      </div>
      <div>
        <div className={styles.triangleRight}></div>
        <div className={styles.triangleRightRed}></div>
        <div className={styles.triangleRight}></div>
        {!gameStarted && (
          <button className="launchBtn" onClick={handleLaunch}>
            Launch
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
