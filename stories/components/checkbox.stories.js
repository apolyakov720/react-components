import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '../../src/components/checkbox';

//storyOf API

export default (module) => {
  storiesOf('Checkbox', module).add('default', () => <Checkbox />);
};
