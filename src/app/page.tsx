
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Typewriter from '@/components/Typewriter'

export const metadata: Metadata = {
  title: 'My Space Furniture - Premium Furniture Store | Mattresses, Sofas & More',
  description: 'Discover premium furniture at My Space Furniture. Shop mattresses, sofas, sectionals, bedroom sets, dining room furniture, and custom options with expert service.',
  keywords: 'furniture store, my space furniture, mattresses, sofas, sectionals, bedroom sets, dining furniture, custom furniture, furniture near me, quality furniture, affordable furniture, modern furniture, contemporary furniture, luxury furniture, home furnishings, seating furniture, bedroom furniture, dining room, living room furniture, bedroom decor, USA furniture store, online furniture, furniture shopping',
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
      <section className="relative w-full min-h-[110vh] md:min-h-[130vh] flex items-center justify-center overflow-hidden">
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
          <source src="/videos/hero1.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content - Pushed down below header */}
        <div className="relative z-10 text-center text-white px-4 pt-64 md:pt-80 lg:pt-96">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 uppercase">
            My Space Furniture
          </h1>
          {/* Sale Banner Under Title */}
          <div className="flex justify-center w-full mb-6">
            <div className="bg-white/90 text-black text-lg md:text-xl font-bold font-playfair px-6 py-2 rounded shadow-lg border border-gray-200 max-w-xl text-center tracking-wide uppercase" style={{letterSpacing:'0.08em'}}>
              Save up to <span className="text-[#b8845c]">50%</span> off your sale
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            <Typewriter
              words={[
                "Premium Furniture for Your Perfect Home",
                "Custom Designs Tailored to You",
                "Luxury Comfort, Affordable Prices",
                "Expert Craftsmanship & Materials",
                "Modern Styles for Every Room",
                "Fast Delivery & White-Glove Service",
                "Transform Your Living Space Today"
              ]}
              typingSpeed={60}
              deletingSpeed={30}
              delay={1200}
              loop={true}
            />
          </p>
        </div>
      </section>


      <main className="bg-[#b8845c]">
        {/* Custom Furniture Section - Immediately after Hero, styled like hero */}
        <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
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
          <div className="relative z-10 text-center text-white px-4 py-24 md:py-36 w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 uppercase">Custom Furniture</h2>
            <p className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">Design your perfect furniture tailored to your unique needs and style. Choose your configuration, size, material, and color for a truly bespoke piece.</p>
            <Link href="/custom-furniture" className="inline-block px-10 py-4 bg-white text-[#b8845c] font-bold text-lg rounded-lg hover:bg-[#b8845c] hover:text-white transition shadow-lg uppercase tracking-wider">Explore Custom Furniture</Link>
          </div>
        </section>

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
                { href: '/leather-sectionals', title: 'Leather Sectionals', image: '/products/leather-sectional-9.webp', video: '/videos/hero2.mp4' },
                { href: '/fabric-sectionals', title: 'Fabric Sectionals', image: '/products/fabric-sectional-2.webp', video: '/videos/hero3.mp4' },
                // Removed Custom Furniture from here
                { href: '/gallery', title: 'Watch our Gallery', image: '/products/gallery/gallery-24.webp' },
              ].map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group relative w-full h-72 md:h-screen overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Category Image or Video for Sectionals */}
                  {(category.title === 'Leather Sectionals' || category.title === 'Fabric Sectionals') && category.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    >
                      <source src={category.video} type="video/mp4" />
                    </video>
                  ) : (
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300 z-0"
                      style={{ backgroundImage: `url('${category.image}')` }}
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all z-10" />
                  {/* Text Content */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
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
              className="inline-block px-10 py-4 bg-white text-[#b8845c] font-bold text-lg rounded-lg hover:bg-[#b8845c] hover:text-white transition shadow-lg"
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