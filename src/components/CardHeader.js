import React from 'react';

const defaultStyles = {

};

const CardHeader = ({ style, children }) => {
  const styles = { ...defaultStyles, style };
  return (
    <div className="card__header" style={styles}>
      {children}
    </div>
  );
};

export default CardHeader;