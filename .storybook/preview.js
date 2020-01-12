import { addParameters, addDecorator } from '@storybook/react';

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator(story => {
  require('../src/reset.css');
  return story();
});
