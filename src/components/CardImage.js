import React from 'react';

const defaultStyles = {

};

const CardImage = ({ style, imageSrc }) => {
  const styles = { ...defaultStyles, ...style}
  return (
    <div style={styles}>
      <img className="card__image" src={imageSrc} style={} />
    </div>
  );
};

export default CardImage;