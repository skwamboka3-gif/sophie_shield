'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Avatar,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PolicyIcon from '@mui/icons-material/Policy';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'; // For HEAT
import AssessmentIcon from '@mui/icons-material/Assessment';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'soca',
      title: 'Organizational Capacity Assessments (SOCA)',
      icon: <AssessmentIcon fontSize="large" />,
      description:
        'A comprehensive deep-dive into your organization’s current safeguarding maturity. We evaluate policies, culture, recruitment, and reporting mechanisms against global standards (CHS, IASC) to identify gaps and actionable opportunities.',
      features: ['Gap Analysis', 'Risk Mapping', 'Maturity Scoring', 'Action Planning'],
    },
    {
      id: 'policy',
      title: 'Policy & Framework Development',
      icon: <PolicyIcon fontSize="large" />,
      description:
        'We don’t just write documents; we build frameworks that work in the real world. We co-create Safeguarding, PSEAH, and Whistleblowing policies that are legally compliant, culturally relevant, and operationally feasible.',
      features: ['Safeguarding Policy', 'Code of Conduct', 'Whistleblowing Mechanisms', 'Reporting SOPs'],
    },
    {
      id: 'training',
      title: 'Training & Capacity Strengthening',
      icon: <SchoolIcon fontSize="large" />,
      description:
        'Moving beyond "tick-box" compliance. Our training is interactive, scenario-based, and tailored to different roles—from field staff and drivers to senior leadership and trustees.',
      features: ['Focal Point Training', 'Leadership Coaching', 'Induction Modules', 'Refresher Courses'],
    },
    {
      id: 'investigations',
      title: 'Investigations & Case Management',
      icon: <SearchIcon fontSize="large" />,
      description:
        'When incidents occur, the response must be survivor-centered and procedurally sound. We provide independent investigation support and help set up secure, confidential case management systems.',
      features: ['Independent Investigations', 'Case Management Setup', 'Survivor Referral Pathways', 'Risk Assessments'],
    },
    {
      id: 'safety',
      title: 'Operational Safety & HEAT Training',
      icon: <MedicalServicesIcon fontSize="large" />,
      description:
        'Safeguarding includes physical safety. Led by certified EMTs, we offer emergency preparedness and Hostile Environment Awareness Training (HEAT) for staff operating in high-risk zones.',
      features: ['First Aid & EMT', 'Field Security Protocols', 'Emergency Evacuation', 'Risk Mitigation'],
      highlight: true, // Special styling for Sophie's unique skill
    },
    {
      id: 'mentorship',
      title: 'Ongoing Mentorship & Advisory',
      icon: <SupportAgentIcon fontSize="large" />,
      description:
        'Safeguarding is a journey, not a destination. We offer retainer packages to act as your external technical advisors, guiding your focal points through complex cases and donor audits.',
      features: ['Donor Audit Prep', 'Crisis Advisory', 'Focal Point Mentoring', 'Quarterly Reviews'],
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
            backgroundImage: 'radial-gradient(circle at 30% 70%, #ffffff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
          <Typography variant="h1" sx={{ mb: 3, color: 'white' }}>
            Our Core Services
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', opacity: 0.9, fontWeight: 400 }}>
            Comprehensive support to design, embed, and sustain ethical safeguarding systems.
          </Typography>
        </Container>
      </Box>

      {/* 2. SERVICES GRID - 2 ROWS x 3 COLUMNS */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  border: service.highlight ? '2px solid' : '1px solid',
                  borderColor: service.highlight ? 'warning.main' : 'divider',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                    borderColor: service.highlight ? 'warning.main' : 'primary.main',
                  },
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                {/* Highlight Badge for HEAT Training */}
                {service.highlight && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'warning.main',
                      color: 'primary.main',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    Specialist
                  </Box>
                )}

                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Avatar
                    sx={{
                      bgcolor: service.highlight ? 'warning.main' : 'primary.light',
                      color: service.highlight ? 'primary.main' : 'white',
                      width: 64,
                      height: 64,
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Avatar>

                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, minHeight: 64 }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Stack spacing={1}>
                    {service.features.map((feature, i) => (
                      <Typography key={i} variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.85rem' }}>
                        <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                        {feature}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. OUR PROCESS (How We Work) */}
      <Box sx={{ bgcolor: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={10}>
            <Typography variant="h2" color="primary" gutterBottom>
              How We Work
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              We don't believe in copy-paste solutions. Our engagement model ensures systems are built for your specific context.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ position: 'relative' }}>
            {/* Connecting Line (Desktop Only) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: 40,
                left: '8%',
                right: '8%',
                height: 2,
                bgcolor: 'divider',
                zIndex: 0,
              }}
            />

            {[
              {
                step: '01',
                title: 'Assess & Audit',
                desc: 'We start by listening. Using our SOCA framework, we identify your risks, gaps, and existing strengths.',
              },
              {
                step: '02',
                title: 'Design & Build',
                desc: 'We co-create frameworks and policies that fit your operations, ensuring they are practical and compliant.',
              },
              {
                step: '03',
                title: 'Embed & Train',
                desc: 'We roll out the systems through training and mentoring, ensuring staff understand and own the process.',
              },
              {
                step: '04',
                title: 'Sustain & Assure',
                desc: 'We provide ongoing support and independent assurance to ensure the systems remain effective over time.',
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ position: 'relative', zIndex: 1 }}>
                <Box textAlign="center">
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      border: '2px solid',
                      borderColor: 'secondary.main',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      boxShadow: 3,
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>
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
          py: 12,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
            Ready to Build a Safer Organization?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, opacity: 0.9 }}>
            Whether you need a policy review or a full systems overhaul, we are ready to help.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="warning"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              boxShadow: 4,
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default ServicesPage;