'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a5f',
      light: '#2d5580',
      dark: '#152940',
    },
    secondary: {
      main: '#00897b',
      light: '#4db6ac',
      dark: '#00695c',
    },
    warning: {
      main: '#bf8b2e',
      light: '#d4a857',
      dark: '#8f6722',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2332',
      secondary: '#5a6c7d',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Source Serif Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Source Serif Pro", "Georgia", serif',
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '12px 32px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});
