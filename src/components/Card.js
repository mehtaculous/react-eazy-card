import React from 'react';

const defaultStyles = {

};

const Card = ({ className = "", style, children }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <div className={`card ${className}`} style={styles}>
      {children}
    </div>
  );
};

export default Card;