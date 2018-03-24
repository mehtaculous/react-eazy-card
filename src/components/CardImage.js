import React from 'react';

const defaultStyles = {
  width: '200px',
  margin: 'auto',
  marginBottom: '15px',
  objectFit: 'cover',
};

const defaultImage = {
  height: '200px',
};

const circular = {
  borderRadius: '50%',
  border: '1px solid #b2b2b2',
};

const CardImage = ({
  style,
  imageSrc,
}) => {
  const styles = {
    ...defaultStyles,
    ...style,
  };
  const imageStyles = {
    ...defaultImage,
    ...circular,
  };
  return (
    <div style={styles}>
      <img className="card__image" src={imageSrc} alt="" style={imageStyles} />
    </div>
  );
};

export default CardImage;
