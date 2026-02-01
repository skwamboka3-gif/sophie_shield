'use client';

import { createTheme } from '@mui/material/styles';
import { Montserrat, Open_Sans } from 'next/font/google';

// Load fonts via Next.js
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2342', // Deep Navy (Trust)
      light: '#1B3B66',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3A7D8C', // Calm Teal (Safety)
      light: '#629CA8',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#D4AF37', // Gold (Accent/Action)
      contrastText: '#0A2342',
    },
    background: {
      default: '#F4F6F8', // Light Gray
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
    h1: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      color: '#0A2342',
    },
    h2: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
      color: '#0A2342',
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
    },
    button: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
      textTransform: 'none', // More modern look
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
  },
});

export default theme;