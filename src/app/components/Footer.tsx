'use client';

import React from 'react';
import { Container, Typography, Box, IconButton, Grid, Divider } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// Data Arrays for cleaner JSX
const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const PACKAGES = [
  { name: 'Foundation (Start-Up)', href: '/packages#foundation' },
  { name: 'Strengthen (Institutional)', href: '/packages#strengthen' },
  { name: 'Assure (Strategic)', href: '/packages#assure' },
  { name: 'Secure (HEAT & Safety)', href: '/packages#secure' },
];

const SOCIAL_LINKS = [
  { icon: <FacebookIcon />, href: '#' },
  { icon: <TwitterIcon />, href: '#' },
  { icon: <LinkedInIcon />, href: '#' },
  { icon: <EmailIcon />, href: 'mailto:info@shieldsafeguarding.org' },
];

const Footer: React.FC = () => {
  return (
    // changed background to the Deep Brand Navy for consistency
    <Box component="footer" sx={{ bgcolor: '#0A2342', color: 'white' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          
          {/* 1. BRAND SECTION */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              {/* Logo Box */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: 'secondary.main', // Uses your Teal theme color
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                 {/* Re-using your SVG but cleaned up */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4L4 10V14C4 21.18 8.84 27.62 16 29C23.16 27.62 28 21.18 28 14V10L16 4Z" fill="white" />
                  <path d="M12 16L15 19L21 13" stroke="#0A2342" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1 }}>
                  Shield
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Safeguarding Practice
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ opacity: 0.7, mb: 3, maxWidth: '300px', lineHeight: 1.6 }}>
              Embedding dignity, accountability, and ethical safeguarding frameworks in institutions worldwide.
            </Typography>

            <Box display="flex" gap={1}>
              {SOCIAL_LINKS.map((social, index) => (
                <IconButton 
                  key={index} 
                  size="small" 
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', color: 'warning.main' } }}
                  href={social.href}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* 2. QUICK LINKS */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: 'warning.main' }}>
              Company
            </Typography>
            <Box display="flex" flexDirection="column" gap={1.5}>
              {QUICK_LINKS.map((link) => (
                <Link key={link.name} href={link.href} passHref style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1, color: 'secondary.light' } }}>
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* 3. PACKAGES */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: 'warning.main' }}>
              Signature Packages
            </Typography>
            <Box display="flex" flexDirection="column" gap={1.5}>
              {PACKAGES.map((pkg) => (
                <Link key={pkg.name} href={pkg.href} passHref style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1, color: 'secondary.light' } }}>
                    {pkg.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* 4. CONTACT INFO */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: 'warning.main' }}>
              Get in Touch
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box>
                <Typography variant="caption" display="block" sx={{ opacity: 0.5 }}>EMAIL</Typography>
                <Link href="mailto:info@shieldsafeguarding.org" style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography variant="body2" sx={{ '&:hover': { color: 'warning.main' } }}>info@shieldsafeguarding.org</Typography>
                </Link>
              </Box>
              <Box>
                <Typography variant="caption" display="block" sx={{ opacity: 0.5 }}>LOCATION</Typography>
                <Typography variant="body2">Nairobi, Kenya</Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>(Deployable across Africa & Europe)</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* BOTTOM COPYRIGHT BAR */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="caption" sx={{ opacity: 0.6, display: 'block', textAlign: { xs: 'center', md: 'left' } }}>
              © {new Date().getFullYear()} Shield Safeguarding & Accountability Practice.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }} gap={3} mt={{ xs: 2, md: 0 }}>
              <Link href="/privacy" style={{ textDecoration: 'none' }}>
                <Typography variant="caption" sx={{ color: 'white', opacity: 0.6, '&:hover': { opacity: 1 } }}>Privacy Policy</Typography>
              </Link>
              <Link href="/terms" style={{ textDecoration: 'none' }}>
                <Typography variant="caption" sx={{ color: 'white', opacity: 0.6, '&:hover': { opacity: 1 } }}>Terms of Service</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;