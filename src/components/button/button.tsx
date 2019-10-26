import React, { FunctionComponent, HTMLAttributes } from 'react';

interface Button {
  name: string;
  type?: 'default' | 'secondary' | 'primary';
  size?: 'small' | 'normal' | 'medium' | 'large' | 'massive';
}

const Button: FunctionComponent<Button> & HTMLAttributes<HTMLButtonElement> = ({
  name,
  type = 'default',
  size = 'normal',
  ...buttonProps
}): JSX.Element => {
  return (
    <button className={`button button--${type} button--${size}`} {...buttonProps}>
      <span className='button__name'>{name}</span>
    </button>
  );
};

export default Button;
