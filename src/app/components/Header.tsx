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
  ListItemText,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Packages', path: '/packages' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'About', path: '/about' },
    { label: 'Ethics', path: '/ethics' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActivePath = (path: string) => pathname === path;

  const drawer = (
    <Box className="w-72 h-full bg-[#1e3a5f]" onClick={handleDrawerToggle}>
      <div className="flex justify-end p-4">
        <IconButton onClick={handleDrawerToggle} className="text-white">
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            href={item.path}
            className={`py-4 px-8 transition-all duration-300 ${
              isActivePath(item.path)
                ? 'bg-[#2d5580] border-l-4 border-[#bf8b2e]'
                : 'hover:bg-[#2d5580]'
            }`}
          >
            <ListItemText
              primary={item.label}
              className="text-white"
              primaryTypographyProps={{
                style: {
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: isActivePath(item.path) ? 600 : 400,
                  fontSize: '1.125rem',
                  color: 'white',
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem className="px-8 mt-4">
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            className="w-full bg-[#bf8b2e] hover:bg-[#d4a857] text-white py-3 shadow-lg"
          >
            Contact Us
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        className="bg-white shadow-md"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
      >
        <Container maxWidth="xl">
          <Toolbar className="py-2" disableGutters>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 mr-auto">
              <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4L4 10V14C4 21.18 8.84 27.62 16 29C23.16 27.62 28 21.18 28 14V10L16 4Z"
                    fill="#00897b"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 16L15 19L21 13"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[#1e3a5f] font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Shield
                </div>
                <div className="text-[#5a6c7d] text-xs" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                  Safeguarding & Accountability Practice
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.path}
                    className={`px-4 py-2 mx-1 transition-all duration-300 ${
                      isActivePath(item.path)
                        ? 'text-[#1e3a5f] font-semibold border-b-2 border-[#bf8b2e]'
                        : 'text-[#5a6c7d] hover:text-[#1e3a5f]'
                    }`}
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      textTransform: 'none',
                      fontSize: '1rem',
                      borderRadius: 0,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  className="ml-6 bg-[#bf8b2e] hover:bg-[#d4a857] text-white px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="text-[#1e3a5f]"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 288,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;