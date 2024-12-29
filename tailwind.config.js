import { nextui } from '@nextui-org/react';

import { screens, borderRadius, colors } from './src/theme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,jsx}'
  ],
  theme: {
    screens,
    extend: {
      borderRadius,
      colors
    }
  },
  plugins: [nextui()]
};
