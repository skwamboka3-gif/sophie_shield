import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      icon: <FavoriteIcon sx={{ fontSize: 56, color: '#00897b' }} />,
      title: 'Dignity',
      description:
        'Survivor wellbeing, guided by local dignity, is at the center of our practice. We honor the humanity and lived experience of those affected.',
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 56, color: '#00897b' }} />,
      title: 'Accountability',
      description:
        'Accountability is response, response is action, and action is integrity. We ensure measurable, actionable safeguarding at every level.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 56, color: '#00897b' }} />,
      title: 'Integrity',
      description:
        'Integrity over self-acceptance. Accountability is not convenient. We maintain the highest ethical standards even when challenging.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 56, color: '#00897b' }} />,
      title: 'Survivor-Centered Practice',
      description:
        'Our approach places survivors at the heart of everything we do, ensuring their voices guide our safeguarding solutions.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 56, color: '#00897b' }} />,
      title: 'Inclusion & Equity',
      description:
        'Inclusive communities are sustainable communities where all can thrive. We promote equitable safeguarding for marginalized groups.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 56, color: '#00897b' }} />,
      title: 'Excellence',
      description:
        'Excellence is not a standard that we reach but the never-ending pursuit to do better. We continuously improve our practice.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Box
        className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5580] to-[#00897b] text-white py-24"
        sx={{
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          },
        }}
      >
        <Container maxWidth="lg" className="relative z-10">
          <Typography
            variant="h1"
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Shield
          </Typography>
          <Typography
            variant="h5"
            className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mx-auto leading-relaxed"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            We are a specialist safeguarding consultancy embedding dignity,
            accountability, and survivor-centered practice in institutions worldwide
          </Typography>
        </Container>
      </Box>

      {/* Vision & Mission */}
      <Container maxWidth="lg" className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card
              className="h-full hover:shadow-2xl transition-all duration-500 border-t-4 border-[#00897b]"
              sx={{ animation: 'fadeInLeft 0.8s ease-out' }}
            >
              <CardContent className="p-8">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold mb-4 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Vision
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-700 leading-relaxed text-lg"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  A world where safeguarding, dignity, and accountability are
                  embedded in every institution and community. Where survivors are
                  heard, protected, and empowered, and where organizations act with
                  integrity and excellence.
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card
              className="h-full hover:shadow-2xl transition-all duration-500 border-t-4 border-[#1e3a5f]"
              sx={{ animation: 'fadeInRight 0.8s ease-out' }}
            >
              <CardContent className="p-8">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold mb-4 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Mission
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-700 leading-relaxed text-lg"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  We work with humanitarian, development, and private sector
                  organizations to build safeguarding systems rooted in local
                  context and survivor dignity. We provide assessments, policy
                  development, training, and strategic assurance that enables
                  organizations to protect those they serve and create ethical,
                  accountable workplaces.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      {/* Who We Are */}
      <Box className="bg-white py-20">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ animation: 'fadeInLeft 0.8s ease-out' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto"
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent" />
              </div>
            </div>

            <div>
              <div style={{ animation: 'fadeInRight 0.8s ease-out' }}>
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl font-bold mb-6 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Who We Are
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-700 mb-4 leading-relaxed text-lg"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Shield Safeguarding & Accountability Practice is a specialist
                  consultancy grounded in survivor-centered practice and local
                  context. We work across humanitarian, development, and corporate
                  sectors to embed safeguarding systems that are not just
                  compliant, but transformative.
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-700 mb-4 leading-relaxed text-lg"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Our approach recognizes that effective safeguarding cannot be
                  imported wholesale from external contexts. It must be rooted in
                  local dignity, responsive to community needs, and built on
                  genuine accountability at every level of leadership.
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-700 leading-relaxed text-lg"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  We bring specialist expertise in PSEAH (Prevention of Sexual
                  Exploitation, Abuse, and Harassment), organizational assessments,
                  policy development, institutional training, and strategic
                  assurance. But more than that, we bring a commitment to dignity,
                  integrity, and excellence in everything we do.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Box>

      {/* Core Values */}
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
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg"
          sx={{ fontFamily: 'Source Serif Pro, serif' }}
        >
          These principles guide every decision we make and every service we deliver
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#00897b]/20"
                sx={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <Typography
                    variant="h5"
                    className="font-bold mb-4 text-[#1e3a5f]"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-gray-600 leading-relaxed"
                    sx={{ fontFamily: 'Source Serif Pro, serif' }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Why Choose Shield */}
      <Box className="bg-gradient-to-r from-[#1e3a5f] to-[#00897b] text-white py-20">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Choose Shield
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <VerifiedUserIcon sx={{ fontSize: 48 }} />
              </div>
              <Typography
                variant="h5"
                className="font-semibold mb-3"
                sx={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Specialist Expertise
              </Typography>
              <Typography
                variant="body1"
                className="text-white/90 leading-relaxed"
                sx={{ fontFamily: 'Source Serif Pro, serif' }}
              >
                Deep knowledge in safeguarding frameworks, PSEAH, organizational
                assessments, and institutional training backed by years of
                field experience.
              </Typography>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FavoriteIcon sx={{ fontSize: 48 }} />
              </div>
              <Typography
                variant="h5"
                className="font-semibold mb-3"
                sx={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Survivor-Centered
              </Typography>
              <Typography
                variant="body1"
                className="text-white/90 leading-relaxed"
                sx={{ fontFamily: 'Source Serif Pro, serif' }}
              >
                We place survivors at the heart of our work, ensuring their
                voices guide our approach and their dignity remains paramount.
              </Typography>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <GroupsIcon sx={{ fontSize: 48 }} />
              </div>
              <Typography
                variant="h5"
                className="font-semibold mb-3"
                sx={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Local Relevance
              </Typography>
              <Typography
                variant="body1"
                className="text-white/90 leading-relaxed"
                sx={{ fontFamily: 'Source Serif Pro, serif' }}
              >
                Safeguarding solutions rooted in local context and culture,
                ensuring sustainability and genuine community ownership.
              </Typography>
            </div>
          </div>
        </Container>
      </Box>

      <style>
        {`
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

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;