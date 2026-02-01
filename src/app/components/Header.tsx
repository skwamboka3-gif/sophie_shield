'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation Data
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Packages', path: '/packages' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Helper to check active state
  const isActive = (path: string) => pathname === path;

  // --- MOBILE DRAWER CONTENT ---
  const drawer = (
    <Box 
      sx={{ 
        height: '100%', 
        bgcolor: 'primary.main', // Deep Navy
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box display="flex" justifyContent="flex-end" p={2}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
         {/* Drawer Logo Area */}
         <Box
            sx={{
              width: 50,
              height: 50,
              bgcolor: 'secondary.main',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2
            }}
          >
           {/* Simple White Shield SVG */}
           <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4L4 10V14C4 21.18 8.84 27.62 16 29C23.16 27.62 28 21.18 28 14V10L16 4Z" fill="white" />
            </svg>
          </Box>
          <Typography variant="h6" fontWeight="bold">SHIELD</Typography>
      </Box>

      <List sx={{ px: 2 }}>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <Link href={item.path} passHref style={{ width: '100%', textDecoration: 'none' }}>
              <ListItemButton
                onClick={handleDrawerToggle}
                selected={isActive(item.path)}
                sx={{
                  borderRadius: 2,
                  py: 1.5, // Taller buttons on mobile too
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderLeft: `4px solid ${theme.palette.warning.main}`, // Gold border
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ 
                    fontWeight: isActive(item.path) ? 700 : 500,
                    color: 'white',
                    fontSize: '1.1rem' 
                  }} 
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ mt: 'auto', p: 3 }}>
        <Button
          component={Link}
          href="/contact"
          fullWidth
          variant="contained"
          color="warning"
          onClick={handleDrawerToggle}
          sx={{ py: 2, fontWeight: 'bold', fontSize: '1.1rem' }}
        >
          Book Consultation
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          bgcolor: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 90 }}> {/* Increased height from 80 to 90 */}
            
            {/* 1. LOGO AREA */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
              <Box
                sx={{
                  width: 54, // Slightly larger logo box
                  height: 54,
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4L4 10V14C4 21.18 8.84 27.62 16 29C23.16 27.62 28 21.18 28 14V10L16 4Z" fill="#3A7D8C" stroke="white" strokeWidth="1.5" />
                  <path d="M12 16L15 19L21 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Box>
              <Box>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 800, lineHeight: 1, letterSpacing: '-0.5px' }}>
                  SHIELD
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  Safeguarding Practice
                </Typography>
              </Box>
            </Link>

            {/* 2. DESKTOP NAVIGATION */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}> {/* Increased gap from 1 to 3 */}
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.path}
                    color={isActive(item.path) ? 'primary' : 'inherit'}
                    sx={{
                      fontSize: '1.15rem', // Bigger Font
                      fontWeight: isActive(item.path) ? 800 : 600, // Bolder
                      px: 2.5, // More horizontal padding
                      py: 1,
                      position: 'relative',
                      '&::after': isActive(item.path) ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 6,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '30px', // Wider underline
                        height: '3px',
                        bgcolor: 'warning.main'
                      } : {},
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: 'primary.main'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                
                {/* Vertical Divider */}
                <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 32, alignSelf: 'center' }} />

                {/* Language Toggle */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mr: 2 }}>
                    <Typography variant="body1" fontWeight="bold" color="primary">EN</Typography>
                    <Typography variant="body1" color="text.disabled">|</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>FR</Typography>
                </Box>

                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="warning" // Uses the Gold/Ochre color
                  size="large" // Ensure large size prop
                  sx={{ 
                    boxShadow: 2,
                    px: 5, // Extra wide padding
                    py: 1.5, // Taller button
                    fontSize: '1.1rem', // Larger text
                    fontWeight: 700,
                    '&:hover': { transform: 'translateY(-1px)', boxShadow: 4 }
                  }}
                >
                  Book Consultation
                </Button>
              </Box>
            )}

            {/* 3. MOBILE MENU TOGGLE */}
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ fontSize: 36 }} /> {/* Larger Hamburger Icon */}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Component */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 320, // Slightly wider drawer
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;