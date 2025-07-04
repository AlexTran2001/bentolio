import { createTheme } from '@mui/material/styles';
import { Color } from './components/color';
const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h2: { fontFamily: `'Playfair Display', serif`,color: Color.black },
    h3: { fontFamily: `'Playfair Display', serif`,color: Color.black },
    h4: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h5: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h6: { fontFamily: `'Playfair Display', serif`, color: Color.black },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: Color.black,
          color: Color.white,
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiLink:{
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: Color.black,
          fontWeight: 'light',
          fontSize: '16px',
          fontFamily: `'Playfair Display', serif`,
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    }}
  
});

export default theme;
