import React from 'react';

const Dice = ({ number }) => {
  return (
    <img
      src={`/assets/images/${number}.jpg`}
      alt={`${number}`}
      className="dice"
    />
  );
};

export default Dice;
