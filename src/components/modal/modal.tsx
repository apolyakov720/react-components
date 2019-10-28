import React, { FunctionComponent, ReactNode } from 'react';

interface Modal {
  open: boolean;
  children: ReactNode;
}

const Modal: FunctionComponent<Modal> = ({ open, children }): JSX.Element => {
  return (
    <div className='overlay'>
      <div className='overlay__lightbox'></div>
    </div>
  );
};

export default Modal;
