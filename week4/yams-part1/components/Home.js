import React from 'react';
import Dice from './Dice';
import styles from '../styles/Home.module.css'; // Importez les styles et affectez-les à la variable "styles"

const Home = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Yams</h1>
      <div className={styles.diceContainer}> {/* Mise à jour du nom de classe */}
        <Dice number={1} />
        <Dice number={2} />
        <Dice number={3} />
        <Dice number={4} />
        <Dice number={5} />
      </div>
    </div>
  );
};

export default Home;
