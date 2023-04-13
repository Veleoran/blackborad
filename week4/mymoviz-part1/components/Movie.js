

import React from 'react';
import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Movie = ({ title, image, vote }) => {

 
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="Poster" />
      <div className={styles.Container}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>
          {/* Ajoutez la description du film ici */}
        </p>
        <div className={styles.vote}>{stars}</div>
      </div>
    </div>
  );
};

export default Movie;
