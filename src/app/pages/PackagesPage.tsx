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

interface Package {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  color: string;
  gradient: string;
  description: string;
  whoItsFor: string[];
  typicalProfile: string[];
  keyOutcomes: string[];
  coreServices: string[];
}

const PackagesPage: React.FC = () => {
  const packages: Package[] = [
    {
      id: 'foundation',
      title: 'Foundation',
      subtitle: 'Start-Up & Readiness',
      tagline: 'Strong foundations',
      color: '#1e5f8c',
      gradient: 'from-[#1e5f8c] to-[#2d7eb8]',
      description: 'Safeguarding rooted in dignity enter drives and residential for success this entry level humanitarian.',
      whoItsFor: [
        'New organizations that recognize safeguarding must be part of their DNA',
        'Start-ups seeking to establish credible systems from day one',
        'Organizations preparing for funding applications that require safeguarding credentials',
      ],
      typicalProfile: [
        'Newly formed organizations (less than 2 years old)',
        'Limited or no formal safeguarding infrastructure',
        'Teams with basic safeguarding awareness but no systematized approach',
        'Organizations seeking donor eligibility',
      ],
      keyOutcomes: [
        'Development of SOPs',
        'Preparation of comprehensive PSEA policies',
        'Comprehensive safeguarding needs assessment',
        'Development of core safeguarding documents',
      ],
      coreServices: [
        'SOCA (Safeguarding Organizational Capacity Assessment)',
        'Policy framework development',
        'Foundational training',
        'Safeguarding focal point establishment',
      ],
    },
    {
      id: 'strengthen',
      title: 'Strengthen',
      subtitle: 'Institutional Systems',
      tagline: 'From policy to practice',
      color: '#00897b',
      gradient: 'from-[#00897b] to-[#26a69a]',
      description: 'Safeguarding rooted in dignity enter organizational leadership and residential cooperation commitment to regions stakeholders frameworks.',
      whoItsFor: [
        'Typical profiles are humanitarian/development organizations who have any funding on humanitarian sector community',
        'Organizations that have received grants and are committed to regions stakeholders frameworks',
        'Safeguarding embedded institutional safeguarding systems',
      ],
      typicalProfile: [
        'Development of SOPs',
        'Comprehensive policies on accountability',
        'Implementation of safeguarding mechanisms',
        'Training for staff on response protocols',
      ],
      keyOutcomes: [
        'Developed safeguarding implementation plan',
        'Training of staff and leadership',
        'Improved case management and response systems',
        'Strengthened institutional safeguarding culture',
      ],
      coreServices: [
        'Review policies and frameworks',
        'Development of SOPs',
        'Case management systems',
        'Process and whistle-blowing mechanisms',
        'Development of complementary safeguarding protocols',
        'Comprehensive institutional training',
      ],
    },
    {
      id: 'assure',
      title: 'Assure',
      subtitle: 'Strategic & Donor Support',
      tagline: 'Safeguarding you can stand behind',
      color: '#7b1fa2',
      gradient: 'from-[#7b1fa2] to-[#9c27b0]',
      description: 'Assure your donors that safeguarding is measurable action in practice.',
      whoItsFor: [
        'Organizations with established systems needing donor compliance verification',
        'Mature organizations seeking strategic assurance',
        'Donors who need independent audit of grantees',
      ],
      typicalProfile: [
        'Experienced institutional safeguarding systems',
        'Demonstrated track record in safeguarding',
        'Seeking assurance on compliance and implementation',
      ],
      keyOutcomes: [
        'Independent safeguarding audits',
        'Assessment and verification of systems',
        'Training of senior management',
        'Development of risk mitigation strategies',
      ],
      coreServices: [
        'Independent safeguarding audits',
        'Due diligence assessments',
        'Risk mitigation planning',
        'Donor compliance reporting',
        'Strategic safeguarding consultation',
        'We also conduct extended safeguarding',
      ],
    },
    {
      id: 'ethics',
      title: 'Ethics',
      subtitle: 'Corporate & Workplace',
      tagline: 'Ethical workplaces',
      color: '#616161',
      gradient: 'from-[#616161] to-[#757575]',
      description: 'Ethical workplaces that are committed to culture change.',
      whoItsFor: [
        'Private sector organizations committed to ethical workplace culture',
        'Corporations seeking to mitigate workplace risk',
        'Organizations addressing workplace harassment',
      ],
      typicalProfile: [
        'Corporate entities with workplace ethics concerns',
        'Organizations seeking to embed ethical practices',
        'Private sector committed to culture change',
      ],
      keyOutcomes: [
        'Development of codes of conduct',
        'Training on workplace ethics',
        'Development of ethics frameworks',
        'Risk mitigation strategies',
      ],
      coreServices: [
        'Workplace culture assessments',
        'Code of conduct development',
        'Ethics training for all levels',
        'Whistleblowing mechanism setup',
        'Harassment prevention programs',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Box
        className="bg-gradient-to-r from-[#1e3a5f] to-[#00897b] text-white py-20"
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
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          },
        }}
      >
        <Container maxWidth="lg" className="relative z-10">
          <Typography
            variant="h1"
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            Signature Packages
          </Typography>
          <Typography
            variant="h5"
            className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mx-auto"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            Four pathways to embed safeguarding, dignity, and accountability in your organization
          </Typography>
        </Container>
      </Box>

      {/* Packages Grid */}
      <Container maxWidth="xl" className="py-16">
        <Grid container spacing={4}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} md={6} lg={3} key={pkg.id}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
                sx={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                  border: `2px solid ${pkg.color}20`,
                }}
              >
                {/* Header with gradient */}
                <Box
                  className={`bg-gradient-to-br ${pkg.gradient} text-white p-6`}
                  sx={{ minHeight: '180px' }}
                >
                  <Typography
                    variant="h4"
                    className="font-bold mb-2"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {pkg.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-white/90 mb-3"
                    sx={{ fontFamily: 'Source Serif Pro, serif', fontSize: '0.95rem' }}
                  >
                    {pkg.subtitle}
                  </Typography>
                  <Chip
                    label={pkg.tagline}
                    className="bg-white/20 text-white font-semibold"
                    size="small"
                  />
                </Box>

                <CardContent className="flex-grow p-6">
                  <Typography
                    variant="body2"
                    className="text-gray-600 mb-6 leading-relaxed"
                    sx={{ fontFamily: 'Source Serif Pro, serif' }}
                  >
                    {pkg.description}
                  </Typography>

                  <div className="space-y-4">
                    <div>
                      <Typography
                        variant="subtitle2"
                        className="font-semibold mb-2 text-[#1e3a5f] uppercase tracking-wide text-xs"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Who It's For
                      </Typography>
                      <ul className="space-y-1">
                        {pkg.whoItsFor.slice(0, 2).map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <CheckCircleIcon
                              sx={{ fontSize: 16, color: pkg.color, mr: 1, mt: 0.3, flexShrink: 0 }}
                            />
                            <span style={{ fontFamily: 'Source Serif Pro, serif' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Typography
                        variant="subtitle2"
                        className="font-semibold mb-2 text-[#1e3a5f] uppercase tracking-wide text-xs"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Key Outcomes
                      </Typography>
                      <ul className="space-y-1">
                        {pkg.keyOutcomes.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <CheckCircleIcon
                              sx={{ fontSize: 16, color: pkg.color, mr: 1, mt: 0.3, flexShrink: 0 }}
                            />
                            <span style={{ fontFamily: 'Source Serif Pro, serif' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>

                <Box className="p-6 pt-0">
                  <Button
                    component={Link}
                    href={`/packages/${pkg.id}`}
                    variant="contained"
                    fullWidth
                    className="text-white shadow-md hover:shadow-lg transition-all duration-300"
                    sx={{
                      bgcolor: pkg.color,
                      '&:hover': {
                        bgcolor: pkg.color,
                        filter: 'brightness(1.1)',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Comparison Table Section */}
      <Box className="bg-white py-16">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1e3a5f]"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            Choose Your Path
          </Typography>
          <Typography
            variant="body1"
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            Each package is designed for organizations at different stages of their safeguarding journey
          </Typography>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a5f] to-[#00897b] text-white">
                  <th className="p-4 text-left font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Feature
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.id}
                      className="p-4 text-center font-semibold"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {pkg.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Organization Stage</td>
                  <td className="p-4 text-center text-sm">Start-up / New</td>
                  <td className="p-4 text-center text-sm">Growing / Developing</td>
                  <td className="p-4 text-center text-sm">Mature / Established</td>
                  <td className="p-4 text-center text-sm">Corporate / Private</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">SOCA Assessment</td>
                  <td className="p-4 text-center">
                    <CheckCircleIcon sx={{ color: '#1e5f8c' }} />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircleIcon sx={{ color: '#00897b' }} />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircleIcon sx={{ color: '#7b1fa2' }} />
                  </td>
                  <td className="p-4 text-center text-gray-400">—</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Policy Development</td>
                  <td className="p-4 text-center">
                    <CheckCircleIcon sx={{ color: '#1e5f8c' }} />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircleIcon sx={{ color: '#00897b' }} />
                  </td>
                  <td className="p-4 text-center text-sm">Review</td>
                  <td className="p-4 text-center">
                    <CheckCircleIcon sx={{ color: '#616161' }} />
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Training Programs</td>
                  <td className="p-4 text-center text-sm">Basic</td>
                  <td className="p-4 text-center text-sm">Comprehensive</td>
                  <td className="p-4 text-center text-sm">Advanced</td>
                  <td className="p-4 text-center text-sm">Specialized</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Independent Audit</td>
                  <td className="p-4 text-center text-gray-400">—</td>
                  <td className="p-4 text-center text-gray-400">—</td>
                  <td className="p-4 text-center">
                    <CheckCircleIcon sx={{ color: '#7b1fa2' }} />
                  </td>
                  <td className="p-4 text-center text-gray-400">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="bg-gradient-to-r from-[#00897b] to-[#1e3a5f] text-white py-16">
        <Container maxWidth="md" className="text-center">
          <Typography
            variant="h3"
            className="text-3xl md:text-4xl font-bold mb-6"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            Not sure which package is right for you?
          </Typography>
          <Typography
            variant="body1"
            className="text-xl mb-8 text-white/90"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            Schedule a consultation and we'll help you identify the best pathway for your organization
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            className="bg-[#bf8b2e] hover:bg-[#d4a857] text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Schedule Consultation
          </Button>
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
        `}
      </style>
    </div>
  );
};

export default PackagesPage;