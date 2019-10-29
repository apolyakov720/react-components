import React, { FunctionComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Modal {
  open: boolean;
  children: ReactNode;
}

const Modal: FunctionComponent<Modal> = ({ open, children }): JSX.Element | null => {
  if (open) {
    return createPortal(
      <div className='overlay'>
        <div className='overlay__lightbox'>{children}</div>
      </div>,
      document.body
    );
  }

  return null;
};

export default Modal;
