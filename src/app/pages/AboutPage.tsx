'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Avatar,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';

const AboutPage: React.FC = () => {
  // Data for Core Values
  const coreValues = [
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: 'Dignity',
      description:
        'Survivor wellbeing, guided by local dignity, is at the center of our practice. We honor the humanity and lived experience of those affected.',
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      title: 'Accountability',
      description:
        'Accountability is response, response is action, and action is integrity. We ensure measurable, actionable safeguarding at every level.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
      title: 'Integrity',
      description:
        'Integrity over self-acceptance. Accountability is not convenient. We maintain the highest ethical standards even when challenging.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'Survivor-Centered',
      description:
        'Our approach places survivors at the heart of everything we do, ensuring their voices guide our safeguarding solutions.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Inclusion & Equity',
      description:
        'Inclusive communities are sustainable communities where all can thrive. We promote equitable safeguarding for marginalized groups.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Excellence',
      description:
        'Excellence is not a standard that we reach but the never-ending pursuit to do better. We continuously improve our practice.',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: { xs: 8, md: 14 },
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
            About Shield
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', opacity: 0.9, fontWeight: 400 }}>
            We are a specialist safeguarding consultancy embedding dignity, accountability, and survivor-centered practice in institutions worldwide.
          </Typography>
        </Container>
      </Box>

      {/* 2. VISION & MISSION - ROW 1 (2 cards per row on md+) */}
      <Container maxWidth="lg" sx={{ py: 10, mt: -6, position: 'relative', zIndex: 20 }}>
        <Grid container spacing={4}>
          {/* VISION */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={4}
              sx={{
                height: '100%',
                minHeight: { md: '260px', lg: '280px' },
                borderRadius: 4,
                borderTop: '6px solid',
                borderColor: 'secondary.main',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)' },
                animation: 'fadeInLeft 0.8s ease-out',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 4, lg: 5 } }}>
                <Typography variant="h4" color="primary" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                  Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', lg: '1.1rem' } }}>
                  A world where safeguarding, dignity, and accountability are embedded in every institution and community. Where survivors are heard, protected, and empowered, and where organizations act with integrity and excellence.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* MISSION */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={4}
              sx={{
                height: '100%',
                minHeight: { md: '260px', lg: '280px' },
                borderRadius: 4,
                borderTop: '6px solid',
                borderColor: 'primary.main',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)' },
                animation: 'fadeInRight 0.8s ease-out',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 4, lg: 5 } }}>
                <Typography variant="h4" color="primary" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                  Mission
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', lg: '1.1rem' } }}>
                  We work with humanitarian, development, and private sector organizations to build safeguarding systems rooted in local context and survivor dignity. We provide assessments, policy development, and strategic assurance that enables organizations to create ethical, accountable workplaces.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* 3. IMAGE & WHAT WE BRING - ROW 2 (2 items per row on md+) */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="stretch">
            
            {/* Left: Image Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  minHeight: { md: '400px', lg: '450px' },
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  animation: 'fadeInLeft 0.8s ease-out',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: (theme) => `linear-gradient(to top, ${theme.palette.primary.main}dd, transparent 70%)`,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    color: 'white',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    Who We Are
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.95 }}>
                    Specialist consultancy grounded in survivor-centered practice
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Right: What We Bring Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  minHeight: { md: '400px', lg: '450px' },
                  borderRadius: 4,
                  borderTop: '6px solid',
                  borderColor: 'secondary.main',
                  animation: 'fadeInRight 0.8s ease-out',
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 4, lg: 5 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h4" color="primary" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, mb: 3 }}>
                    What We Bring
                  </Typography>
                  <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', lg: '1rem' } }}>
                      We bring specialist expertise in PSEAH (Prevention of Sexual Exploitation, Abuse, and Harassment), organizational assessments, and strategic assurance to every engagement.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', lg: '1rem' } }}>
                      Our team has direct field experience working with communities and organizations to build safeguarding frameworks that are both effective and culturally sensitive.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', lg: '1rem' } }}>
                      More than technical expertise, we bring a commitment to dignity, integrity, and excellence in everything we do—ensuring that safeguarding is not just a policy, but a lived practice.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* 4. CORE VALUES - 2 ROWS x 3 COLUMNS on md+ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" color="primary" gutterBottom>
            Our Core Values
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            These principles guide every decision we make and every service we deliver.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {coreValues.map((value, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  minHeight: { md: '300px', lg: '320px' },
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6,
                    borderColor: 'secondary.main',
                  },
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 3.5 }, textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'secondary.light',
                      color: 'white',
                      mx: 'auto',
                      mb: 2.5,
                    }}
                  >
                    {value.icon}
                  </Avatar>
                  <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600, mb: 1.5 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. WHY CHOOSE SHIELD - 1 ROW x 3 COLUMNS on md+ */}
      <Box
        sx={{
          background: (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: 'white',
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 6, color: 'white' }}>
            Why Choose Shield
          </Typography>

          <Grid container spacing={4}>
            {/* Expertise */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box 
                textAlign="center"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { md: '280px' },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <VerifiedUserIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Specialist Expertise
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                  Deep knowledge in safeguarding frameworks, PSEAH, and institutional training backed by years of direct field experience.
                </Typography>
              </Box>
            </Grid>

            {/* Survivor-Centered */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box 
                textAlign="center"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { md: '280px' },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Survivor-Centered
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                  We place survivors at the heart of our work, ensuring their voices guide our approach and their dignity remains paramount.
                </Typography>
              </Box>
            </Grid>

            {/* Local Relevance */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box 
                textAlign="center"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { md: '280px' },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <GroupsIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Local Relevance
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                  Safeguarding solutions rooted in local context and culture, ensuring sustainability and genuine community ownership.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Global CSS for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </Box>
  );
};

export default AboutPage;