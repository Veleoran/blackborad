import styles from '../styles/Home.module.css';
import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button id="increment-btn" onClick={incrementCount}>
        +1
      </button>
      <button id="decrement-btn" onClick={decrementCount}>
        -1
      </button>
    </div>
  );
}

export default Home;

function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" />
      <div className={styles.counterContainer}>
        <button className={styles.decrementBtn} id="decrementBtn">-</button>
        <span className={styles.counter} id="counter">{counter}</span>
        <button className={styles.incrementBtn} id="incrementBtn">+</button>
      </div>
    </div>
  );
}

export default Home;
