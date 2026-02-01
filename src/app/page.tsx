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
      text: "Sophie's expertise in navigating complex safeguarding landscapes is unmatched. Her guidance helped us embed a truly survivor-centered approach across our programs in West Africa.",
      author: "Program Director",
      org: "Mastercard Foundation Partner",
    },
    {
      text: "The SOCA assessment provided by Shield was a wake-up call. It was thorough, dignified, and gave us a clear roadmap to compliance. Highly recommended.",
      author: "Country Director",
      org: "International NGO, Kenya",
    },
    {
      text: "Finally, a consultancy that understands local context. Shield helped us design policies that actually work on the ground, not just on paper.",
      author: "CEO",
      org: "Youth-Led Organization",
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
           
              <Grid size={{ xs: 12, md: 12 }}>
              <Chip 
                label="Safeguarding & Accountability Practice" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  color: 'white', 
                  backdropFilter: 'blur(4px)',
                  mb: 3,
                  fontWeight: 600
                }} 
              />
              {/* FIXED: Explicit White Color */}
              <Typography 
                variant="h1" 
                sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' }, 
                    mb: 2, 
                    fontWeight: 800,
                    color: '#ffffff' // Explicitly White
                }}
              >
                Safeguarding rooted in dignity.
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.75rem' }, fontWeight: 300, mb: 5, opacity: 0.9, lineHeight: 1.5, color: 'white' }}>
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
                  sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                >
                  Explore Signature Packages
                </Button>
                <Button 
                  component={Link} 
                  href="/about"
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.5)', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } }}
                >
                  Meet the Lead
                </Button>
              </Stack>
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
            {/* FIXED: Removed opacity so logos are bold and visible */}
            {['USAID', 'MASTERCARD FOUNDATION', 'OXFAM', 'MALTESER INT', 'KILIFI COUNTY GOVT'].map((client, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        fontWeight: 900, 
                        color: 'text.secondary', // Darker Grey instead of faded opacity
                        opacity: 0.8,
                        letterSpacing: -0.5,
                        textAlign: 'center',
                        fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                >
                    {client}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. SIGNATURE PACKAGES */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" color="primary" sx={{ mb: 2, fontWeight: 700 }}>
            Where is your organization on its journey?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.125rem' }}>
            Safeguarding maturity is rarely uniform. Our signature packages act as entry points—tailored to meet you exactly where you are.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <PackageCard 
              title="Foundation" 
              subtitle="Start-Up & Readiness" 
              icon={<VerifiedUserIcon fontSize="large" />}
              color="#1e5f8c"
              description="For new organizations needing to establish credible systems from day one."
              href="/packages#foundation"
            />
          </Grid>
           <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <PackageCard 
              title="Strengthen" 
              subtitle="Institutional Systems" 
              icon={<HandshakeIcon fontSize="large" />}
              color="#00897b"
              description="For organizations ready to move from policy compliance to lived practice."
              href="/packages#strengthen"
              recommended
            />
          </Grid>
           <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <PackageCard 
              title="Assure" 
              subtitle="Strategic & Donor Support" 
              icon={<PublicIcon fontSize="large" />}
              color="#7b1fa2"
              description="For mature organizations needing independent audits and donor assurance."
              href="/packages#assure"
            />
          </Grid>
           <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <PackageCard 
              title="Secure" 
              subtitle="HEAT & EMT Training" 
              icon={<MedicalServicesIcon fontSize="large" />}
              color="#d32f2f"
              description="Specialist emergency preparedness and HEAT training for high-risk zones."
              href="/packages#secure"
              isNew
            />
          </Grid>
        </Grid>
        
        <Box textAlign="center" mt={6}>
            <Button component={Link} href="/packages" endIcon={<ArrowForwardIcon />}>
                Compare All Packages
            </Button>
        </Box>
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