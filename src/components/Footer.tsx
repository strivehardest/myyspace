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
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 pb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="w-64 h-24 relative">
                <Image
                  src="/logo.png"
                  alt="My Space Furniture Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-[#b8845c] text-sm leading-relaxed">
              Quality furniture for every room in your home. Transform your space with our curated collection of premium pieces.
            </p>
          </div>

          {/* Main Menu */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-[#b8845c] flex items-center uppercase">
              <div className="w-1 h-6 bg-[#b8845c] mr-3 rounded"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Home</Link></li>
              <li><Link href="/about" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> About Us</Link></li>
              <li><Link href="/faq" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> FAQs</Link></li>
              <li><Link href="/financing" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Financing</Link></li>
              <li><Link href="/contact" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Contact</Link></li>
              <li><Link href="/credits" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Credits</Link></li>
            </ul>
          </div>

          {/* Furniture Categories */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-[#b8845c] flex items-center uppercase">
              <div className="w-1 h-6 bg-[#b8845c] mr-3 rounded"></div>
              Furniture
            </h4>
            <ul className="space-y-3">
              <li><Link href="/vanities" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Vanities</Link></li>
              <li><Link href="/bunk-beds" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Bunk Beds</Link></li>
              <li><Link href="/loveseats" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Sofa & Loveseats</Link></li>
              <li><Link href="/leather-sectionals" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Leather Sectionals</Link></li>
              <li><Link href="/fabric-sectionals" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Fabric Sectionals</Link></li>
              <li><Link href="/bedroom-sets" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Bedroom Sets</Link></li>
              <li><Link href="/dining-tables" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Dining Tables</Link></li>
              <li><Link href="/gallery" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Gallery</Link></li>
            </ul>
          </div>

          {/* Special Sections */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-[#b8845c] flex items-center uppercase">
              <div className="w-1 h-6 bg-[#b8845c] mr-3 rounded"></div>
              Collections
            </h4>
            <ul className="space-y-3">
              <li><Link href="/mattresses" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Mattresses & Bases</Link></li>
              <li><Link href="/custom-sectionals" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Custom Sectionals</Link></li>
              <li><Link href="/custom-sofas" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Custom Sofas & Loveseats</Link></li>
              <li><Link href="/custom-bedroom-sets" className="text-[#b8845c] hover:text-[#a0725a] transition flex items-center font-playfair"><span className="mr-2">›</span> Custom Bedroom Sets</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-[#b8845c] border-opacity-20">
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#b8845c] rounded-full flex items-center justify-center text-white">
              <PhoneIcon />
            </div>
            <div>
              <p className="text-[#b8845c] text-xs uppercase tracking-wider mb-2 font-semibold font-playfair">Phone</p>
              <p className="text-[#a0725a] font-bold text-lg font-playfair">(916) 661-1073</p>
              <p className="text-[#a0725a] font-bold text-lg font-playfair">(916) 994-0612</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#b8845c] rounded-full flex items-center justify-center text-white">
              <EmailIcon />
            </div>
            <div>
              <p className="text-[#b8845c] text-xs uppercase tracking-wider mb-2 font-semibold font-playfair">Email</p>
              <a href="mailto:info@myyspacefurniture.com" className="text-[#a0725a] font-bold hover:text-[#b8845c] transition break-words font-playfair">
                info@myyspacefurniture.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#b8845c] rounded-full flex items-center justify-center text-white">
              <LocationIcon />
            </div>
            <div>
              <p className="text-[#b8845c] text-xs uppercase tracking-wider mb-2 font-semibold font-playfair">Location</p>
              <p className="text-[#a0725a] font-bold font-playfair">1811 Douglas Blvd</p>
              <p className="text-[#b8845c] text-sm font-playfair">Roseville, CA 95661</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-[#b8845c] border-opacity-20 text-center">
          <p className="text-[#b8845c] text-sm mb-2 font-playfair">
            &copy; 2025 My Space Furniture. All rights reserved.
          </p>
          <p className="text-[#b8845c] text-sm font-playfair">
            Designed and Developed by{' '}
            <Link href="https://www.celestialwebsolutions.net" target="_blank" rel="noopener noreferrer" className="text-[#a0725a] hover:text-[#b8845c] transition font-bold">
              Celestial Web Solutions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
