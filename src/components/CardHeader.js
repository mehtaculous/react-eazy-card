import React from 'react';

const defaultStyles = {
  height: "30px",
  paddingBottom: "15px",
  marginTop: "-15px",
  marginBottom: "15px",
  textAlign: "center",
  borderBottom: "1px solid #b2b2b2"
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