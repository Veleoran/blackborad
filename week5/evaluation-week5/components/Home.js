import { useState, useEffect } from 'react';
import Country from './Country';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => setCountries(data.data));
  }, []);

  return (
    <div className="App">
      <h1>My World Tour</h1>
      <p>{countries.length} pays</p>
      <div className="countries">
        {
          countries.map((country) => (
            <Country
              key={country.country}
              name={country.country}
              flag={country.flag}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
