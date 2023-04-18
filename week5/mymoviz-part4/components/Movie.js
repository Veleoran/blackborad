import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Movie.module.css';

function Movie(props) {
  // State to toggle movie description
  const [showDescription, setShowDescription] = useState(false);

  // Like movie
  const handleLikeMovie = () => {
    props.onHeartClick(props.title);
  };

  // Toggle movie description
  const toggleDescription = () => {
    setShowDescription(!showDescription);
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
          {/* Add star and video icons */}
          <span>
            <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
          </span>
          <span>
            <FontAwesomeIcon icon={faVideo} className={styles.videoIcon} onClick={toggleDescription} />
          </span>
        </div>
        {showDescription && <p className={styles.description}>{props.overview}</p>}
      </div>
    </div>
  );
}

export default Movie;
