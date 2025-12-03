import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
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
      <Header />
      
      {/* Welcome Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            My Space Furniture
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-2">
            Premium Furniture Store in Roseville, California
          </p>
          <p className="text-base md:text-lg text-blue-100">
            Transform your space with quality mattresses, sofas, sectionals, bedroom sets, and custom furniture
          </p>
        </div>
      </section>

      <HeroCarousel />
      
      <main>
        {/* Featured Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
              Featured Collections
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { href: '/mattresses', title: 'Mattresses & Bases', image: '/products/mattresses.webp' },
                { href: '/bunk-beds', title: 'Bunk Beds', image: '/products/bunk-bed-1.webp' },
                { href: '/sofas', title: 'Sofas', image: '/products/sofa.webp' },
                { href: '/bedroom-sets', title: 'Bedroom Sets', image: '/products/bedroom.webp' },
                { href: '/vanities', title: 'Vanities', image: '/products/vanity.webp' },
                { href: '/custom-furniture', title: 'Custom Furniture', image: '/products/custom.webp' },
              ].map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group rounded-lg border-2 border-light-gray hover:border-primary-blue hover:shadow-lg transition-all overflow-hidden"
                >
                  <div 
                    className="relative w-full h-64 bg-light-gray bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-primary-blue mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-primary-blue transition">
                      Explore our collection →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
              Why Choose My Space Furniture?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality Products',
                  description: 'Carefully curated furniture that meets our high standards for quality and durability.',
                },
                {
                  title: 'Expert Staff',
                  description: 'Our knowledgeable team is ready to help you find the perfect piece for your space.',
                },
                {
                  title: 'Custom Options',
                  description: 'Design your own furniture exactly as you envision it with our custom services.',
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Premium quality at fair prices with flexible financing options available.',
                },
                {
                  title: 'Professional Delivery',
                  description: 'Fast and reliable delivery service with white-glove handling.',
                },
                {
                  title: 'Customer Support',
                  description: 'Exceptional after-sales service and comprehensive warranty coverage.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-secondary-blue text-white relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('/images/cta-bg.jpg')` }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Transform Your Space Today
                </h2>
                <p className="text-lg md:text-xl mb-8 text-blue-100">
                  Explore our collection and find the perfect furniture for your home. Our expert team is ready to help you create the space of your dreams.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white text-primary-blue font-semibold rounded-lg hover:bg-light-gray transition shadow-lg"
                >
                  Get Started
                </Link>
              </div>
              
              {/* Image */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/get-started.webp')` }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
