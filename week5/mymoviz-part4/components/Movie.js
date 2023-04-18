import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Movie.module.css';

function Movie(props) {
  // ...

  // Like movie
  const handleLikeMovie = () => {
    props.onHeartClick(props.title);
  };

  let heartIconStyle = props.isLiked
    ? { color: '#e74c3c', cursor: 'pointer' }
    : { cursor: 'pointer' };

    

  return (
    <div className={styles.card}>
      {/* ... */}
      <div className={styles.textContainer}>
        {/* ... */}
        <div className={styles.iconContainer}>
          {/* ... */}
          <span>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => handleLikeMovie()}
              style={heartIconStyle}
              className="like"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
