'use client';

import React from 'react';
import {
  Container,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import Link from 'next/link';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';

const HomePage: React.FC = () => {
  const packages = [
    {
      id: 'foundation',
      title: 'Foundation',
      subtitle: 'Start-Up & Readiness',
      tagline: 'Strong foundations',
      description: 'Safeguarding rooted in dignity. Accountability in practice.',
      color: '#1e5f8c',
      gradient: 'from-[#1e5f8c] to-[#2d7eb8]',
    },
    {
      id: 'strengthen',
      title: 'Strengthen',
      subtitle: 'Institutional Systems',
      tagline: 'From policy to practice',
      description: 'Safeguarding rooted in dignity. Accountability in practice.',
      color: '#00897b',
      gradient: 'from-[#00897b] to-[#26a69a]',
    },
    {
      id: 'assure',
      title: 'Assure',
      subtitle: 'Strategic & Donor Support',
      tagline: 'Safeguarding you can stand behind',
      description: 'Safeguarding foreseen. Assure action in practice.',
      color: '#7b1fa2',
      gradient: 'from-[#7b1fa2] to-[#9c27b0]',
    },
    {
      id: 'ethics',
      title: 'Ethics',
      subtitle: 'Corporate & Workplace',
      tagline: 'Ethical workplaces',
      description: 'Safeguarding rooted in accountability in practice.',
      color: '#616161',
      gradient: 'from-[#616161] to-[#757575]',
    },
  ];

  const whyPartner = [
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 48, color: '#00897b' }} />,
      title: 'Dignity',
      description: 'We root solutions in dignity, respecting the humanity and lived experience of survivors.',
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 48, color: '#00897b' }} />,
      title: 'Accountability',
      description: 'Safeguarding systems that work are built on accountability at every level of leadership.',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 48, color: '#00897b' }} />,
      title: 'Global Partner',
      description: 'Grounded in local contexts with international expertise for sustainable safeguarding solutions.',
    },
  ];

  const coreValues = [
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: 'Dignity',
      description: 'Survivor wellbeing, guided by local dignity, is the center of their practice.',
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      title: 'Accountability',
      description: 'Accountability is response, response is action, and action is integrity.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
      title: 'Integrity',
      description: 'Integrity over self-acceptance. Accountability is not convenient.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Inclusion & Equity',
      description: 'Inclusive communities are sustainable communities where all can thrive.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Excellence',
      description: 'Excellence is not a standard that we reach but the never-ending pursuit to do better.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Box
        className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5580] to-[#1e3a5f] text-white overflow-hidden"
        sx={{
          minHeight: { xs: '600px', md: '700px' },
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(0,137,123,0.3) 0%, transparent 50%)`,
          }} />
        </div>

        <Container maxWidth="lg" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[600px] md:min-h-[700px]">
            <div className="col-span-1 md:col-span-7">
              <div className="space-y-6 py-12 animate-fade-in">
                <Typography
                  variant="h1"
                  className="text-5xl md:text-6xl font-bold leading-tight"
                  sx={{
                    fontFamily: 'Playfair Display, serif',
                    animation: 'slideInLeft 0.8s ease-out',
                  }}
                >
                  Safeguarding rooted in dignity.
                  <br />
                  <span className="text-[#26a69a]">Accountability lived in practice.</span>
                </Typography>

                <Typography
                  variant="h5"
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                  sx={{
                    fontFamily: 'Source Serif Pro, serif',
                    animation: 'slideInLeft 0.8s ease-out 0.2s backwards',
                  }}
                >
                  A world where safeguarding, dignity, and accountability are embedded in every institution.
                </Typography>

                <Box
                  className="flex flex-wrap gap-4 pt-4"
                  sx={{ animation: 'slideInLeft 0.8s ease-out 0.4s backwards' }}
                >
                  <Button
                    component={Link}
                    href="/packages"
                    variant="contained"
                    size="large"
                    className="bg-[#bf8b2e] hover:bg-[#d4a857] text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Our Signature Packages
                  </Button>
                  <Button
                    component={Link}
                    href="/about"
                    variant="outlined"
                    size="large"
                    className="border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-4 text-lg transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Box>
              </div>
            </div>

            <div className="col-span-1 md:col-span-5">
              <div
                className="relative"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
                    alt="Professional woman in business attire"
                    className="rounded-xl w-full h-auto shadow-2xl"
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>

      {/* Why Partner With Us */}
      <Container maxWidth="lg" className="py-20">
        <Typography
          variant="h2"
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e3a5f]"
          sx={{ fontFamily: 'Playfair Display, serif' }}
        >
          Why Partner With Us
        </Typography>
        <Typography
          variant="body1"
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          We bring specialist expertise grounded in survivor-centered practice and local relevance
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyPartner.map((item, index) => (
            <div key={index}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                sx={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s backwards`,
                }}
              >
                <CardContent className="text-center p-8">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <Typography
                    variant="h5"
                    className="font-semibold mb-3 text-[#1e3a5f]"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-gray-600"
                    sx={{ fontFamily: 'Source Serif Pro, serif' }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Our Four Packages */}
      <Box className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e3a5f]"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Four Signature Packages
          </Typography>
          <Typography
            variant="body1"
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Tailored safeguarding solutions for every stage of your organization's journey
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div key={pkg.id}>
                <Card
                  className={`h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden group relative`}
                  sx={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                  }}
                  component={Link}
                  href={`/packages/${pkg.id}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} transition-transform duration-500 group-hover:scale-110`} />
                  
                  <CardContent className="relative z-10 p-6 h-full flex flex-col text-white">
                    <Typography
                      variant="h5"
                      className="font-bold mb-2"
                      sx={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {pkg.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-white/90 mb-4 text-sm"
                      sx={{ fontFamily: 'Source Serif Pro, serif' }}
                    >
                      {pkg.subtitle}
                    </Typography>
                    <div className="h-px bg-white/30 my-4" />
                    <Typography
                      variant="body2"
                      className="text-white/95 flex-grow"
                      sx={{ fontFamily: 'Source Serif Pro, serif', lineHeight: 1.6 }}
                    >
                      {pkg.description}
                    </Typography>
                    <Button
                      variant="contained"
                      className="mt-6 bg-[#bf8b2e] hover:bg-[#d4a857] text-white w-full shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* Core Values Preview */}
      <Container maxWidth="lg" className="py-20">
        <Typography
          variant="h2"
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e3a5f]"
          sx={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Core Values
        </Typography>
        <Typography
          variant="body1"
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          The principles that guide everything we do
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.slice(0, 3).map((value, index) => (
            <div key={index}>
              <Card
                className="h-full hover:shadow-xl transition-all duration-300 border border-[#00897b]/20"
                sx={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s backwards`,
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-[#00897b] flex justify-center">{value.icon}</div>
                  <Typography
                    variant="h6"
                    className="font-semibold mb-3 text-[#1e3a5f]"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600"
                    sx={{ fontFamily: 'Source Serif Pro, serif' }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <Box className="text-center mt-12">
          <Button
            component={Link}
            href="/about"
            variant="outlined"
            size="large"
            className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-3 text-lg transition-all duration-300"
          >
            Learn More About Shield
          </Button>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box className="bg-gradient-to-r from-[#1e3a5f] to-[#00897b] text-white py-20">
        <Container maxWidth="md" className="text-center">
          <Typography
            variant="h3"
            className="text-3xl md:text-4xl font-bold mb-6"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ready to strengthen your safeguarding systems?
          </Typography>
          <Typography
            variant="body1"
            className="text-xl mb-8 text-white/90"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            Let's work together to create safeguarding systems rooted in dignity and accountability
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            className="bg-[#bf8b2e] hover:bg-[#d4a857] text-white px-12 py-4 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </Container>
      </Box>

      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

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

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;