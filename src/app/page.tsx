"use client";

import React, { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Typewriter from '@/components/Typewriter';

const categoriesBeforeWhyChoose = [
  { href: '/loveseats', title: 'Sofa & Loveseats', image: '/products/sofa.webp' },
  { href: '/bedroom-sets', title: 'Bedroom Sets', image: '/products/bedroom.webp' },
  { href: '/dining-tables', title: 'Dining', image: '/products/dining-table-2.webp' },
  { href: '/mattresses', title: 'Mattresses', image: '/products/mattresses.webp' },
  { href: '/bunk-beds', title: 'Bunk Beds', image: '/products/bunk-bed-3.webp' },
  { href: '/vanities', title: 'Vanities', image: '/products/vanity-33.webp' },
  { href: '/leather-sectionals', title: 'Leather Sectionals', image: '/products/leather-sectional-9.webp' },
];

const fabricSectionalCategory = { 
  href: '/fabric-sectionals', 
  title: 'Fabric Sectionals', 
  image: '/products/fabric-sectional-2.webp' 
};

function HeroVideoSequence() {
  const [videoIdx, setVideoIdx] = useState(0);
  const videos = [
    '/videos/hero4.mp4',
    '/videos/hero5.mp4',
  ];
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    // Loop back to first video
    setVideoIdx((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.load();
      videoEl.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, [videoIdx]);

  return (
    <video
      ref={videoRef}
      key={videos[videoIdx]}
      autoPlay
      muted
      playsInline
      loop={false}
      controls={false}
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
      onEnded={handleEnded}
    >
      <source src={videos[videoIdx]} type="video/mp4" />
    </video>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Video */}
      <section className="relative w-full min-h-[110vh] md:min-h-[130vh] flex items-center justify-center overflow-hidden">
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>

        {/* Background Videos (sequential) */}
        <HeroVideoSequence />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 pt-64 md:pt-80 lg:pt-96">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 uppercase">
            My Space Furniture
          </h1>
          
          {/* Sale Banner */}
          <div className="flex justify-center w-full mb-6">
            <div className="bg-white/90 text-black text-lg md:text-xl font-bold font-playfair px-6 py-2 rounded shadow-lg border border-gray-200 max-w-xl text-center tracking-wide uppercase" style={{letterSpacing:'0.08em'}}>
              Save up to <span className="text-[#b8845c]">50%</span> off your sale
            </div>
          </div>
          
          {/* Typewriter Text */}
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
        {/* Custom Furniture Section */}
        <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden my-16">
          {/* Hero Image */}
          <img
            src="/products/custom-furniture/custom-bedroom-1.webp"
            alt="Custom Furniture Hero - My Space Furniture"
            className="absolute inset-0 w-full h-full object-cover z-0"
            width={1920}
            height={800}
            loading="eager"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          {/* Content */}
          <div className="relative z-20 text-center text-white px-4 py-24 md:py-36 w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 uppercase">
              Custom Furniture
            </h2>
            <p className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Design your perfect furniture tailored to your unique needs and style. Choose your configuration, size, material, and color for a truly bespoke piece.
            </p>
            <Link 
              href="/custom-furniture" 
              className="inline-block px-10 py-4 bg-white text-[#b8845c] font-bold text-lg rounded-lg hover:bg-[#b8845c] hover:text-white transition shadow-lg uppercase tracking-wider"
            >
              Explore Custom Furniture
            </Link>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center items-center my-12">
          <hr className="w-full h-1 border-0 bg-gradient-to-r from-[#b8845c] via-[#e5c7a0] to-[#b8845c] rounded-full shadow-lg animate-pulse transition-all duration-700" />
        </div>

        {/* Featured Categories Grid */}
        <section className="w-full my-16">
          <div className="w-full px-0">
            <div className="grid grid-cols-1 gap-12">
              {categoriesBeforeWhyChoose.map((category, idx) => (
                <React.Fragment key={category.href}>
                  <Link
                    href={category.href}
                    className="group relative w-full h-72 md:h-screen overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-[#e5c7a0] bg-white/10 backdrop-blur-lg"
                  >
                    {/* Category Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300 z-0"
                      style={{ backgroundImage: `url('${category.image}')` }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all z-10" />
                    
                    {/* Text Content */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="text-center px-6 py-8 bg-black/40 rounded-xl shadow-lg border border-[#b8845c]">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 font-playfair uppercase drop-shadow-lg">
                          {category.title}
                        </h3>
                        <p className="text-[#e5c7a0] opacity-0 group-hover:opacity-100 transition font-playfair text-sm md:text-lg font-semibold tracking-wide drop-shadow">
                          Explore Collection →
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Divider after Sofa & Loveseats */}
                  {category.title === 'Sofa & Loveseats' && (
                    <div className="w-full flex justify-center items-center my-8">
                      <hr className="w-full h-1 border-0 bg-gradient-to-r from-[#b8845c] via-[#e5c7a0] to-[#b8845c] rounded-full shadow-lg animate-pulse transition-all duration-700" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center items-center my-12">
          <hr className="w-3/4 h-1 border-0 bg-gradient-to-r from-[#b8845c] via-[#e5c7a0] to-[#b8845c] rounded-full shadow-md" />
        </div>

        {/* Fabric Sectionals Section */}
        <section className="w-full my-16">
          <div className="w-full px-0">
            <div className="grid grid-cols-1 gap-12">
              <Link
                href={fabricSectionalCategory.href}
                className="group relative w-full h-72 md:h-screen overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-[#e5c7a0] bg-white/10 backdrop-blur-lg"
              >
                {/* Category Video - Fabric Sectionals Hero3 */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  width={1920}
                  height={800}
                  preload="auto"
                  poster="/products/fabric-sectionals/hero3.webp"
                >
                  <source src="/videos/hero3.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all z-10" />
                
                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center px-6 py-8 bg-black/40 rounded-xl shadow-lg border border-[#b8845c]">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 font-playfair uppercase drop-shadow-lg">
                      {fabricSectionalCategory.title}
                    </h3>
                    <p className="text-[#e5c7a0] opacity-0 group-hover:opacity-100 transition font-playfair text-sm md:text-lg font-semibold tracking-wide drop-shadow">
                      Explore Collection →
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center items-center my-12">
          <hr className="w-3/4 h-1 border-0 bg-gradient-to-r from-[#b8845c] via-[#e5c7a0] to-[#b8845c] rounded-full shadow-md" />
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#a0725a] my-16">
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
                  className="p-8 bg-white/10 rounded-lg border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
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

        {/* Divider */}
        <div className="w-full flex justify-center items-center my-12">
          <hr className="w-3/4 h-1 border-0 bg-gradient-to-r from-[#b8845c] via-[#e5c7a0] to-[#b8845c] rounded-full shadow-md" />
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-[#b8845c] my-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[#ebebeb] uppercase">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Visit our showroom or contact us today to explore our full collection of premium furniture.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#b8845c] font-bold text-lg rounded-lg hover:bg-[#b8845c] hover:text-white hover:border-white border-2 border-transparent transition shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}