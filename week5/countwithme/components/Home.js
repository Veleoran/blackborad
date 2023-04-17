import { useState } from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  // 1. Import useState and 2. Initialize counter state
  const [counter, setCounter] = useState(0);

  // 3. Functions to increment and decrement the counter
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" />
      <div className={styles.counterContainer}>
        {/* 4. Add onClick event handlers */}
        <button
          className={styles.decrementBtn}
          id="decrementBtn"
          onClick={decrementCount}
        >
          -
        </button>
        <span className={styles.counter} id="counter">
          {counter}
        </span>
        <button
          className={styles.incrementBtn}
          id="incrementBtn"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Home;
