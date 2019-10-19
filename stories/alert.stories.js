import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from '../src/components/alert';

import '../src/css-modules/global';

storiesOf('Alert', module)
  .add('info(default)', () => (
    <Alert message='Heads up! This alert needs your attention, but its not super important.' />
  ))
  .add('success', () => (
    <Alert
      message='Well done! You successfully read this important alert message.'
      type='success'
    />
  ))
  .add('warning', () => (
    <Alert
      message='Warning! Better check yourself, you are not looking too good.'
      type='warning'
    />
  ))
  .add('danger', () => (
    <Alert
      message='Oh snap! Change few things up and try submitting again.'
      type='danger'
    />
  ));
