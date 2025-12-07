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
      {/* Main Header - Logo Centered at Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <div className="w-96 h-28 relative">
                <Image
                  src="/logo.png"
                  alt="My Space Furniture Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 absolute right-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Bar - Below Logo */}
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
            <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
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
            <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
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
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href="/loveseats" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Sofas
            </Link>
            <Link href="/bedroom-sets" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Bedroom
            </Link>
            <Link href="/dining-tables" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Dining
            </Link>
            <Link href="/mattresses" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Mattresses
            </Link>
            <Link href="/vanities" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Vanities
            </Link>
            <Link href="/bunk-beds" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Bunk Beds
            </Link>
            <Link href="/leather-sectionals" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Leather Sectionals
            </Link>
            <Link href="/fabric-sectionals" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Fabric Sectionals
            </Link>
            <Link href="/custom-sectionals" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Custom Sectionals
            </Link>
            <Link href="/custom-sofas" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Custom Sofas
            </Link>
            <Link href="/custom-bedroom-sets" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Custom Bedroom
            </Link>
            <Link href="/gallery" className="block text-[#b8845c] font-semibold hover:text-[#a0725a] font-playfair uppercase">
              Gallery
            </Link>
            <div className="border-t pt-3 space-y-3">
              <Link href="/contact" className="block px-4 py-2 bg-[#b8845c] text-white font-bold rounded text-center hover:bg-[#a0725a] font-playfair uppercase">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
