import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: "#eee",
      custom: "#0A4DAA"
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: "#FFFFFF"
    },
    tirtionary: {
      main: "#0A4DAA"
    },
    black: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: font,
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      height: 30,
      fontSize: '1.2rem',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textTransform: 'none',
    }
  },
});

export default theme;