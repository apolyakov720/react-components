import React, { FunctionComponent } from 'react';

interface Alert {
  message: string;
  type: 'default' | 'success' | 'information' | 'warning' | 'danger';
}

const Alert: FunctionComponent<Alert> = ({ message, type = 'default' }): JSX.Element => {
  return <div className={`alert alert--${type}`}>{message}</div>;
};

export default Alert;
