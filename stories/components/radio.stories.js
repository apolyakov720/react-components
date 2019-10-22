import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '../../src/components/radio';

//storyOf API

export default (module) => {
  storiesOf('Radio', module)
    .add('default', () => <Radio />)
    .add('with caption', () => <Radio caption='Normal Radio Button' />)
    .add('radio group', () => (
      <>
        <Radio caption='Radio 1' name='test-group' />
        <Radio caption='Radio 2' name='test-group' />
        <Radio caption='Radio 3' name='test-group' />
      </>
    ));
};
