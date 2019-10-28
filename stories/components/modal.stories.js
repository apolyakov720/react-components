import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../../src/components/modal';

//storyOf API

export default (module) => {
  storiesOf('Modal', module).add('default', () => <Modal />);
};
