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
      <main className="min-h-screen flex items-center justify-center bg-[#b8845c] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[150px] font-playfair font-bold text-[#ebebeb] mb-4">
              404
            </h1>
            <div className="h-1 w-32 bg-white mx-auto"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#ebebeb] mb-4 uppercase">
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#ebebeb] mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Description */}
          <p className="text-[#ebebeb] mb-12 max-w-md mx-auto opacity-90">
            Let's get you back to exploring our premium furniture collection.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="px-8 py-4 bg-white text-[#b8845c] font-bold text-lg rounded-lg hover:bg-[#ebebeb] transition shadow-lg"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#b8845c] transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Suggested Links */}
          <div className="mt-16 pt-8 border-t border-white border-opacity-30">
            <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-6 uppercase">
              Popular Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/mattresses', label: 'Mattresses' },
                { href: '/loveseats', label: 'Sofas & Loveseats' },
                { href: '/sectionals', label: 'Sectionals' },
                { href: '/bedroom-sets', label: 'Bedroom Sets' },
                { href: '/dining-room', label: 'Dining Furniture' },
                { href: '/recliners', label: 'Recliners' },
                { href: '/custom-sofas', label: 'Custom Sofas' },
                { href: '/custom-sectionals', label: 'Custom Sectionals' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[#ebebeb] hover:text-white font-playfair transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 p-6 bg-[#a0725a] rounded-lg border border-white border-opacity-20">
            <h3 className="font-bold text-[#ebebeb] mb-2 text-lg font-playfair">Need Help?</h3>
            <p className="text-[#ebebeb] mb-4 opacity-90">
              If you think this is a mistake, please contact our support team.
            </p>
            <Link
              href="/contact"
              className="inline-block text-white hover:text-[#ebebeb] font-semibold transition-colors font-playfair"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
