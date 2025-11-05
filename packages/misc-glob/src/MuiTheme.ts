import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeDef: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#d66b08',
    },
    secondary: {
      main: '#7ae27a',
    },
    background: {
      default: '#1e1e1e',
    },
    text: {
      primary: '#fff',
    },
  },
};

export const MuiTheme = createTheme(themeDef);
