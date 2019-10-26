import React, { FunctionComponent, HTMLAttributes } from 'react';

import { Switcher } from '../../types/common';

const Radio: FunctionComponent<Switcher> & HTMLAttributes<HTMLInputElement> = ({
  caption,
  ...inputProps
}): JSX.Element => {
  return (
    <label className='radio'>
      <input className='input-no-visible' type='radio' {...inputProps} />
      <span className='radio__input' />
      {caption && <span className='radio__caption'>{caption}</span>}
    </label>
  );
};

export default Radio;
