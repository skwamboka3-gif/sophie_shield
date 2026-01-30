'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    packageInterest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const packages = [
    { value: 'foundation', label: 'Foundation - Start-Up & Readiness' },
    { value: 'strengthen', label: 'Strengthen - Institutional Systems' },
    { value: 'assure', label: 'Assure - Strategic & Donor Support' },
    { value: 'ethics', label: 'Ethics - Corporate & Workplace' },
    { value: 'consultation', label: 'General Consultation' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Django backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        packageInterest: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Box
        className="bg-gradient-to-r from-[#00897b] to-[#1e3a5f] text-white py-20"
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
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          },
        }}
      >
        <Container maxWidth="lg" className="relative z-10">
          <Typography
            variant="h1"
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            sx={{ fontFamily: 'Playfair Display, serif' }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h5"
            className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mx-auto"
            sx={{ fontFamily: 'Source Serif Pro, serif' }}
          >
            Ready to strengthen your safeguarding systems? We're here to help you
            get started.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="py-16">
        <Grid container spacing={8}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card className="shadow-xl border border-gray-100">
              <CardContent className="p-8">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold mb-2 text-[#1e3a5f]"
                  sx={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-600 mb-6"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Fill out the form below and we'll get back to you within 24 hours
                </Typography>

                {submitted && (
                  <Alert severity="success" className="mb-6">
                    Thank you for your message! We'll be in touch soon.
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontFamily: 'Source Serif Pro, serif',
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontFamily: 'Source Serif Pro, serif',
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontFamily: 'Source Serif Pro, serif',
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    select
                    label="Package of Interest"
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontFamily: 'Source Serif Pro, serif',
                      },
                    }}
                  >
                    {packages.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    placeholder="Tell us about your safeguarding needs..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontFamily: 'Source Serif Pro, serif',
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    className="bg-[#00897b] hover:bg-[#00695c] text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <div className="space-y-6">
              {/* Contact Info Card */}
              <Card className="shadow-lg border border-[#00897b]/20">
                <CardContent className="p-8">
                  <Typography
                    variant="h4"
                    className="text-2xl font-bold mb-6 text-[#1e3a5f]"
                    sx={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Contact Information
                  </Typography>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#00897b]/10 p-3 rounded-lg">
                        <EmailIcon sx={{ fontSize: 28, color: '#00897b' }} />
                      </div>
                      <div>
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-gray-700 mb-1"
                          sx={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Email
                        </Typography>
                        <Typography
                          variant="body1"
                          className="text-gray-600"
                          sx={{ fontFamily: 'Source Serif Pro, serif' }}
                        >
                          info@shieldsafeguarding.org
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#00897b]/10 p-3 rounded-lg">
                        <PhoneIcon sx={{ fontSize: 28, color: '#00897b' }} />
                      </div>
                      <div>
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-gray-700 mb-1"
                          sx={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Phone
                        </Typography>
                        <Typography
                          variant="body1"
                          className="text-gray-600"
                          sx={{ fontFamily: 'Source Serif Pro, serif' }}
                        >
                          +254 XXX XXX XXX
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#00897b]/10 p-3 rounded-lg">
                        <LocationOnIcon sx={{ fontSize: 28, color: '#00897b' }} />
                      </div>
                      <div>
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-gray-700 mb-1"
                          sx={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Location
                        </Typography>
                        <Typography
                          variant="body1"
                          className="text-gray-600"
                          sx={{ fontFamily: 'Source Serif Pro, serif' }}
                        >
                          Nairobi, Kenya
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours Card */}
              <Card className="shadow-lg bg-gradient-to-br from-[#1e3a5f] to-[#00897b] text-white">
                <CardContent className="p-8">
                  <Typography
                    variant="h5"
                    className="text-xl font-bold mb-4"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Office Hours
                  </Typography>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Typography
                        variant="body1"
                        sx={{ fontFamily: 'Source Serif Pro, serif' }}
                      >
                        Monday - Friday
                      </Typography>
                      <Typography
                        variant="body1"
                        className="font-semibold"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        9:00 AM - 5:00 PM
                      </Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography
                        variant="body1"
                        sx={{ fontFamily: 'Source Serif Pro, serif' }}
                      >
                        Saturday - Sunday
                      </Typography>
                      <Typography
                        variant="body1"
                        className="font-semibold"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Closed
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Note */}
              <Card className="shadow-lg bg-[#fff8e1] border-l-4 border-[#bf8b2e]">
                <CardContent className="p-6">
                  <Typography
                    variant="body1"
                    className="text-gray-700"
                    sx={{ fontFamily: 'Source Serif Pro, serif' }}
                  >
                    <strong>Note:</strong> We typically respond to all inquiries
                    within 24 hours during business days. For urgent matters, please
                    indicate "Urgent" in your message subject.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Map Placeholder (can be replaced with actual map integration) */}
      <Box className="bg-gray-200 py-16">
        <Container maxWidth="lg">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <LocationOnIcon sx={{ fontSize: 72, color: '#00897b', mb: 2 }} />
                <Typography
                  variant="h5"
                  className="text-gray-600 font-semibold"
                  sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Nairobi, Kenya
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-500 mt-2"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Map integration coming soon
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default ContactPage;