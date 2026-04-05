'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuContentRef = useRef<HTMLDivElement>(null);

  // Handle scroll for transparent header
  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isTransparent = transparent && !scrolled;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/loveseats', label: 'Sofas & Loveseats' },
    { href: '/bedroom-sets', label: 'Bedroom Sets' },
    { href: '/dining-tables', label: 'Dining Tables' },
    { href: '/leather-sectionals', label: 'Leather Sectionals' },
    { href: '/fabric-sectionals', label: 'Fabric Sectionals' },
    { href: '/mattresses', label: 'Mattresses' },
    { href: '/vanities', label: 'Vanities' },
    { href: '/bunk-beds', label: 'Bunk Beds' },
    { href: '/custom-furniture', label: 'Custom Furniture' },
    { href: '/financing', label: 'Financing' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-500 ${
          transparent ? 'fixed top-0 left-0 right-0' : 'sticky top-0'
        } ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        {/* Top accent line */}
        <div className={`h-[2px] transition-colors duration-500 ${isTransparent ? 'bg-white/20' : 'bg-[#b8845c]'}`} />

        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 px-4 sm:px-6 lg:px-12">
            {/* Left: Hamburger — always visible (Kempinski style) */}
            <div className="flex items-center gap-4 flex-1">
              <button
                className="group flex items-center gap-3 p-2 -ml-2 transition"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                {/* Animated hamburger lines */}
                <div className="flex flex-col gap-[7px]">
                  <span className={`block w-9 h-[2px] transition-all duration-500 ${isTransparent ? 'bg-white' : 'bg-gray-800'}`} />
                  <span className={`block w-6 h-[2px] transition-all duration-500 group-hover:w-9 ${isTransparent ? 'bg-white' : 'bg-gray-800'}`} />
                  <span className={`block w-9 h-[2px] transition-all duration-500 ${isTransparent ? 'bg-white' : 'bg-gray-800'}`} />
                </div>
                <span className={`hidden sm:block text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${
                  isTransparent ? 'text-white/80' : 'text-gray-600'
                }`}>
                  Menu
                </span>
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="My Space Furniture"
                  width={280}
                  height={100}
                  className={`h-16 sm:h-24 md:h-28 lg:h-36 w-auto object-contain transition-all duration-500 ${
                    isTransparent ? 'brightness-0 invert' : ''
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Right: Contact Us button */}
            <div className="flex items-center justify-end flex-1">
              <Link
                href="/contact"
                className={`px-5 sm:px-7 py-2 sm:py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold border transition-all duration-500 ${
                  isTransparent
                    ? 'border-white/50 text-white hover:bg-white hover:text-gray-900'
                    : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-700 ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Background with gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#111] via-[#1a1510] to-[#111] transition-opacity duration-700 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Decorative gold accent */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8845c] to-transparent transition-opacity duration-700 delay-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Menu content */}
        <div
          ref={menuContentRef}
          className={`absolute inset-0 flex flex-col transition-all duration-700 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 px-5 sm:px-8 lg:px-12">
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-3 p-2 -ml-2"
              aria-label="Close menu"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg className="w-6 h-6 text-white/70 group-hover:text-[#b8845c] transition-colors duration-300 group-hover:rotate-90 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/80 transition-colors font-medium">
                Close
              </span>
            </button>

            {/* Logo */}
            <Link href="/" onClick={() => setMenuOpen(false)} className="absolute left-1/2 -translate-x-1/2">
              <Image
                src="/logo.png"
                alt="My Space Furniture"
                width={200}
                height={70}
                className="h-14 sm:h-20 lg:h-24 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>

            {/* WhatsApp on right */}
            <a
              href="https://wa.me/+19166611073"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-[#25D366] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>

          {/* Subtle divider */}
          <div className="mx-5 sm:mx-8 lg:mx-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Navigation — scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-14">

              {/* Nav links */}
              <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20">
                {navLinks.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center gap-3 py-[14px] sm:py-4 border-b border-white/[0.04] hover:border-[#b8845c]/30 transition-all duration-300 ${
                      menuOpen ? 'animate-fadeSlideUp' : ''
                    }`}
                    style={{ animationDelay: `${150 + index * 50}ms`, animationFillMode: 'both' }}
                  >
                    {/* Gold dot on hover */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b8845c] scale-0 group-hover:scale-100 transition-transform duration-300 flex-shrink-0" />
                    <span className="text-[15px] sm:text-base lg:text-lg font-playfair text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 transform">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Contact info footer */}
              <div className="mt-10 lg:mt-16 pt-8 border-t border-white/[0.06]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {/* Visit */}
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#b8845c]/80 mb-2 font-semibold">Visit Us</p>
                    <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">
                      1811 Douglas Blvd<br />
                      Roseville, CA 95661
                    </p>
                  </div>

                  {/* Hours */}
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#b8845c]/80 mb-2 font-semibold">Hours</p>
                    <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">
                      Mon – Sat: 10 AM – 7 PM<br />
                      Sun: 10 AM – 5 PM
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#b8845c]/80 mb-2 font-semibold">Call Us</p>
                    <div className="space-y-1">
                      <a href="tel:+19166611073" className="block text-white/50 hover:text-white text-sm sm:text-base font-light transition-colors duration-300">
                        (916) 661-1073
                      </a>
                      <a href="tel:+19169940612" className="block text-white/50 hover:text-white text-sm sm:text-base font-light transition-colors duration-300">
                        (916) 994-0612
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA button */}
                <div className="mt-8 sm:mt-10">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#b8845c]/40 text-[#e5c7a0] hover:bg-[#b8845c] hover:text-white text-xs sm:text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-sm"
                  >
                    Get in Touch
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}