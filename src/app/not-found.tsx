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
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-block">
              <div className="text-9xl font-playfair font-bold bg-gradient-to-r from-primary-blue to-secondary-blue bg-clip-text text-transparent mb-4">
                404
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-dark-gray mb-4">
            Page Not Found
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Description */}
          <p className="text-gray-500 mb-12 max-w-md mx-auto">
            Don't worry, we have plenty of amazing furniture options waiting for you. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-primary-blue to-secondary-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/sofas"
              className="px-8 py-4 border-2 border-primary-blue text-primary-blue font-semibold rounded-lg hover:bg-primary-blue hover:text-white transition-all"
            >
              Browse Sofas
            </Link>
          </div>

          {/* Suggested Links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-playfair font-bold text-dark-gray mb-6">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/mattresses', label: 'Mattresses' },
                { href: '/sofas', label: 'Sofas' },
                { href: '/sectionals', label: 'Sectionals' },
                { href: '/bedroom-sets', label: 'Bedroom Sets' },
                { href: '/dining-tables', label: 'Dining Tables' },
                { href: '/vanities', label: 'Vanities' },
                { href: '/custom-sofas', label: 'Custom Sofas' },
                { href: '/custom-sectionals', label: 'Custom Sectionals' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-primary-blue hover:text-secondary-blue font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-primary-blue mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you think this is a mistake, please contact our support team.
            </p>
            <Link
              href="/contact"
              className="inline-block text-primary-blue hover:text-secondary-blue font-semibold transition-colors"
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
