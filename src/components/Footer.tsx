'use client'

import Link from 'next/link'
import Image from 'next/image'

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2.003 5.884L6.22 3.809c.338-.191.74-.047.921.31l1.485 3.126c.163.342.04.744-.278.922l-2.68 1.341a12.04 12.04 0 005.231 5.231l1.341-2.68c.178-.318.58-.441.922-.278l3.126 1.485c.358.181.501.583.31.921l-2.075 4.217c-.216.428-.637.706-1.108.706-.504 0-1.008-.089-1.507-.267-4.991-1.776-9.519-6.304-11.295-11.295C2.092 6.011 2.003 5.507 2.003 5.884z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C7.16 0 3.13 4.03 3.13 8.87c0 5.93 8.87 15.13 8.87 15.13s8.87-9.2 8.87-15.13C20.87 4.03 16.84 0 12 0zm0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-white relative">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#b8845c] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pt-24 pb-20">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="w-64 h-36 relative">
                <Image
                  src="/logo.png"
                  alt="My Space Furniture Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-[#b8845c] text-lg leading-relaxed max-w-sm font-playfair">
              Quality furniture for every room in your home. Transform your space with our curated collection of premium pieces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-8 text-[#b8845c] uppercase flex items-center">
              <span className="w-1 h-6 bg-[#b8845c] rounded mr-3" />
              Quick Links
            </h4>

            <ul className="space-y-4 font-playfair">
              <li><Link href="/" className="text-[#b8845c] hover:text-[#a0725a] transition">Home</Link></li>
              <li><Link href="/about" className="text-[#b8845c] hover:text-[#a0725a] transition">About Us</Link></li>
              <li><Link href="/gallery" className="text-[#b8845c] hover:text-[#a0725a] transition">Gallery</Link></li>
              <li><Link href="/faq" className="text-[#b8845c] hover:text-[#a0725a] transition">FAQs</Link></li>
              <li><Link href="/financing" className="text-[#b8845c] hover:text-[#a0725a] transition">Financing</Link></li>
              <li><Link href="/contact" className="text-[#b8845c] hover:text-[#a0725a] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Collections - Improved styling */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-8 text-[#b8845c] uppercase flex items-center">
              <span className="w-1 h-6 bg-[#b8845c] rounded mr-3" />
              Our Collections
            </h4>

            <ul className="grid grid-cols-2 gap-x-12 gap-y-5 font-playfair text-[#b8845c]">
              <li>
                <Link 
                  href="/mattresses" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Mattresses
                </Link>
              </li>
              <li>
                <Link 
                  href="/bedroom-sets" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Bedroom Sets
                </Link>
              </li>
              <li>
                <Link 
                  href="/dining-tables" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Dining Tables
                </Link>
              </li>
              <li>
                <Link 
                  href="/loveseats" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Sofas & Loveseats
                </Link>
              </li>
              <li>
                <Link 
                  href="/leather-sectionals" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Leather Sectionals
                </Link>
              </li>
              <li>
                <Link 
                  href="/fabric-sectionals" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Fabric Sectionals
                </Link>
              </li>
              <li>
                <Link 
                  href="/bunk-beds" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Bunk Beds
                </Link>
              </li>
              <li>
                <Link 
                  href="/vanities" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Vanities
                </Link>
              </li>
              <li>
                <Link 
                  href="/custom-furniture" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300"
                >
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="block hover:text-[#a0725a] hover:translate-x-1 transition-all duration-300 font-medium"
                >
                  View Gallery →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14 border-t border-[#b8845c]/20">

          {/* Phone */}
          <div className="flex items-start space-x-5">
            <div className="w-12 h-12 rounded-full bg-[#b8845c] text-white flex items-center justify-center">
              <PhoneIcon />
            </div>
            <div className="font-playfair">
              <p className="text-xs uppercase tracking-wider text-[#b8845c] mb-2 font-semibold">Phone</p>
              <p className="text-[#a0725a] font-bold text-lg">(916) 661-1073</p>
              <p className="text-[#a0725a] font-bold text-lg">(916) 994-0612</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-5">
            <div className="w-12 h-12 rounded-full bg-[#b8845c] text-white flex items-center justify-center">
              <EmailIcon />
            </div>
            <div className="font-playfair">
              <p className="text-xs uppercase tracking-wider text-[#b8845c] mb-2 font-semibold">Email</p>
              <a href="mailto:info@myyspacefurniture.com" className="text-[#a0725a] font-bold hover:text-[#b8845c] transition">
                info@myyspacefurniture.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-5">
            <div className="w-12 h-12 rounded-full bg-[#b8845c] text-white flex items-center justify-center">
              <LocationIcon />
            </div>
            <div className="font-playfair">
              <p className="text-xs uppercase tracking-wider text-[#b8845c] mb-2 font-semibold">Location</p>
              <p className="text-[#a0725a] font-bold">1811 Douglas Blvd</p>
              <p className="text-[#b8845c] text-sm">Roseville, CA 95661</p>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="py-10 border-t border-[#b8845c]/20 text-center">
          <p className="text-[#b8845c] text-lg font-playfair tracking-wide">
            © 2026 My Space Furniture. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )

}
