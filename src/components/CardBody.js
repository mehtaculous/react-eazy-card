import React from 'react';

const defaultStyles = {

};

const CardBody = ({ className = "", style, children }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <div className={`card ${className}`} style={styles}>
      {children}
    </div>
  );
};

export default CardBody;