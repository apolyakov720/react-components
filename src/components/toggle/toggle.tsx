import React, { FunctionComponent, HTMLAttributes } from 'react';

interface Toggle {
  caption?: string;
}

const Toggle: FunctionComponent<Toggle> & HTMLAttributes<HTMLInputElement> = ({
  caption,
  ...inputProps
}): JSX.Element => {
  return (
    <label className='toggle'>
      <input className='input-no-visible' type='checkbox' {...inputProps} />
      <span className='toggle__input' />
      {caption && <span className='toggle__caption'>{caption}</span>}
    </label>
  );
};

export default Toggle;
