import React, { FunctionComponent, HTMLAttributes } from 'react';

interface Checkbox {
  caption?: string;
}

const Checkbox: FunctionComponent<Checkbox> & HTMLAttributes<HTMLInputElement> = ({
  caption,
  ...inputProps
}): JSX.Element => {
  return (
    <label className='checkbox'>
      <input className='input-no-visible' type='checkbox' {...inputProps} />
      <span className='checkbox__input' />
      {caption && <span className='checkbox__caption'>{caption}</span>}
    </label>
  );
};

export default Checkbox;
