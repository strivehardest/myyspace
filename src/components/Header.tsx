'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-20 px-4 sm:px-8">
          {/* Left: Menu Button (Mobile) & Phone */}
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden p-2 hover:bg-gray-50 rounded transition"
              onClick={() => setMobileMenuOpen(true)} 
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
            <a 
              href="tel:+19166611073" 
              className="hidden sm:flex items-center text-2xl font-semibold text-gray-900 hover:text-gray-600 transition"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              916-661-1073
            </a>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="My Space Furniture" 
                width={280} 
                height={100} 
                className="h-36 w-auto object-contain" 
                priority 
              />
            </Link>
          </div>

          {/* Right: WhatsApp */}
          <div className="flex items-center">
            <a 
              href="https://wa.me/+19166611073" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center text-gray-900 hover:text-gray-600 transition"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-10 h-14 border-t border-gray-100 text-sm uppercase tracking-wider font-medium">
          <Link href="/loveseats" className="text-gray-900 hover:text-gray-600 transition">
            Sofas
          </Link>
          <Link href="/bedroom-sets" className="text-gray-900 hover:text-gray-600 transition">
            Bedroom
          </Link>
          <Link href="/dining-tables" className="text-gray-900 hover:text-gray-600 transition">
            Dining
          </Link>
          <div className="relative group">
            <button className="text-gray-900 hover:text-gray-600 transition">
              SECTIONALS
            </button>
            <div className="absolute left-0 top-full mt-0 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/leather-sectionals" className="block px-4 py-3 text-xs hover:bg-gray-50 text-gray-900 uppercase tracking-wider">
                Leather
              </Link>
              <Link href="/fabric-sectionals" className="block px-4 py-3 text-xs hover:bg-gray-50 text-gray-900 uppercase tracking-wider">
                Fabric
              </Link>
            </div>
          </div>
          <Link href="/mattresses" className="text-gray-900 hover:text-gray-600 transition">
            Mattresses
          </Link>
          <Link href="/vanities" className="text-gray-900 hover:text-gray-600 transition">
            Vanities
          </Link>
          <Link href="/bunk-beds" className="text-gray-900 hover:text-gray-600 transition">
            Bunk Beds
          </Link>
          <Link href="/custom-furniture" className="text-gray-900 hover:text-gray-600 transition">
            Custom Furniture
          </Link>
          <Link href="/gallery" className="text-gray-900 hover:text-gray-600 transition">
            Gallery
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu - Left Slide-in */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Menu Panel */}
        <div 
          className={`absolute left-0 top-0 bottom-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 sticky top-0 bg-white z-10">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="My Space Furniture" 
                width={160} 
                height={60} 
                className="h-20 w-auto object-contain" 
              />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2 hover:bg-gray-50 rounded transition"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contact Info */}
          <div className="px-6 py-4 border-b border-gray-200 space-y-3">
            <a 
                href="tel:+19166611073" 
                className="flex items-center text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
              >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              916-661-1073
            </a>
            <a 
              href="https://wa.me/+19166611073" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-900 hover:text-gray-600 transition"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="px-6 py-4 flex-1 overflow-y-auto">
            <div className="space-y-2">
              <Link 
                href="/loveseats" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-4 text-base text-gray-900 hover:text-gray-600 transition uppercase tracking-wider rounded-lg focus:outline-none focus:bg-gray-100"
              >
                Sofas & Loveseats
              </Link>
              <Link 
                href="/bedroom-sets" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm text-gray-900 hover:text-gray-600 transition uppercase tracking-wider"
              >
                Bedroom
              </Link>
              <Link 
                href="/dining-tables" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm text-gray-900 hover:text-gray-600 transition uppercase tracking-wider"
              >
                Dining
              </Link>
              <Link 
                href="/mattresses" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm text-gray-900 hover:text-gray-600 transition uppercase tracking-wider"
              >
                Mattresses
              </Link>
              <Link 
                href="/vanities" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm text-gray-900 hover:text-gray-600 transition uppercase tracking-wider"
              >
                Vanities
              </Link>
              <Link 
                href="/bunk-beds" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm text-gray-900 hover:text-gray-600 transition uppercase tracking-wider"
              >
                Bunk Beds
              </Link>
              <Link
               href="/custom-furniture"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm text-gray-900 hover:text-gray-600 transition uppercase tracking-wider"
              >
                Custom Furniture
              </Link>
              
              {/* Sectionals Submenu */}
              <div className="py-3">
                <div className="text-sm text-gray-900 uppercase tracking-wider font-medium mb-2">Sectionals</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/leather-sectionals" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-base text-gray-700 hover:text-gray-900 transition rounded-lg focus:outline-none focus:bg-gray-100"
                  >
                    Leather Sectionals
                  </Link>
                  <Link 
                    href="/fabric-sectionals" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition"
                  >
                    Fabric Sectionals
                  </Link>
                </div>
              </div>


              <Link 
                href="/gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm text-gray-900 hover:text-gray-600 transition uppercase tracking-wider"
              >
                Gallery
              </Link>
              {/* Removed duplicate Contact link to keep only the footer Contact Us button */}
            </div>
          </nav>

          {/* Footer */}
          <div className="sticky bottom-0 left-0 right-0 px-6 py-4 border-t border-gray-200 bg-white">
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-4 text-center text-base bg-white text-[#b8845c] hover:bg-[#b8845c] hover:text-white transition uppercase tracking-wider rounded-lg focus:outline-none border border-[#b8845c] font-bold shadow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}