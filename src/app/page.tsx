'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Fade,
  Avatar,
  Paper,
} from '@mui/material';
import Link from 'next/link';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Home() {
  // Testimonial Data
  const testimonials = [
    {
      text: "Excellent facilitator, good at engaging teams.",
      author: "Training Participant",
      org: "",
    },
    {
      text: "Always a time keeper! Very safeguardy.",
      author: "Training Participant",
      org: "",
    },
    {
      text: "Best training techniques. Thank you.",
      author: "Training Participant",
      org: "",
    },
    {
      text: "Your training was great. I follow you on LinkedIn please have an online platform whether free/paid to create awareness on safeguarding. Also share your Gym Goals Gal!! Thank you.",
      author: "Training Participant",
      org: "",
    },
    {
      text: "Safeguarding sessions are always super eye opening. I appreciate having this knowledge as I implement my activities and my work in general. I think even in personal life. The practical activities during this session are a blessing. Please continue doing this. I have also learned alot about using a training room well. Thanks for sharing the idea.",
      author: "Training Participant",
      org: "",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 20% 50%, #ffffff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
            zIndex: 1,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
           
            <Grid size={{ xs: 12, md: 6 }} xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
           
              
              <Typography 
                variant="h1" 
                sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.75rem', lg: '4.5rem' }, 
                    mb: 3, 
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.1,
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
              >
                Safeguarding rooted in dignity.
              </Typography>
              
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '1.1rem', md: '1.35rem' }, 
                  fontWeight: 400, 
                  mb: 5, 
                  opacity: 0.95, 
                  lineHeight: 1.6, 
                  color: 'white',
                  maxWidth: '90%'
                }}
              >
                We help humanitarian and private sector institutions design ethical, survivor-centered frameworks that protect people and build trust.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  component={Link} 
                  href="/packages"
                  variant="contained" 
                  color="warning" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem', 
                    fontWeight: 700,
                    boxShadow: '0 8px 20px rgba(237, 108, 2, 0.4)',
                    '&:hover': { transform: 'translateY(-2px)' },
                    transition: 'all 0.3s'
                  }}
                >
                  Explore Packages
                </Button>
                <Button 
                  component={Link} 
                  href="/about"
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem', 
                    borderWidth: '2px',
                    borderColor: 'rgba(255,255,255,0.7)', 
                    color: 'white', 
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)',
                    '&:hover': { 
                      borderColor: 'white', 
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderWidth: '2px'
                    } 
                  }}
                >
                  Meet the Lead
                </Button>
              </Stack>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }} xs={12} md={6}>
              <Box 
                sx={{ 
                  width: '100%', 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
                  position: 'relative', 
                  pt: '56.25%',
                  border: '8px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '8px' }}
                  src="https://www.youtube.com/embed/PBkou8t_Tuk?autoplay=1&mute=1&loop=1&playlist=PBkou8t_Tuk"
                  title="Shield Safeguarding Feature"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
            </Grid>
            
    
          </Grid>
        </Container>
      </Box>

      {/* 2. TRUSTED BY SECTION */}
      <Box sx={{ bgcolor: 'white', py: 8, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography variant="subtitle2" align="center" color="text.secondary" sx={{ mb: 6, textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.875rem', fontWeight: 700 }}>
            Trusted by global leaders in humanitarian aid & development
          </Typography>
          
          <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            spacing={{ xs: 4, md: 8 }} 
          >
            {/* Displaying Partner Logos */}
            {[
              'Screenshot 2026-06-18 at 1.24.48 AM.png',
              'Screenshot 2026-06-18 at 1.25.12 AM.png',
              'Screenshot 2026-06-18 at 1.25.19 AM.png',
              'Screenshot 2026-06-18 at 1.25.42 AM.png',
              'Screenshot 2026-06-18 at 1.25.59 AM.png',
              'Screenshot 2026-06-18 at 1.26.21 AM.png'
            ].map((img, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index} display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={`/images/logos/${img}`}
                  alt={`Partner logo ${index + 1}`}
                  sx={{
                    maxHeight: 80,
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. TRAINING GALLERY */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" color="primary" sx={{ mb: 2, fontWeight: 700 }}>
            Training in Action
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.125rem' }}>
            Empowering teams through practical, hands-on safeguarding and HEAT training sessions.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {[
            'WhatsApp Image 2025-12-15 at 22.06.14.jpeg',
            'WhatsApp Image 2025-12-15 at 22.06.15.jpeg',
            'WhatsApp Image 2025-12-15 at 22.06.16.jpeg',
            'WhatsApp Image 2025-12-15 at 22.06.17.jpeg',
            'WhatsApp Image 2025-12-16 at 05.54.04.jpeg',
            'WhatsApp Image 2025-12-16 at 05.54.05.jpeg'
          ].map((img, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 250, 
                  borderRadius: 3, 
                  overflow: 'hidden', 
                  boxShadow: 3,
                  position: 'relative',
                  '&:hover img': { transform: 'scale(1.05)' }
                }}
              >
                <Box
                  component="img"
                  src={`/images/training/${img}`}
                  alt={`Training session ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 4. TESTIMONIALS SLIDER (Replaces Bio) */}
      <Box sx={{ bgcolor: 'background.paper', py: 12 }}>
        <Container maxWidth="md">
            <Typography variant="overline" display="block" align="center" color="secondary" fontWeight="bold" letterSpacing={1} mb={2}>
                What Partners Say
            </Typography>
            <Typography variant="h2" align="center" color="primary" sx={{ mb: 6 }}>
                Impact & Testimonials
            </Typography>
            
            <Paper 
                elevation={3} 
                sx={{ 
                    p: { xs: 4, md: 8 }, 
                    borderRadius: 4, 
                    position: 'relative', 
                    minHeight: 300, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <FormatQuoteIcon sx={{ fontSize: 60, color: 'rgba(0,0,0,0.05)', position: 'absolute', top: 20, left: 20 }} />
                
                {testimonials.map((item, index) => (
                     <Fade in={activeStep === index} timeout={800} key={index}>
                        <Box sx={{ display: activeStep === index ? 'block' : 'none', width: '100%' }}>
                            <Typography 
                                variant="h5" 
                                component="p" 
                                sx={{ 
                                    fontStyle: 'italic', 
                                    lineHeight: 1.6, 
                                    mb: 4, 
                                    color: 'text.primary',
                                    fontFamily: 'Source Serif Pro, serif' 
                                }}
                            >
                                "{item.text}"
                            </Typography>
                            
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold" color="secondary">
                                    {item.author}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {item.org}
                                </Typography>
                            </Box>
                        </Box>
                    </Fade>
                ))}

                {/* Dots Indicator */}
                <Stack direction="row" spacing={1} sx={{ position: 'absolute', bottom: 20 }}>
                    {testimonials.map((_, index) => (
                        <Box 
                            key={index}
                            onClick={() => setActiveStep(index)}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                bgcolor: activeStep === index ? 'secondary.main' : 'grey.300',
                                cursor: 'pointer',
                                transition: '0.3s'
                            }}
                        />
                    ))}
                </Stack>
            </Paper>
        </Container>
      </Box>

      {/* 5. CTA SECTION */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10, textAlign: 'center' }}>
          <Container maxWidth="md">
              <Typography variant="h3" gutterBottom>
                  Ready to Strengthen Your Systems?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.8, mb: 4, fontWeight: 400 }}>
                  Schedule a consultation to identify the right safeguarding pathway for your organization.
              </Typography>
              <Button 
                component={Link} 
                href="/contact" 
                variant="contained" 
                color="warning" 
                size="large"
                sx={{ px: 6, py: 2, fontSize: '1.1rem' }}
              >
                  Book Consultation
              </Button>
          </Container>
      </Box>

      {/* 6. SAFEGUARDING STATEMENT */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
            <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, bgcolor: 'white', borderLeft: '8px solid', borderColor: '#1e5f8c' }}>
                <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 700 }}>
                    Safeguarding Statement
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                    Emergency Solutions Consultancy is committed to promoting safe, inclusive, and respectful environments. We have a zero-tolerance policy for any form of harassment, exploitation, abuse, or discrimination (PSEAH). We expect all our staff, consultants, partners, and clients to uphold the highest standards of ethics and dignity in all interactions.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    To report safeguarding concerns, misconduct, or ethical violations, please contact:{' '}
                    <Box component="span" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                        <a href="mailto:info@shieldsafeguarding.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>info@shieldsafeguarding.co.ke</a>
                    </Box>
                </Typography>
            </Paper>
        </Container>
      </Box>

    </Box>
  );
}

// --- HELPER COMPONENT FOR CARDS ---
interface PackageCardProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    href: string;
    isNew?: boolean;
    recommended?: boolean;
}

function PackageCard({ title, subtitle, icon, color, description, href, isNew, recommended }: PackageCardProps) {
  return (
    <Card 
        elevation={recommended ? 8 : 2}
        sx={{ 
            height: '100%', 
            borderTop: `6px solid ${color}`, 
            transition: '0.3s', 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            transform: recommended ? 'scale(1.05)' : 'none',
            zIndex: recommended ? 10 : 1,
            '&:hover': { transform: 'translateY(-8px)', boxShadow: 12 } 
        }}
    >
      {isNew && (
        <Chip 
            label="New" 
            color="error" 
            size="small" 
            sx={{ position: 'absolute', top: 12, right: 12, fontWeight: 'bold' }} 
        />
      )}
      
      <CardContent sx={{ textAlign: 'center', p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box 
            sx={{ 
                color: color, 
                bgcolor: `${color}15`,
                width: 64, 
                height: 64, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                mx: 'auto',
                mb: 3
            }}
        >
            {icon}
        </Box>
        
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          {title}
        </Typography>
        
        <Typography variant="subtitle2" sx={{ color: color, textTransform: 'uppercase', fontSize: '0.75rem', mb: 2, fontWeight: 700 }}>
          {subtitle}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
            {description}
        </Typography>

        <Box mt="auto">
            <Button 
                component={Link} 
                href={href} 
                variant="text" 
                endIcon={<ArrowForwardIcon />}
                sx={{ color: color, fontWeight: 600 }}
            >
                View Details
            </Button>
        </Box>
      </CardContent>
    </Card>
  );
}