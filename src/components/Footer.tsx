'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GOOGLE_REVIEWS_SUMMARY } from '@/data/googleReviews'
import GoogleTranslate from '@/components/GoogleTranslate'

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0f1e3d] text-white relative text-[16px]">

      {/* Gold accent line */}
      <div className="w-full h-[1px] bg-[#b8845c]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* LOGO — centered, Kempinski-style */}
        <div className="flex justify-center pt-16 pb-14">
          <Link href="/" className="inline-block">
            <div className="w-96 h-44 relative">
              <Image
                src="/logo.png"
                alt="My Space Furniture Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </Link>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 mb-14" />

        {/* FOUR-COLUMN GRID — Kempinski layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">

          {/* COL 1 — Navigate */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#b8845c] mb-7 font-mulish">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Financing', href: '/financing' },
                { label: 'FAQs', href: '/faq' },
                { label: 'Contact Us', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[18px] font-playfair text-white/80 hover:text-[#e5c7a0] tracking-wide transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 2 — Collections */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#b8845c] mb-7 font-mulish">
              Collections
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Mattresses', href: '/mattresses' },
                { label: 'Bedroom Sets', href: '/bedroom-sets' },
                { label: 'Dining Tables', href: '/dining-tables' },
                { label: 'Sofas & Loveseats', href: '/loveseats' },
                { label: 'Leather Sectionals', href: '/leather-sectionals' },
                { label: 'Fabric Sectionals', href: '/fabric-sectionals' },
                { label: 'Bunk Beds', href: '/bunk-beds' },
                { label: 'Vanities', href: '/vanities' },
                { label: 'Custom Furniture', href: '/custom-furniture' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[18px] font-playfair text-white/80 hover:text-[#e5c7a0] tracking-wide transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#b8845c] mb-7 font-mulish">
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+19166611073"
                  className="flex items-start gap-3 text-[18px] font-playfair text-white/80 hover:text-[#e5c7a0] tracking-wide transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5 mt-0.5 text-[#b8845c] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (916) 661-1073
                </a>
              </li>
              <li>
                <a
                  href="tel:+19169940612"
                  className="flex items-start gap-3 text-[18px] font-playfair text-white/80 hover:text-[#e5c7a0] tracking-wide transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5 mt-0.5 text-[#b8845c] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (916) 994-0612
                </a>
              </li>
              <li>
                <a
                  href="mailto:myyspacefurniture@gmail.com"
                  className="flex items-start gap-3 text-[18px] font-playfair text-white/80 hover:text-[#e5c7a0] tracking-wide transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5 mt-0.5 text-[#b8845c] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  myyspacefurniture@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/MyySpace+Furniture+%26+Mattress/@38.7465805,-121.2606694,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[18px] font-playfair text-white/80 hover:text-[#e5c7a0] tracking-wide transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5 mt-0.5 text-[#b8845c] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>1811 Douglas Blvd<br />Roseville, CA 95661</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4 — Follow & Reviews */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#b8845c] mb-7 font-mulish">
              Follow Us
            </h4>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-10">
              <a
                href="https://www.facebook.com/Myyspacefurniture/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#b8845c] hover:text-[#e5c7a0] transition-all duration-300 text-[22px]"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/myyspacefurniture/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#b8845c] hover:text-[#e5c7a0] transition-all duration-300 text-[22px]"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={GOOGLE_REVIEWS_SUMMARY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#b8845c] transition-all duration-300 text-[22px]"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </a>
            </div>

            {/* Google Reviews badge removed from here */}
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* BOTTOM BAR — copyright · translate · back to top */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-5">

          <div className="flex flex-col items-center w-full gap-4">
            <p className="text-[15px] font-mulish tracking-[0.15em] text-white/30 uppercase text-center">
              © {year} My Space Furniture. All rights reserved.
            </p>
            {/* Google Reviews badge moved here */}
            <a
              href={GOOGLE_REVIEWS_SUMMARY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col gap-1 text-[18px] items-center mt-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-white font-playfair font-semibold text-lg leading-none">
                  {GOOGLE_REVIEWS_SUMMARY.averageRating.toFixed(1)}
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-[12px] font-mulish text-white/40 group-hover:text-[#e5c7a0] transition-colors duration-300">
                {GOOGLE_REVIEWS_SUMMARY.totalReviews} Google Reviews →
              </span>
            </a>
            <div className="flex items-center gap-3 text-white/30 justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
              <GoogleTranslate />
            </div>
            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/30 hover:text-[#b8845c] transition-colors duration-300 justify-center"
              aria-label="Back to top"
            >
              <span className="text-[12px] uppercase tracking-[0.2em] font-mulish">Back to top</span>
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M16 24 L16 10" className="text-white/25 group-hover:text-[#b8845c] transition-colors duration-300" />
                <path d="M10 16 L16 10 L22 16" className="text-white/25 group-hover:text-[#b8845c] transition-colors duration-300" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}