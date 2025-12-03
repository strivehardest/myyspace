import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Contact My Space Furniture | Get in Touch',
  description: 'Contact My Space Furniture for inquiries, support, or to schedule a showroom visit. We\'re here to help with all your furniture needs.',
  keywords: 'contact us, furniture store contact, customer service, showroom',
  openGraph: {
    title: 'Contact My Space Furniture',
    description: 'Get in touch with our furniture experts',
    type: 'website',
  },
}

export default function Contact() {
  return (
    <>
      <Header />
      <PageHeader 
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or inquiries."
        heroImage="/images/heroes/contact-hero.jpg"
        compact
      />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-primary-blue mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-playfair font-bold text-primary-blue mb-2">Phone</h3>
                  <p className="text-gray-700">(916) 661-1073</p>
                  <p className="text-gray-700">(916) 994-0612</p>
                  <p className="text-gray-600 text-sm mt-2">Mon-Sat: 10:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-primary-blue mb-2">Email</h3>
                  <p className="text-gray-700">info@myyspacefurniture.com</p>
                  <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-primary-blue mb-2">Address</h3>
                  <p className="text-gray-700">1811 Douglas Blvd</p>
                  <p className="text-gray-700">Roseville, CA 95661</p>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-primary-blue mb-2">Hours</h3>
                  <p className="text-gray-700">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-700">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-primary-blue mb-8">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-secondary-blue transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <a
              href="https://www.google.com/maps/dir//1811+Douglas+Blvd,+Roseville,+CA+95661,+USA/@38.746664,-121.260677,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full h-96 bg-gray-300 hover:bg-gray-400 transition items-center justify-center"
              style={{
                backgroundImage: `url('/images/map.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-center bg-white bg-opacity-90 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-blue mb-2">View on Google Maps</h3>
                <p className="text-gray-600 mb-3">1811 Douglas Blvd, Roseville, CA 95661</p>
                <div className="text-primary-blue font-semibold">Click to open directions →</div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
