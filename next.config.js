const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",

              // Google Translate loads scripts from multiple subdomains
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'" +
                " https://translate.google.com" +
                " https://translate.googleapis.com" +
                " https://translate-pa.googleapis.com" +
                " https://www.gstatic.com" +
                " https://www.googletagmanager.com" +
                " https://www.google-analytics.com",

              // Translate injects a <link> stylesheet from translate.googleapis.com
              "style-src 'self' 'unsafe-inline'" +
                " https://translate.googleapis.com" +
                " https://translate-pa.googleapis.com" +
                " https://fonts.googleapis.com" +
                " https://www.gstatic.com",

              // Flag sprites and UI icons come from ssl.gstatic.com
              "img-src 'self' data: blob:" +
                " https://translate.google.com" +
                " https://translate.googleapis.com" +
                " https://translate-pa.googleapis.com" +
                " https://www.gstatic.com" +
                " https://ssl.gstatic.com" +
                " https://lh3.googleusercontent.com" +
                " https://images.unsplash.com",

              "font-src 'self'" +
                " https://fonts.gstatic.com" +
                " https://translate.googleapis.com",

              // The widget renders inside a sandboxed iframe
              "frame-src 'self'" +
                " https://translate.google.com" +
                " https://translate.googleapis.com" +
                " https://translate-pa.googleapis.com",

              // XHR/fetch calls go to translate-pa.googleapis.com (newer API)
              // as well as the classic translate.googleapis.com endpoint
              "connect-src 'self'" +
                " https://translate.googleapis.com" +
                " https://translate-pa.googleapis.com" +
                " https://translate.google.com" +
                " https://www.googleapis.com" +
                " https://www.google-analytics.com",

              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;