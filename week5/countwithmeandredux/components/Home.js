import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../reducers/counter";

const Home = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCounter());
  };

  const decrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement} disabled={count === 0}>
        Décrémenter
      </button>
    </div>
  );
};

export default Home;







// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

// function Home() {
//   return (
//     <div className={styles.container}>
//       <Image src="/logo.png" alt="Logo" width={500} height={200} />

//       <div className={styles.counterContainer}>
//         <button className={styles.decrementBtn} id="decrementBtn">-</button>
//         <span className={styles.counter}>0</span>
//         <button className={styles.incrementBtn} id="incrementBtn">+</button>
//       </div>
//     </div>
//   );
// }

// export default Home;
