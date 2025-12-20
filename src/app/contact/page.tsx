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

      <main className="py-16 md:py-24 bg-[#b8845c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#ebebeb] mb-8 uppercase">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-3">Phone</h3>
                  <p className="text-[#ebebeb] text-lg">(916) 661-1073</p>
                  <p className="text-[#ebebeb] text-lg">(916) 994-0612</p>
                  <p className="text-[#ebebeb] text-base mt-2">Mon-Sat: 10:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-3">Email</h3>
                  <p className="text-[#ebebeb] text-lg">info@myyspacefurniture.com</p>
                  <p className="text-[#ebebeb] text-base">We respond within 24 hours</p>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-3">Address</h3>
                  <p className="text-[#ebebeb] text-lg">1811 Douglas Blvd</p>
                  <p className="text-[#ebebeb] text-lg">Roseville, CA 95661</p>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-3">Hours</h3>
                  <p className="text-[#ebebeb] text-lg">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-[#ebebeb] text-lg">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#ebebeb] mb-8 uppercase">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-base font-semibold text-[#ebebeb] mb-3">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-[#ebebeb] mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-[#ebebeb] mb-3">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-[#ebebeb] mb-3">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-[#ebebeb] mb-3">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-[#b8845c] font-semibold rounded-lg hover:bg-[#ebebeb] transition font-playfair uppercase"
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
                <h3 className="text-lg font-semibold text-[#b8845c] mb-2 font-playfair">View on Google Maps</h3>
                <p className="text-[#8b6344] mb-3 font-playfair">(916) Douglas Blvd, Roseville, CA 95661</p>
                <div className="text-[#b8845c] font-semibold font-playfair">Click to open directions →</div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
