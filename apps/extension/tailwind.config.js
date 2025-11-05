/** @type {import('tailwindcss').Config.theme} */
const theme = require('tailwind-config/src/tailwindTheme.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/misc/**/*.{jsx,tsx}',
    './src/contents/**/*.{jsx,tsx}',
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
