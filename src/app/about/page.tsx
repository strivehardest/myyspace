import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Typewriter from '@/components/Typewriter'

export const metadata: Metadata = {
  title: 'About My Space Furniture | Quality Furniture Since 2016',
  description: 'My Space Furniture provides premium mattresses and furniture to Roseville, Sacramento, Davis, Chico, and Yuba City, CA. We offer mattresses, bedroom sets, sectionals, sofas, dining room furniture, and custom pieces.',
  keywords: 'furniture store, mattresses, bedroom sets, sectionals, dining room furniture, Roseville, Sacramento',
  openGraph: {
    title: 'About My Space Furniture',
    description: 'Premium furniture and mattress retailer serving Northern California',
    type: 'website',
  },
}

export default function About() {
  return (
    <>
      <Header />

      {/* Page Title Above Hero */}
      {/* Hero Section with Background Video, Title, and Typewriter */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero1.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-playfair font-bold text-white mb-2 drop-shadow-lg uppercase">My Space Furniture</h1>
          <span className="text-xl md:text-3xl font-playfair text-white mb-6 drop-shadow-lg">
            <Typewriter
              words={["Your trusted partner in creating beautiful, comfortable spaces."]}
              typingSpeed={80}
              deletingSpeed={40}
              delay={1200}
              loop={true}
              className="inline"
            />
          </span>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-[#b8845c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <div className="bg-light-gray rounded-lg p-8">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-primary-blue uppercase">About My Space Furniture</h2>
              <p className="text-lg text-gray-700 mb-4">
                My Space Furniture provides premium mattress and furniture sales to Roseville, Sacramento, Davis, Chico, and Yuba City, CA. Since 2016, we have been committed to offering quality furniture and exceptional customer service to our valued customers throughout Northern California.
              </p>
              <p className="text-lg text-gray-700 mb-0">
                We are your trusted partner for creating beautiful, comfortable spaces. Whether you're looking for the perfect mattress, a stunning bedroom set, elegant dining room furniture, or custom pieces, we have something for every style and budget.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-primary-blue uppercase">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-xl font-playfair font-bold text-primary-blue mb-4">Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Mattresses & Bedding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Furniture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Bedroom Sets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Arm Chairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Dining Room Sets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Matching Tables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Sofas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-xl font-playfair font-bold text-primary-blue mb-4">Specialties</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Mattresses & Adjustable Bases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Sectionals (Leather & Fabric)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Sofas & Loveseats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Bedroom Sets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Bunk Beds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Vanities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Custom Furniture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-blue mr-3 font-bold">•</span>
                    <span>Dining Room Tables & Recliners</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-primary-blue uppercase">Why Choose My Space Furniture?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality Brands',
                  description: 'We carry premium brands including Serta, Beauty Rest, Sapphire Mattresses, and Sealy to ensure you get the best quality furniture.',
                },
                {
                  title: 'Same-Day Delivery',
                  description: 'Fast and reliable delivery options available. We handle the logistics so you can enjoy your new furniture right away.',
                },
                {
                  title: 'In-Store Pickup',
                  description: 'Convenient in-store shopping and pickup options available for your immediate needs.',
                },
                {
                  title: 'Professional Assembly',
                  description: 'Expert assembly service available to ensure your furniture is set up perfectly in your home.',
                },
                {
                  title: 'Flexible Financing',
                  description: 'We offer various payment options including financing to make premium furniture accessible to everyone.',
                },
                {
                  title: 'Wheelchair Accessible',
                  description: 'Our showroom is fully wheelchair accessible, ensuring everyone can browse our collection comfortably.',
                },
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-light-gray rounded-lg border-l-4 border-primary-blue">
                  <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-light-gray rounded-lg p-8">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-primary-blue uppercase">Business Hours & Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-playfair font-bold text-primary-blue mb-4">Hours of Operation</h3>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Monday - Saturday:</strong> 10:00 AM - 7:00 PM
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Sunday:</strong> 10:00 AM - 5:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-primary-blue mb-4">Languages Spoken</h3>
                <p className="text-gray-700 mb-2">We serve a diverse community and offer assistance in:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• English</li>
                  <li>• Spanish</li>
                  <li>• Hindi</li>
                  <li>• Punjabi</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-light-gray rounded-lg p-8">
              <h2 className="text-2xl font-playfair font-bold mb-4 uppercase text-primary-blue">Visit Our Showroom</h2>
              <p className="text-lg mb-4 text-gray-700">
                Located in beautiful Roseville, CA, our showroom showcases our complete collection of mattresses, furniture, and custom pieces.
              </p>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="mb-4">
                  <span className="font-semibold text-gray-700 mr-2">Location:</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1811+Douglas+Blvd+Roseville+CA+95661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#b8845c] hover:text-white hover:bg-[#b8845c] rounded px-2 py-1 transition"
                  >
                    1811 Douglas Blvd, Roseville, CA 95661
                  </a>
                </div>
                <p className="mb-2 text-gray-700"><strong>Phone:</strong> <a href="tel:9166611073" className="text-[#b8845c] hover:text-white hover:bg-[#b8845c] rounded px-2 py-1 transition">(916) 661-1073</a> or <a href="tel:9169940612" className="text-[#b8845c] hover:text-white hover:bg-[#b8845c] rounded px-2 py-1 transition">(916) 994-0612</a></p>
                <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:info@myyspacefurniture.com" className="text-[#b8845c] hover:text-white hover:bg-[#b8845c] rounded px-2 py-1 transition">info@myyspacefurniture.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
