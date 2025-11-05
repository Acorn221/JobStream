/** @type {import('tailwindcss').Config} */
const theme = require('tailwind-config/src/tailwindTheme.json');

module.exports = {
  content: [
    './src/contents/*.{jsx,tsx}',
    './src/components/contents/*.{jsx,tsx}',
  ],
  compilerOptions: {
    baseUrl: 'src/',
  },
  ...theme,
  mode: 'jit',
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  include: [
    'src',
    'types',
  ],
};
