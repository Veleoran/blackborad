import { useState } from 'react';
import Burger from './Burger';
import styles from '../styles/Home.module.css';

function Home() {

  const burgersData = [
    { name: 'The New Yorker', image: 'newyorker.jpg' },
    { name: 'The Californian', image: 'californian.jpg' },
    { name: 'The Parisian', image: 'parisian.jpg' },
  ];

  const burgers = burgersData.map((data, i) => {
    return <Burger key={i} name={data.name} image={data.image} />;
  });

  function selectBurger(newBurger) {
    setSelectedBurgers([...selectedBurgers, newBurger]);
  }
  function removeBurger(burgerToDelete) {
  setSelectedBurgers(selectedBurgers.filter(burger => burger !== burgerToDelete));
}


  return (
    <div className={styles.container}>
      <img src="logo.png" className={styles.logo} />
      <h4 className={styles.text}>Number of burgers selected: <span id="counter"></span></h4>
      <div className={styles.burgerContainer}>
        {burgers}
        <div>
    <Burger onSelect={selectBurger} onRemove={removeBurger} />
    <p>Number of burgers selected: {selectedBurgers.length}</p>
  </div>
      </div>
    </div>
  );
}



export default Home;
