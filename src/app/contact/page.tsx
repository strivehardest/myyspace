import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import GoogleReviews from '@/components/GoogleReviews'
import ContactForm from '@/components/ContactForm'

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
                  <p className="text-[#ebebeb] text-lg">Myspacefurniture1@gmail.com</p>
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
              <ContactForm />
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="p-4 sm:p-6 bg-white border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-playfair font-bold text-gray-900">Our Showroom</h3>
                <p className="text-sm text-gray-500 mt-1">1811 Douglas Blvd, Roseville, CA 95661</p>
              </div>
              <a
                href="https://www.google.com/maps/place/MyySpace+Furniture+%26+Mattress/@38.7465805,-121.2606694,17z/data=!4m8!3m7!1s0x678ab9b0c002b107:0xbff9cbf87975ed3c!8m2!3d38.7465805!4d-121.2606694!9m1!1b1!16s%2Fg%2F11yjlt_j7s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#b8845c] hover:bg-[#a0725a] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.8!2d-121.2606694!3d38.7465805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x678ab9b0c002b107%3A0xbff9cbf87975ed3c!2sMyySpace%20Furniture%20%26%20Mattress!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="MyySpace Furniture & Mattress Location"
            />
          </div>
        </div>
      </main>

      <GoogleReviews />

      <Footer />
    </>
  )
}
