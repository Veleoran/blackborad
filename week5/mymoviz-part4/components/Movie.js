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

    function Movie({ onUpdateLikes }) {
    }

  return (
    <div className={styles.card}>
      {/* ... */}
      <div className={styles.textContainer}>
        {/* ... */}
        <div className={styles.iconContainer}>
          {/* ... */}
          <div className="heart" onClick={() => props.onHeartClick(props.movie.title)}>
          <span className="heart" onClick={() => onUpdateLikes(movieTitle)}>❤️</span>
  <FontAwesomeIcon icon={faHeart} />
</div>
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
