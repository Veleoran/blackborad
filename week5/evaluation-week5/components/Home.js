import { useState, useEffect } from 'react';
import Country from './Country';
import styles from '../styles/Home.module.css'
function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => setCountries(data.data));
  }, []);

  let pays = countries.map((data, i) => {
    return <Country
      key={i}
      name={data.name}
      flag={data.flag}
      iso3={data.iso3}/>

  })  

 

  return (
    <div className={styles.globalContainer}>
      <h1 className={styles.title}> My World Tour</h1>
      <span className={styles.counter}>Number of contries: {countries.length} </span>
      
      <div className={styles.countriesContainer}>
        {pays}
        </div>
    </div>
  );
}
 

export default Home;
