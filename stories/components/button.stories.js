import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../src/components/button';

//storyOf API

export default (module) => {
  storiesOf('Button', module)
    .add('default', () => (
      <>
        <Button name='Default' size='small' />
        <Button name='Default' size='normal' />
        <Button name='Default' size='medium' />
        <Button name='Default' size='large' />
        <Button name='Default' size='massive' />
      </>
    ))
    .add('secondary', () => (
      <>
        <Button name='Secondary' type='secondary' size='small' />
        <Button name='Secondary' type='secondary' size='normal' />
        <Button name='Secondary' type='secondary' size='medium' />
        <Button name='Secondary' type='secondary' size='large' />
        <Button name='Secondary' type='secondary' size='massive' />
      </>
    ))
    .add('primary', () => (
      <>
        <Button name='Primary' type='primary' size='small' />
        <Button name='Primary' type='primary' size='normal' />
        <Button name='Primary' type='primary' size='medium' />
        <Button name='Primary' type='primary' size='large' />
        <Button name='Primary' type='primary' size='massive' />
      </>
    ));
};
