import React from 'react';

const defaultStyles = {
  height: '30px',
  paddingTop: '5px',
  paddingBottom: '20px',
  textAlign: 'center',
  borderTop: '1px solid #b2b2b2',
};

const CardFooter = ({
  style,
  children,
}) => {
  const styles = {
    ...defaultStyles,
    ...style,
  };
  return (
    <div className="card__footer" style={styles}>
      {children}
    </div>
  );
};

export default CardFooter;
