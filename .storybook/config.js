import { configure } from '@storybook/react';

//Конфигурация под storyOf API

const loaderStories = () => {
  const req = require.context('../stories', true, /\.stories\.js/);

  req.keys().forEach((filename) => req(filename));
};

configure(loaderStories, module);
