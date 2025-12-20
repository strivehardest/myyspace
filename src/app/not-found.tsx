import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found - My Space Furniture',
  description: 'The page you are looking for does not exist. Return to My Space Furniture home page.',
  robots: 'noindex, follow',
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#b8845c] via-[#a0725a] to-[#8b5e3c] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration with Animation */}
          <div className="mb-8 animate-pulse">
            <h1 className="text-9xl md:text-[180px] font-playfair font-bold text-white drop-shadow-2xl mb-4">
              404
            </h1>
            <div className="h-2 w-40 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 uppercase drop-shadow-lg">
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Oops! The page you're looking for seems to have been moved or doesn't exist.
          </p>

          {/* Description */}
          <p className="text-white text-lg mb-12 max-w-2xl mx-auto opacity-90">
            Don't worry! Let's get you back to exploring our premium furniture collection. 
            Browse through our categories below or return to the homepage.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="px-10 py-4 bg-white text-[#b8845c] font-bold text-lg rounded-lg hover:bg-[#ebebeb] hover:scale-105 transition-all shadow-xl hover:shadow-2xl font-playfair uppercase"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-3 border-white bg-transparent text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#b8845c] hover:scale-105 transition-all shadow-lg font-playfair uppercase"
            >
              Contact Us
            </Link>
          </div>

          {/* Popular Categories Grid */}
          <div className="mt-16 pt-12 border-t-2 border-white border-opacity-30">
            <h3 className="text-3xl font-playfair font-bold text-white mb-8 uppercase drop-shadow-lg">
              Explore Our Collections
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/loveseats', label: 'Sofas & Loveseats', description: 'Comfortable seating' },
                { href: '/bedroom-sets', label: 'Bedroom Sets', description: 'Complete bedroom furniture' },
                { href: '/dining-tables', label: 'Dining Furniture', description: 'Tables & chairs' },
                { href: '/mattresses', label: 'Mattresses', description: 'Quality sleep solutions' },
                { href: '/leather-sectionals', label: 'Leather Sectionals', description: 'Luxury sectionals' },
                { href: '/fabric-sectionals', label: 'Fabric Sectionals', description: 'Cozy sectionals' },
                { href: '/bunk-beds', label: 'Bunk Beds', description: 'Space-saving solutions' },
                { href: '/vanities', label: 'Vanities', description: 'Elegant vanities' },
                { href: '/custom-sectionals', label: 'Custom Sectionals', description: 'Design your own' },
                { href: '/custom-sofas', label: 'Custom Sofas', description: 'Personalized sofas' },
                { href: '/custom-bedroom-sets', label: 'Custom Bedroom', description: 'Custom furniture' },
                { href: '/gallery', label: 'Gallery', description: 'View our work' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20"
                >
                  <div className="font-bold text-white group-hover:text-[#b8845c] font-playfair text-lg mb-1 transition-colors">
                    {link.label}
                  </div>
                  <div className="text-sm text-white/80 group-hover:text-[#a0725a] transition-colors">
                    {link.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 p-8 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/30 shadow-2xl">
            <h3 className="font-bold text-white mb-3 text-2xl font-playfair uppercase">
              Need Assistance?
            </h3>
            <p className="text-white text-lg mb-6 opacity-90 max-w-xl mx-auto">
              Can't find what you're looking for? Our friendly team is here to help you find the perfect furniture for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-[#b8845c] font-bold rounded-lg hover:bg-[#ebebeb] hover:scale-105 transition-all font-playfair uppercase shadow-lg"
              >
                Contact Support
              </Link>
              <a
                href="tel:+19166611073"
                className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#b8845c] hover:scale-105 transition-all font-playfair uppercase"
              >
                Call (916) 661-1073
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}