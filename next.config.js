const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false, // Always enable PWA, even in development
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://translate.google.com https://translate.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://translate.googleapis.com https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://translate.google.com https://translate.googleapis.com https://www.gstatic.com https://lh3.googleusercontent.com",
              "font-src 'self' https://fonts.gstatic.com https://translate.googleapis.com",
              "frame-src 'self' https://translate.google.com",
              "connect-src 'self' https://translate.googleapis.com https://www.google-analytics.com",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
