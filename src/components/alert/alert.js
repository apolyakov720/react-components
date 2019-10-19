import React from 'react';

import '../../css-modules/alert';

const Alert = ({ message, type = 'info' }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

export default Alert;
