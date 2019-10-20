import React from 'react';

interface Alert {
  message: string;
  type: 'default' | 'success' | 'info' | 'warning' | 'danger';
}

const Alert: React.FunctionComponent<Alert> = ({ message, type = 'default' }) => {
  return <div className={`alert alert--${type}`}>{message}</div>;
};

export default Alert;
