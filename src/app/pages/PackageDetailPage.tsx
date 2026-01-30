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
  Chip,
} from '@mui/material';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface PackageData {
  [key: string]: {
    title: string;
    subtitle: string;
    tagline: string;
    color: string;
    gradient: string;
    description: string;
    whoItsFor: string;
    typicalProfile: string[];
    whatThisDelivers: string[];
    outcomes: string;
    coreServices: string[];
  };
}

const PackageDetailPage: React.FC<{ packageId: string }> = ({ packageId }) => {

  const packagesData: PackageData = {
    foundation: {
      title: 'Foundation',
      subtitle: 'Start-Up & Readiness',
      tagline: 'Strong foundations',
      color: '#1e5f8c',
      gradient: 'from-[#1e5f8c] to-[#2d7eb8]',
      description:
        'Safeguarding rooted in dignity and accountability for organizations building their safeguarding infrastructure from the ground up.',
      whoItsFor:
        'Designed for new and emerging organizations that recognize safeguarding must be embedded in their DNA from day one.',
      typicalProfile: [
        'Newly formed organizations (less than 2 years old)',
        'Limited or no formal safeguarding infrastructure',
        'Teams with basic safeguarding awareness but no systematized approach',
        'Organizations seeking donor eligibility',
        'Start-ups preparing for funding applications',
      ],
      whatThisDelivers: [
        'Review policies and framework',
        'Development of SOPs',
        'Preparation of comprehensive PSEA policies',
        'Training and coaching',
        'Procession and implores',
        'Carbine training',
      ],
      outcomes:
        'Safeguarding systems that are functional to ensure awareness and responsiveness that move you to achieve.',
      coreServices: [
        'SOCA (Safeguarding Organizational Capacity Assessment)',
        'Policy framework development tailored to your context',
        'Foundational PSEAH training for all staff',
        'Safeguarding focal point establishment and training',
        'Basic reporting and response mechanisms',
        'Donor compliance documentation',
      ],
    },
    strengthen: {
      title: 'Strengthen',
      subtitle: 'Institutional Systems',
      tagline: 'From policy to practice',
      color: '#00897b',
      gradient: 'from-[#00897b] to-[#26a69a]',
      description:
        'Safeguarding rooted in dignity where organizational leadership are committed to regions stakeholders frameworks.',
      whoItsFor:
        'Typical profiles are humanitarian/development organizations who have any focus on institutional flourishing community maintenance movement to help government matters forwarding.',
      typicalProfile: [
        'Established organizations with existing safeguarding policies',
        'Organizations needing to operationalize draft policies',
        'Institutions requiring systematic implementation coaching',
        'Organizations with safeguarding focal points needing capacity building',
        'Entities seeking to embed safeguarding into organizational culture',
      ],
      whatThisDelivers: [
        'Review assessments and institutional coaching',
        'Continuous case and implores',
        'Baseline immerse case of access',
        'Training and continued of password continuation of',
        'Reports model and issues',
        'Improve over time investment and incensement',
        'Co-required amended',
      ],
      outcomes:
        'Safeguarding investments that are functional in ensure awareness assessments and responsiveness and resume best outcome.',
      coreServices: [
        'Comprehensive safeguarding assessment and gap analysis',
        'Development of detailed SOPs',
        'Case management and response system development',
        'Whistleblowing and reporting mechanisms',
        'Complementary safeguarding protocols (child safeguarding, data protection)',
        'Institutional capacity building and staff training',
        'Coaching and mentorship for safeguarding focal points',
      ],
    },
    assure: {
      title: 'Assure',
      subtitle: 'Strategic & Donor Support',
      tagline: 'Safeguarding you can stand behind',
      color: '#7b1fa2',
      gradient: 'from-[#7b1fa2] to-[#9c27b0]',
      description:
        'Assure your donors that safeguarding is measurable, verifiable action rooted in accountability.',
      whoItsFor:
        'Organizations with established systems needing independent verification, strategic assurance, and donor compliance.',
      typicalProfile: [
        'Mature organizations with operational safeguarding systems',
        'Entities requiring independent audits for donor compliance',
        'Organizations seeking strategic assurance on safeguarding effectiveness',
        'Donors needing third-party verification of grantee safeguarding',
        'Institutions preparing for major funding applications',
      ],
      whatThisDelivers: [
        'Independent safeguarding audits',
        'Assessment and verification of safeguarding systems',
        'Training of senior and adult management',
        'Development of elite risk mitigation strategies',
        'Safeguarding simple to specific ethical returns comprehensive conference and summoning and environmental furthermore',
        'Safeguarding commitment latest issues continuous contention assessments undertake them, plan and customers',
      ],
      outcomes:
        'Safeguarding investments arc are functional to ensure awareness assessments and ensure best secure and secure best outcome.',
      coreServices: [
        'Independent safeguarding audits and compliance verification',
        'Due diligence assessments for donors',
        'Strategic risk mitigation planning',
        'Donor compliance reporting and documentation',
        'Senior leadership training on accountability',
        'Strategic safeguarding consultation',
        'Extended safeguarding assessments',
      ],
    },
    ethics: {
      title: 'Ethics',
      subtitle: 'Corporate & Workplace',
      tagline: 'Ethical workplaces',
      color: '#616161',
      gradient: 'from-[#616161] to-[#757575]',
      description:
        'Ethical workplaces rooted in accountability and committed to transformative culture change.',
      whoItsFor:
        'Private sector organizations committed to embedding ethical practices and addressing workplace risk.',
      typicalProfile: [
        'Corporate entities seeking to embed ethical workplace culture',
        'Organizations addressing workplace harassment and discrimination',
        'Private sector firms committed to culture transformation',
        'Companies seeking to mitigate workplace and reputational risk',
        'Businesses wanting to go beyond compliance to genuine culture change',
      ],
      whatThisDelivers: [
        'Development of ethics policy frameworks',
        'Training on workplace harassment prevention',
        'Development of equity frameworks',
        'Training on anti-password continuation of',
        'Development in daily returns per hundred',
        'Risk mitigation and incident strategies',
      ],
      outcomes:
        'Ethical workplaces where staff feel safe, valued, and empowered to report concerns without fear of retaliation.',
      coreServices: [
        'Workplace culture assessments',
        'Code of conduct development and implementation',
        'Comprehensive ethics training for all staff levels',
        'Whistleblowing mechanism setup and management',
        'Harassment and discrimination prevention programs',
        'Leadership accountability training',
        'Workplace ethics audits',
      ],
    },
  };

  const currentPackage = packageId ? packagesData[packageId] : null;

  if (!currentPackage) {
    return (
      <Container maxWidth="lg" className="py-20 text-center">
        <Typography variant="h3" className="text-gray-600 mb-4">
          Package not found
        </Typography>
        <Button component={Link} href="/packages" variant="contained">
          Back to Packages
        </Button>
      </Container>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Box
        className={`bg-gradient-to-br ${currentPackage.gradient} text-white py-24`}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)',
          },
        }}
      >
        <Container maxWidth="lg" className="relative z-10">
          <Button
            component={Link}
            href="/packages"
            startIcon={<ArrowBackIcon />}
            className="text-white hover:bg-white/10 mb-8"
            sx={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Back to Packages
          </Button>

          <Chip
            label={currentPackage.tagline}
            className="bg-white/20 text-white font-semibold mb-4"
            size="medium"
          />

          <Typography
            variant="h1"
            className="text-5xl md:text-6xl font-bold mb-4"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            {currentPackage.title}
          </Typography>

          <Typography
            variant="h4"
            className="text-2xl md:text-3xl text-white/90 mb-6"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            {currentPackage.subtitle}
          </Typography>

          <Typography
            variant="h6"
            className="text-xl text-white/95 max-w-3xl leading-relaxed"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            {currentPackage.description}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="py-16">
        <Grid container spacing={8}>
          {/* Left Column - Details */}
          <Grid item xs={12} md={8}>
            {/* Who This Is For */}
            <Card className="mb-8 shadow-lg border-l-4" sx={{ borderColor: currentPackage.color }}>
              <CardContent className="p-8">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold mb-4 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Who This Is For
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-700 mb-6 leading-relaxed text-lg"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  {currentPackage.whoItsFor}
                </Typography>

                <Typography
                  variant="h5"
                  className="text-xl font-semibold mb-3 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Typical Profile
                </Typography>
                <ul className="space-y-3">
                  {currentPackage.typicalProfile.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon
                        sx={{
                          color: currentPackage.color,
                          fontSize: 24,
                          mr: 2,
                          mt: 0.3,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        className="text-gray-700"
                        sx={{ fontFamily: 'Source Serif Pro, serif' }}
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What This Package Delivers */}
            <Card className="mb-8 shadow-lg">
              <CardContent className="p-8">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold mb-6 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  What This Package Delivers
                </Typography>
                <Grid container spacing={3}>
                  {currentPackage.whatThisDelivers.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <div className="flex items-start">
                        <CheckCircleIcon
                          sx={{
                            color: currentPackage.color,
                            fontSize: 24,
                            mr: 2,
                            mt: 0.3,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body1"
                          className="text-gray-700"
                          sx={{ fontFamily: 'Source Serif Pro, serif' }}
                        >
                          {item}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Core Services */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold mb-6 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Core Services
                </Typography>
                <ul className="space-y-4">
                  {currentPackage.coreServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon
                        sx={{
                          color: currentPackage.color,
                          fontSize: 24,
                          mr: 2,
                          mt: 0.3,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        className="text-gray-700 text-lg"
                        sx={{ fontFamily: 'Source Serif Pro, serif' }}
                      >
                        {service}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Sidebar */}
          <Grid item xs={12} md={4}>
            {/* The Outcome */}
            <Card
              className="mb-6 shadow-xl"
              sx={{
                background: `linear-gradient(135deg, ${currentPackage.color} 0%, ${currentPackage.color}dd 100%)`,
                color: 'white',
              }}
            >
              <CardContent className="p-8">
                <Typography
                  variant="h4"
                  className="text-2xl font-bold mb-4"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  The Outcome
                </Typography>
                <Typography
                  variant="body1"
                  className="leading-relaxed text-lg"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  {currentPackage.outcomes}
                </Typography>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="shadow-xl border-2 border-[#bf8b2e]">
              <CardContent className="p-8 text-center">
                <Typography
                  variant="h5"
                  className="text-xl font-bold mb-4 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Ready to get started?
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600 mb-6"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Contact us to discuss how this package can be tailored to your
                  organization's needs.
                </Typography>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  fullWidth
                  size="large"
                  className="bg-[#bf8b2e] hover:bg-[#d4a857] text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            {/* Other Packages */}
            <Card className="mt-6 shadow-lg">
              <CardContent className="p-6">
                <Typography
                  variant="h6"
                  className="font-semibold mb-4 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Explore Other Packages
                </Typography>
                <div className="space-y-3">
                  {Object.entries(packagesData)
                    .filter(([key]) => key !== packageId)
                    .map(([key, pkg]) => (
                      <Button
                        key={key}
                        component={Link}
                        href={`/packages/${key}`}
                        variant="outlined"
                        fullWidth
                        sx={{
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                          borderColor: pkg.color,
                          color: pkg.color,
                          '&:hover': {
                            borderColor: pkg.color,
                            backgroundColor: `${pkg.color}10`,
                          },
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        {pkg.title}
                      </Button>
                    ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PackageDetailPage;