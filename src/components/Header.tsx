'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  return (
    <header className={`bg-transparent border-b border-gray-200 border-opacity-20 z-50 ${isHomepage ? 'sticky top-0' : 'relative'}`}>
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4 relative">
          
          {/* Mobile: Contact Info Above Logo */}
          <div className="lg:hidden flex flex-col items-center space-y-2 mb-4 w-full">
            <a href="tel:+19166611073" className="text-white font-bold text-base flex items-center hover:text-[#b8845c] transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/>
              </svg>
              (916) 661-1073
            </a>
            <a href="https://wa.me/+19166611073?text=Hello%21%20I%20am%20interested%20in%20learning%20more%20about%20your%20furniture%20products." target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold text-base flex items-center hover:text-[#1ebd5a] transition">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Desktop: Contact Info on Sides */}
          <div className="hidden lg:flex items-center justify-between w-full mb-6">
            <a href="tel:+19166611073" className="text-white font-bold text-xl flex items-center hover:text-[#b8845c] transition-all duration-300 hover:scale-105">
              <div className="bg-[#b8845c] bg-opacity-10 rounded-full p-3 mr-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Call Us</span>
                <span className="text-xl">(916) 661-1073</span>
              </div>
            </a>

            {/* Spacer for logo */}
            <div className="flex-1"></div>

            <a href="https://wa.me/+19166611073?text=Hello%21%20I%20am%20interested%20in%20learning%20more%20about%20your%20furniture%20products." target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold text-xl flex items-center hover:text-[#1ebd5a] transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-end mr-3">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Message Us</span>
                <span className="text-xl text-white">WhatsApp</span>
              </div>
              <div className="bg-[#25D366] bg-opacity-20 rounded-full p-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Logo - Centered and BIGGER */}
          <div className="flex justify-center w-full lg:w-auto">
            <Link href="/" className="flex items-center justify-center">
              <div className="w-[300px] h-[100px] lg:w-[600px] lg:h-[180px] relative drop-shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="My Space Furniture Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 absolute right-4 top-4 text-white hover:text-[#b8845c]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Bar - Below Logo */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 py-4 border-t border-gray-100">
          <Link href="/loveseats" className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
            Sofas & Loveseats
          </Link>
          <Link href="/bedroom-sets" className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
            Bedroom
          </Link>
          <Link href="/dining-tables" className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
            Dining
          </Link>
          <Link href="/mattresses" className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
            Mattresses
          </Link>
          <Link href="/vanities" className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
            Vanities
          </Link>
          <Link href="/bunk-beds" className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
            Bunk Beds
          </Link>
          <div className="relative group">
            <button className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
              Sectionals
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4 z-50">
              <Link href="/leather-sectionals" className="block px-6 py-3 text-sm hover:bg-[#ebebeb] hover:text-[#b8845c] font-medium font-playfair text-[#b8845c] uppercase">
                Leather Sectionals
              </Link>
              <Link href="/fabric-sectionals" className="block px-6 py-3 text-sm hover:bg-[#ebebeb] hover:text-[#b8845c] font-medium font-playfair text-[#b8845c] uppercase">
                Fabric Sectionals
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
              Custom
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4 z-50">
              <Link href="/custom-sectionals" className="block px-6 py-3 text-sm hover:bg-[#ebebeb] hover:text-[#b8845c] font-medium font-playfair text-[#b8845c] uppercase">
                Custom Sectionals
              </Link>
              <Link href="/custom-sofas" className="block px-6 py-3 text-sm hover:bg-[#ebebeb] hover:text-[#b8845c] font-medium font-playfair text-[#b8845c] uppercase">
                Custom Sofas
              </Link>
              <Link href="/custom-bedroom-sets" className="block px-6 py-3 text-sm hover:bg-[#ebebeb] hover:text-[#b8845c] font-medium font-playfair text-[#b8845c] uppercase">
                Custom Bedroom
              </Link>
            </div>
          </div>
          <Link href="/gallery" className="text-[#ebebeb] font-semibold hover:text-white transition text-sm uppercase tracking-wide font-playfair">
            Gallery
          </Link>
          <Link href="/contact" className="text-[#ebebeb] font-bold text-sm uppercase tracking-wide hover:text-white transition font-playfair">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-white border-t border-gray-200 shadow-lg overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-[#b8845c] hover:text-[#a0725a] focus:outline-none focus:ring-2 focus:ring-[#b8845c]"
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="px-4 py-4 space-y-3 pt-16">
            <Link href="/loveseats" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Sofas & Loveseats
            </Link>
            <Link href="/bedroom-sets" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Bedroom
            </Link>
            <Link href="/dining-tables" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Dining
            </Link>
            <Link href="/mattresses" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Mattresses
            </Link>
            <Link href="/vanities" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Vanities
            </Link>
            <Link href="/bunk-beds" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Bunk Beds
            </Link>
            <Link href="/leather-sectionals" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Leather Sectionals
            </Link>
            <Link href="/fabric-sectionals" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Fabric Sectionals
            </Link>
            <Link href="/custom-sectionals" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Custom Sectionals
            </Link>
            <Link href="/custom-sofas" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Custom Sofas
            </Link>
            <Link href="/custom-bedroom-sets" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Custom Bedroom
            </Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase py-2">
              Gallery
            </Link>
            <div className="border-t border-white/20 pt-3">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 bg-[#b8845c] text-white font-bold rounded-lg text-center hover:bg-[#a0725a] font-playfair uppercase transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}