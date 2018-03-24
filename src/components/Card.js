import React from 'react';

const defaultStyles = {
  width: '250px',
  padding: '15px',
  margin: 'auto',
  transition: '0.3s',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};

const Card = ({
  style,
  bgColor = '#fff',
  fontColor = '#000',
  children,
}) => {
  const styles = {
    ...defaultStyles,
    ...style,
    backgroundColor: bgColor,
    color: fontColor,
  };
  return (
    <div className="card" style={styles}>
      {children}
    </div>
  );
};

export default Card;
