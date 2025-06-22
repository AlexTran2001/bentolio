import { createTheme } from '@mui/material/styles';
import { Color } from './components/color';
const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: { fontFamily: `'Playfair Display', serif` },
    h2: { fontFamily: `'Playfair Display', serif` },
    h3: { fontFamily: `'Playfair Display', serif` },
    h4: { fontFamily: `'Playfair Display', serif` },
    h5: { fontFamily: `'Playfair Display', serif` },
    h6: { fontFamily: `'Playfair Display', serif` },
  },
  components: {
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
