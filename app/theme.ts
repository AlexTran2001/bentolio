import { createTheme } from '@mui/material/styles';
import { Color } from './components/color';
import stardust from './assets/stardust.png';
const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h2: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h3: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h4: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h5: { fontFamily: `'Playfair Display', serif`, color: Color.black },
    h6: { fontFamily: `'Playfair Display', serif`, color: Color.black },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: Color.black,
          backgroundImage: `url(${stardust})`,
          backgroundRepeat: 'repeat',
          position: 'relative',
          color: Color.white,
          margin: 0,
          padding: 0,
          animation: 'moveBackground 30s linear infinite',
        },
        '@keyframes moveBackground': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: Color.black,
          fontWeight: 300,
          fontSize: '16px',
          fontFamily: `'Playfair Display', serif`,
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export default theme;
