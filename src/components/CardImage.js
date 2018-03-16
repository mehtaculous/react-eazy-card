import React from 'react';

const defaultStyles = {
  width: "200px",
  margin: "auto",
  marginTop: "15px",
  marginBottom: "15px",
  objectFit: "cover"
};

const defaultImage = {
  height: "200px"
};

const circularImage = {
  borderRadius: "50%",
  border: "1px solid #b2b2b2"
};

const CardImage = ({ style, imageSrc }) => {
  const styles = { ...defaultStyles, ...style}
  const imageStyles = { ...defaultImage, ...circularImage };
  return (
    <div style={styles}>
      <img className="card__image" src={imageSrc} style={imageStyles} />
    </div>
  );
};

export default CardImage;