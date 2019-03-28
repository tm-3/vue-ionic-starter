import { configure, addDecorator, getStorybook } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { create } from '@storybook/theming';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'LCL Component Library',
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});

addDecorator(centered);

const req = require.context('../../src/', true, /.stories.(ts|tsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
