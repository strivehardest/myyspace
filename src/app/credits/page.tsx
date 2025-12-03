import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import TechStack, { QuickLinks } from '@/components/TechStack'

export const metadata: Metadata = {
  title: 'Credits - My Space Furniture',
  description: 'Credits and acknowledgments for My Space Furniture website design and development by Celestial Web Solutions.',
  keywords: 'credits, design, development, celestial web solutions, best web design agency, web development company, it consulting, web designer in ghana',
  openGraph: {
    title: 'Credits - My Space Furniture',
    description: 'Credits and acknowledgments for My Space Furniture',
    type: 'website',
  },
}

export default function Credits() {
  const whatsappNumber = '233530505031'
  const whatsappMessage = encodeURIComponent('Hello! I am interested in learning more about Celestial Web Solutions services.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const services = [
    'Web Development',
    'Web Design',
    'E-Commerce Solutions',
    'SEO Optimization',
    'Full Stack Development',
    'Mobile Responsive Design',
    'UX/UI Design',
    'Google Ads Management',
    'Google AdSense Management',
    'IT Consulting'

  ]

  const technologies = [
    { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'WordPress', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'TailwindCSS', url: 'https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png' },
    { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'WooCommerce', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
    { name: 'Shopify', url: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
    { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Header with Orange Background */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 md:px-12 py-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">Credits</h1>
              <p className="text-orange-100 text-lg">Website Design & Development by Celestial Web Solutions</p>
            </div>

            <div className="p-8 md:p-12">
              {/* Company Profile */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-orange-600 mb-6">Celestial Web Solutions</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Celestial Web Solutions is a full-service web development and digital design agency with <span className="font-semibold">over 3 years of experience</span> specializing in creating modern, responsive, and user-centric web experiences for businesses of all sizes.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our team of skilled developers and designers combines creativity with technical expertise to deliver solutions that not only look stunning but also drive real business results. We believe in building long-term partnerships with our clients and providing ongoing support.
                </p>

                {/* Mission */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 mb-8 border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To deliver innovative, secure, and scalable digital solutions that empower businesses to achieve their full potential in the digital era.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-orange-600 mb-6">Our Core Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-orange-600 mb-6">Technology Stack</h3>
                <TechStack technologies={technologies} />
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-orange-600 mb-6">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Main Office */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-700 mb-3 text-lg">Main Office - Keta</h4>
                    <p className="text-gray-700 mb-3">235 Agblor Link, Keta, Ghana</p>
                    <a 
                      href="tel:+233245671832"
                      className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+233 245 671 832</span>
                    </a>
                  </div>

                  {/* Branch Office */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-700 mb-3 text-lg">Branch Office - Accra</h4>
                    <p className="text-gray-700 mb-3">Madina Estate, Accra, Ghana</p>
                    <a 
                      href="tel:+233530505031"
                      className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+233 530 505 031</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <QuickLinks 
                links={[
                  {
                    name: 'celestialwebsolutions.net',
                    href: 'https://www.celestialwebsolutions.net',
                    label: 'Visit Website',
                    isImage: false
                  },
                  {
                    name: 'WhatsApp Support',
                    href: whatsappLink,
                    label: 'Chat',
                    isImage: true,
                    imageUrl: 'https://img.freepik.com/premium-vector/circle-whatsapp-logotype-icon-social-media-app-network-application-popular-editorial-brand-vector-illustration_913857-391.jpg?semt=ais_hybrid&w=740&q=80'
                  }
                ]}
              />

              {/* Back to Home */}
              <div className="text-center pt-8 border-t">
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
