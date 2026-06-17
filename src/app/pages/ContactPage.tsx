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
  Stack,
  Paper,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

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
    { value: 'secure', label: 'Secure - HEAT & EMT Training' },
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
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>

      {/* 1. HERO SECTION */}
      <Box
        sx={{
          background: (theme) => `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 2px, transparent 2px)',
            backgroundSize: '30px 30px',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <Typography variant="h1" sx={{ mb: 3, color: 'white' }}>
            Get In Touch
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', opacity: 0.9, fontWeight: 400 }}>
            Ready to strengthen your safeguarding systems? We're here to help you get started.
          </Typography>
        </Container>
      </Box>

      {/* 2. MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 20 }}>
        <Grid container spacing={4}>

          {/* LEFT: Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Send Us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 4 }}>
                  Thank you for your message! We'll be in touch soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Organization / Company"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    select
                    label="Area of Interest"
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={handleChange}
                    required
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
                    rows={5}
                    placeholder="Tell us about your safeguarding needs..."
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ py: 2, fontSize: '1.1rem', mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>

          {/* RIGHT: Contact Information */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>

              {/* Info Card */}
              <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" color="primary" gutterBottom sx={{ mb: 3 }}>
                    Contact Information
                  </Typography>

                  <Stack spacing={3}>
                    <Box display="flex" gap={2}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'secondary.light', color: 'white' }}>
                        <EmailIcon />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                        <Typography variant="body1" fontWeight={600}>info@shieldsafeguarding.co.ke</Typography>
                      </Box>
                    </Box>

                    <Box display="flex" gap={2}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'secondary.light', color: 'white' }}>
                        <PhoneIcon />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Phone</Typography>
                        <Typography variant="body1" fontWeight={600}>+254 7XX XXX XXX</Typography>
                      </Box>
                    </Box>

                    <Box display="flex" gap={2}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'secondary.light', color: 'white' }}>
                        <LocationOnIcon />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Location</Typography>
                        <Typography variant="body1" fontWeight={600}>Nairobi, Kenya</Typography>
                        <Typography variant="caption" color="text.secondary">Available for global deployment</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card sx={{ borderRadius: 4, boxShadow: 3, bgcolor: 'primary.main', color: 'white' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" gutterBottom color="inherit">
                    Office Hours (EAT)
                  </Typography>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>Monday - Friday</Typography>
                    <Typography variant="body2" fontWeight="bold">9:00 AM - 5:00 PM</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>Weekends</Typography>
                    <Typography variant="body2" fontWeight="bold">Closed</Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Urgent Note */}
              <Alert
                severity="warning"
                variant="filled"
                sx={{ borderRadius: 4, bgcolor: 'warning.main', color: 'primary.main', fontWeight: 500 }}
              >
                For urgent safeguarding incidents, please mark your email subject line with "URGENT".
              </Alert>

            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* 3. MAP PLACEHOLDER */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Paper
          elevation={2}
          sx={{
            height: 400,
            borderRadius: 4,
            overflow: 'hidden',
            bgcolor: 'grey.100',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(/images/map-placeholder.png)', // You can add a static map image here later
            backgroundSize: 'cover'
          }}
        >
          <Box textAlign="center" sx={{ bgcolor: 'rgba(255,255,255,0.9)', p: 4, borderRadius: 4, backdropFilter: 'blur(4px)' }}>
            <LocationOnIcon color="secondary" sx={{ fontSize: 60, mb: 1 }} />
            <Typography variant="h5" color="primary" fontWeight="bold">Nairobi, Kenya</Typography>
            <Typography variant="body2" color="text.secondary">HQ & Training Center</Typography>


            [Image of Nairobi Kenya Map Location]

          </Box>
        </Paper>
      </Container>

    </Box>
  );
};

export default ContactPage;