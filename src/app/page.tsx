import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Space Furniture - Premium Furniture Store | Mattresses, Sofas & More',
  description: 'Discover premium furniture at My Space Furniture. Shop mattresses, sofas, sectionals, bedroom sets, dining room furniture, and custom options with expert service.',
  keywords: 'furniture store, mattresses, sofas, sectionals, bedroom sets, dining furniture, custom furniture near me',
  openGraph: {
    title: 'My Space Furniture - Your Home Deserves Better',
    description: 'Premium furniture solutions for every room in your home',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Video - Full Coverage */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 mt-20">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4 uppercase">
            My Space Furniture
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Premium Furniture for Your Perfect Home
          </p>
        </div>
      </section>

      <main className="bg-[#b8845c]">
        {/* Featured Categories Grid - Full Screen Coverage */}
        <section className="w-full">
          <div className="w-full px-0">
            <div className="grid grid-cols-1 gap-0">
              {[
                { href: '/loveseats', title: 'Sofa & Loveseats', image: '/products/sofa.webp' },
                { href: '/bedroom-sets', title: 'Bedroom Sets', image: '/products/bedroom.webp' },
                { href: '/dining-tables', title: 'Dining', image: '/products/dining-table-2.webp' },
                { href: '/mattresses', title: 'Mattresses', image: '/products/mattresses.webp' },
                { href: '/bunk-beds', title: 'Bunk Beds', image: '/products/bunk-bed-3.webp' },
                { href: '/vanities', title: 'Vanities', image: '/products/vanity-33.webp' },
                { href: '/leather-sectionals', title: 'Leather Sectionals', image: '/products/leather-sectional-9.webp' },
                { href: '/fabric-sectionals', title: 'Fabric Sectionals', image: '/products/fabric-sectional-2.webp' },
                { href: '/custom-sectionals', title: 'Custom Sectionals', image: '/products/custom.webp' },
                { href: '/custom-sofas', title: 'Custom Sofas', image: '/products/custom.webp' },
                { href: '/custom-bedroom-sets', title: 'Custom Bedroom', image: '/products/custom.webp' },
                { href: '/gallery', title: 'Watch our Gallery', image: '/products/gallery/gallery-24.webp' },
              ].map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group relative w-full h-72 md:h-screen overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Category Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all" />
                  
                  {/* Text Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 font-playfair uppercase">
                        {category.title}
                      </h3>
                      <p className="text-[#ebebeb] opacity-0 group-hover:opacity-100 transition font-playfair text-sm md:text-lg">
                        Explore Collection →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#a0725a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-[#ebebeb] uppercase">
              Why Choose My Space Furniture?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Premium Quality',
                  description: 'Carefully curated furniture that meets our high standards for quality and durability.',
                },
                {
                  title: 'Expert Team',
                  description: 'Our knowledgeable staff is ready to help you find the perfect piece for your space.',
                },
                {
                  title: 'Custom Design',
                  description: 'Design your own furniture exactly as you envision it with our custom services.',
                },
                {
                  title: 'Competitive Prices',
                  description: 'Premium quality at fair prices with flexible financing options available.',
                },
                {
                  title: 'Fast Delivery',
                  description: 'Professional delivery service with white-glove handling and setup.',
                },
                {
                  title: 'Support',
                  description: 'Exceptional customer service and comprehensive warranty coverage.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-white/10 rounded-lg border border-white/20 backdrop-blur"
                >
                  <h3 className="text-xl font-bold text-[#ebebeb] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#b8845c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[#ebebeb] uppercase">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Visit our showroom or contact us today to explore our full collection of premium furniture.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#b8845c] font-bold text-lg rounded-lg hover:bg-[#ebebeb] transition shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
