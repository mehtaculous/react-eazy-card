import React from 'react';

const defaultStyles = {

};

const CardFooter = ({ style, children}) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <div className="card__footer" style={styles}>
      {children}
    </div>
  );
};

export default CardFooter;