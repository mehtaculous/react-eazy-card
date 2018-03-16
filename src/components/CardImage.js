import React from 'react';

const defaultStyles = {
  width: "200px",
  margin: "auto",
  marginTop: "15px",
  marginBottom: "15px",
  objectFit: "cover"
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