import React from 'react';

const defaultStyles = {
  paddingTop: "10px",
  paddingBottom: "10px",
  textAlign: "center",
  borderTop: "1px solid #b2b2b2"
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