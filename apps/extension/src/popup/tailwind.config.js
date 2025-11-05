/** @type {import('tailwindcss').Config.theme} */
const theme = require('tailwind-config/src/tailwindTheme.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/popup/**/*.{jsx,tsx}',
    './src/components/popup/**/*.{jsx,tsx}',
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
