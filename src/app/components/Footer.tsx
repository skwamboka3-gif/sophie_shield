'use client';

import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5580] to-[#1e3a5f] text-white">
      <Container maxWidth="lg" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#00897b] rounded-lg flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4L4 10V14C4 21.18 8.84 27.62 16 29C23.16 27.62 28 21.18 28 14V10L16 4Z"
                    fill="white"
                    stroke="#00897b"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 16L15 19L21 13"
                    stroke="#00897b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <Typography
                  variant="h6"
                  className="font-bold"
                  sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Shield
                </Typography>
                <Typography
                  variant="caption"
                  className="text-white/80"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Safeguarding & Accountability
                </Typography>
              </div>
            </div>
            <Typography
              variant="body2"
              className="text-white/80 leading-relaxed mb-4"
              sx={{ fontFamily: 'Source Serif Pro, serif' }}
            >
              Embedding dignity, accountability, and safeguarding in institutions
              worldwide.
            </Typography>
            <div className="flex space-x-2">
              <IconButton className="text-white hover:bg-white/10" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton className="text-white hover:bg-white/10" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton className="text-white hover:bg-white/10" size="small">
                <LinkedInIcon />
              </IconButton>
              <IconButton className="text-white hover:bg-white/10" size="small">
                <EmailIcon />
              </IconButton>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 sm:col-span-6 md:col-span-2">
            <Typography
              variant="h6"
              className="font-semibold mb-4"
              sx={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Packages */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <Typography
              variant="h6"
              className="font-semibold mb-4"
              sx={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Our Packages
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/packages/foundation"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Foundation
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/strengthen"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Strengthen
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/assure"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Assure
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/ethics"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 md:col-span-3">
            <Typography
              variant="h6"
              className="font-semibold mb-4"
              sx={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact Us
            </Typography>
            <ul className="space-y-3">
              <li>
                <Typography
                  variant="body2"
                  className="text-white/80"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  <strong>Email:</strong>
                  <br />
                  info@shieldsafeguarding.org
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  className="text-white/80"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  <strong>Phone:</strong>
                  <br />
                  +254 XXX XXX XXX
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  className="text-white/80"
                  sx={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  <strong>Location:</strong>
                  <br />
                  Nairobi, Kenya
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <Box className="border-t border-white/10">
        <Container maxWidth="lg" className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <Typography
                variant="body2"
                className="text-white/70 text-center md:text-left"
                sx={{ fontFamily: 'Source Serif Pro, serif' }}
              >
                © 2026 Shield Safeguarding & Accountability Practice. All rights
                reserved.
              </Typography>
            </div>
            <div>
              <div className="flex justify-center md:justify-end space-x-6">
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;