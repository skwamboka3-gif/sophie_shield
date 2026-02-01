'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// Interface
interface Package {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  color: string;
  gradient: string;
  description: string;
  whoItsFor: string[];
  keyOutcomes: string[];
}

const PackagesPage: React.FC = () => {
  // Data
  const packages: Package[] = [
    {
      id: 'foundation',
      title: 'Foundation',
      subtitle: 'Start-Up & Readiness',
      tagline: 'Strong Foundations',
      color: '#1e5f8c', // Blue
      gradient: 'linear-gradient(135deg, #1e5f8c 0%, #2d7eb8 100%)',
      description: 'Build robust safeguarding systems from day one. For new organizations seeking to establish credible, dignity-centered safeguarding as part of their organizational DNA.',
      whoItsFor: [
        'New organizations needing DNA-level safeguarding',
        'Start-ups seeking credible systems from day one',
        'Preparing for funding applications',
      ],
      keyOutcomes: [
        'Safeguarding Needs Assessment (SOCA)',
        'Core Policies & SOPs Development',
        'Foundational Staff Training',
        'Focal Point Establishment',
      ],
    },
    {
      id: 'strengthen',
      title: 'Strengthen',
      subtitle: 'Institutional Systems',
      tagline: 'From Policy to Practice',
      color: '#00897b', // Teal
      gradient: 'linear-gradient(135deg, #00897b 0%, #26a69a 100%)',
      description: 'Transform existing policies into lived practice. For organizations ready to embed safeguarding deeply into their institutional culture and operational systems.',
      whoItsFor: [
        'Orgs seeking to strengthen implementation',
        'Moving from compliance to culture change',
        'Preparing for expanded programming',
      ],
      keyOutcomes: [
        'Policy Review & Enhancement',
        'Case Management Systems Setup',
        'Institution-wide Training',
        'Accountability Mechanisms (FCRM)',
      ],
    },
    {
      id: 'assure',
      title: 'Assure',
      subtitle: 'Strategic & Donor Support',
      tagline: 'Strategic Oversight',
      color: '#7b1fa2', // Purple
      gradient: 'linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)',
      description: 'Independent verification and strategic assurance. For mature organizations seeking donor compliance, third-party validation, and continuous improvement.',
      whoItsFor: [
        'Established systems needing verification',
        'Mature orgs seeking strategic assurance',
        'Donors requiring independent audits',
      ],
      keyOutcomes: [
        'Independent Safeguarding Audits',
        'Compliance Verification Reporting',
        'Risk Mitigation Strategy',
        'Strategic Leadership Consultation',
      ],
    },
    {
      id: 'ethics',
      title: 'Ethics',
      subtitle: 'Corporate & Workplace',
      tagline: 'Ethical Workplaces',
      color: '#455a64', // Blue Grey
      gradient: 'linear-gradient(135deg, #455a64 0%, #757575 100%)',
      description: 'Build ethical workplace cultures. For private sector organizations committed to preventing harassment and embedding ethical practice.',
      whoItsFor: [
        'Private sector committed to ethical culture',
        'Corporations mitigating workplace risk',
        'Addressing culture & ethics concerns',
      ],
      keyOutcomes: [
        'Workplace Culture Assessments',
        'Code of Conduct Development',
        'Ethics Training (All Levels)',
        'Confidential Reporting Mechanisms',
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
         <Box
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 70% 30%, #ffffff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
          <Typography variant="h1" sx={{ mb: 3, color: 'white' }}>
            Signature Packages
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', opacity: 0.9, fontWeight: 400 }}>
            Four pathways to embed safeguarding, dignity, and accountability in your organization.
          </Typography>
        </Container>
      </Box>

      {/* 2. PACKAGES GRID - 2 ROWS x 2 COLUMNS */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {packages.map((pkg, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={pkg.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  borderTop: `6px solid ${pkg.color}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 10,
                  },
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                }}
              >
                {/* Header Gradient */}
                <Box
                  sx={{
                    background: pkg.gradient,
                    p: 4,
                    color: 'white',
                  }}
                >
                  <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: 'Playfair Display, serif', mb: 1 }}>
                    {pkg.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9, mb: 2, fontFamily: 'Source Serif Pro, serif' }}>
                    {pkg.subtitle}
                  </Typography>
                  <Chip
                    label={pkg.tagline}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                      backdropFilter: 'blur(4px)',
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                    {pkg.description}
                  </Typography>

                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="subtitle2" color="primary" gutterBottom sx={{ textTransform: 'uppercase', fontSize: '0.75rem' }}>
                        Who It's For
                      </Typography>
                      <List dense disablePadding>
                        {pkg.whoItsFor.map((item, i) => (
                          <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24, mt: 0.5 }}>
                              <CheckCircleIcon sx={{ fontSize: 16, color: pkg.color }} />
                            </ListItemIcon>
                            <ListItemText 
                                primary={item} 
                                primaryTypographyProps={{ variant: 'body2', sx: { lineHeight: 1.3 } }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="subtitle2" color="primary" gutterBottom sx={{ textTransform: 'uppercase', fontSize: '0.75rem' }}>
                        Key Outcomes
                      </Typography>
                      <List dense disablePadding>
                        {pkg.keyOutcomes.map((item, i) => (
                          <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24, mt: 0.5 }}>
                              <CheckCircleIcon sx={{ fontSize: 16, color: pkg.color }} />
                            </ListItemIcon>
                            <ListItemText 
                                primary={item} 
                                primaryTypographyProps={{ variant: 'body2', sx: { lineHeight: 1.3 } }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 'auto', pt: 4 }}>
                    <Button
                      component={Link}
                      href={`/packages/${pkg.id}`}
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: pkg.color,
                        '&:hover': {
                          bgcolor: pkg.color,
                          filter: 'brightness(0.9)',
                        },
                      }}
                    >
                      View Full Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. NUMBERED COMPARISON / PATHWAY */}
      <Box sx={{ bgcolor: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h2" color="primary" gutterBottom>
              Choose Your Path
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Each package is designed for organizations at different stages of their safeguarding journey.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {packages.map((pkg, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={pkg.id}>
                <Card 
                    elevation={0}
                    sx={{ 
                        border: `1px solid`, 
                        borderColor: 'divider',
                        textAlign: 'center', 
                        height: '100%',
                        transition: '0.3s',
                        '&:hover': { borderColor: pkg.color, boxShadow: 4 } 
                    }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: `${pkg.color}20`, // 20% opacity hex
                        color: pkg.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <Typography variant="h4" fontWeight="bold">
                        {index + 1}
                      </Typography>
                    </Box>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {pkg.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pkg.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. CTA SECTION */}
      <Box
        sx={{
          background: (theme) => `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
            Not Sure Which Package Is Right for You?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, opacity: 0.9 }}>
            Schedule a consultation and we'll help you identify the best pathway for your organization's unique safeguarding needs.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="warning" // Uses the Gold/Ochre theme color
            size="large"
            startIcon={<CalendarMonthIcon />}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              boxShadow: 4,
            }}
          >
            Schedule Consultation
          </Button>
        </Container>
      </Box>

      {/* Global CSS for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default PackagesPage;