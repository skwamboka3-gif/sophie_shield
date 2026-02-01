'use client';

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
