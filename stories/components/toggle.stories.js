import React from 'react';
import { storiesOf } from '@storybook/react';

import Toggle from '../../src/components/toggle';

//storyOf API

export default (module) => {
  storiesOf('Toggle', module)
    .add('default', () => <Toggle />)
    .add('with caption', () => <Toggle caption='Normal Checkbox' />);
};
