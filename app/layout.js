'use client'

import './globals.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Space_Grotesk } from 'next/font/google';

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
});

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: [
        space_grotesk.style.fontFamily,
        'sans-serif',
      ].join(','),
    },
  }),
);

const metadata = {
  title: 'So long...',
  description: 'It was a nice journey with you, but now it is time to say goodbye.',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="/dept_commerce.png" />
          <meta property="og:url" content="https://tracker.milklegend.xyz" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={metadata.title} />
          <meta property="og:locale" content="en_US" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:title" content={metadata.title} />
          <meta property="twitter:description" content={metadata.description} />
          <meta property="twitter:image" content="/dept_commerce.png" />
          <meta name="description" content={metadata.description} />
        </head>

        <body className={space_grotesk.variable}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
