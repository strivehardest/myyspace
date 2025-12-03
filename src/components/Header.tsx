'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-36 h-12 relative">
              <Image
                src="/logo.svg"
                alt="My Space Furniture Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-blue transition">
              Home
            </Link>
            
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-blue transition">
                Furniture
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/vanities" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Vanities
                </Link>
                <Link href="/bunk-beds" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Bunk Beds
                </Link>
                <Link href="/loveseats" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Sofa Loveseats
                </Link>
                <Link href="/leather-sectionals" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Leather Sectionals
                </Link>
                <Link href="/fabric-sectionals" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Fabric Sectionals
                </Link>
                <Link href="/bedroom-sets" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Bedroom Sets
                </Link>
                <Link href="/dining-tables" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Dining Tables
                </Link>
                <Link href="/gallery" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue border-t border-light-gray">
                  Gallery
                </Link>
              </div>
            </div>

            <Link href="/mattresses" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-blue transition">
              Mattresses & Bases
            </Link>

            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-blue transition">
                Custom Furniture
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/custom-sectionals" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Sectionals
                </Link>
                <Link href="/custom-sofas" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Sofas & Loveseats
                </Link>
                <Link href="/custom-bedroom-sets" className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-primary-blue">
                  Bedroom Sets
                </Link>
              </div>
            </div>

            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-blue transition">
              About
            </Link>
            <Link href="/faq" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-blue transition">
              FAQs
            </Link>
            <Link href="/contact" className="px-3 py-2 ml-4 rounded-md bg-primary-blue text-white text-sm font-medium hover:bg-secondary-blue transition">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-light-gray"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
              Home
            </Link>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-light-gray font-medium">
              Furniture
            </button>
            <div className="pl-4 space-y-1">
              <Link href="/vanities" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Vanities
              </Link>
              <Link href="/bunk-beds" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Bunk Beds
              </Link>
              <Link href="/loveseats" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Sofa Loveseats
              </Link>
              <Link href="/leather-sectionals" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Leather Sectionals
              </Link>
              <Link href="/fabric-sectionals" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Fabric Sectionals
              </Link>
              <Link href="/bedroom-sets" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Bedroom Sets
              </Link>
              <Link href="/dining-tables" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Dining Tables
              </Link>
              <Link href="/gallery" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray border-t border-light-gray">
                Gallery
              </Link>
            </div>
            <Link href="/mattresses" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray font-medium">
              Mattresses & Bases
            </Link>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-light-gray font-medium">
              Custom Furniture
            </button>
            <div className="pl-4 space-y-1">
              <Link href="/custom-sectionals" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Custom Sectionals
              </Link>
              <Link href="/custom-sofas" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Sofas & Loveseats
              </Link>
              <Link href="/custom-bedroom-sets" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
                Custom Bedroom Sets
              </Link>
            </div>
            <Link href="/about" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
              About
            </Link>
            <Link href="/faq" className="block px-3 py-2 rounded-md text-sm hover:bg-light-gray">
              FAQs
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md bg-primary-blue text-white text-sm hover:bg-secondary-blue">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
