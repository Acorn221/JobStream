/* eslint-disable import/no-extraneous-dependencies, global-require */
const theme = require('./tailwindTheme.json');

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  compilerOptions: {
    baseUrl: 'src/',
  },
  ...theme,
  mode: 'jit',
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
  include: [
    'src',
    'types',
  ],
};
