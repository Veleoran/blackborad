import { useState } from 'react';
import Burger from './Burger';
import styles from '../styles/Home.module.css';

function Home() {
  const burgersData = [
    { name: 'The New Yorker', image: 'newyorker.jpg' },
    { name: 'The Californian', image: 'californian.jpg' },
    { name: 'The Parisian', image: 'parisian.jpg' },
  ];

  const [selectedBurgers, setSelectedBurgers] = useState([]);

  const burgers = burgersData.map((data, i) => {
    return (
      <Burger
        key={i}
        name={data.name}
        image={data.image}
        onSelect={selectBurger}
        onRemove={removeBurger}
      />
    );
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
      <h4 className={styles.text}>
        Number of burgers selected: <span id="counter">{selectedBurgers.length}</span>
      </h4>
      <div className={styles.burgerContainer}>{burgers}</div>
    </div>
  );
}

export default Home;
