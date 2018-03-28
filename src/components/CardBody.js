import React from 'react';

const defaultStyles = {
  paddingTop: '10px',
  textAlign: 'center',
  borderTop: '1px solid #b2b2b2',
};

const CardBody = ({
  style,
  children,
}) => {
  const styles = {
    ...defaultStyles,
    ...style,
  };
  return (
    <div className="card__body" style={styles}>
      {children}
    </div>
  );
};

export default CardBody;
