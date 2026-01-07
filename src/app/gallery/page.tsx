"use client";
import React from 'react';
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'


export default function Gallery() {
  const galleryImages = Array.from({ length: 84 }, (_, i) => 
    `/products/gallery/gallery-${i + 1}.webp`
  );
  const [current, setCurrent] = React.useState(0);
  const handlePrev = () => setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <>
      <Header />
      <PageHeader 
        title="Gallery"
        subtitle="Explore our collection of beautiful furniture and inspiring interior designs"
        heroImage="/images/heroes/gallery-hero.webp"
      />

      <main>
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden mt-16 md:mt-24">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={galleryImages[current]}
              alt={`Gallery Image ${current + 1}`}
              className="w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain mx-auto rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-[#b8845c] bg-white p-2 md:p-4"
              style={{ maxWidth: '98vw' }}
            />
          </div>
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              className="bg-[#b8845c] text-white rounded-full p-2 shadow-xl hover:bg-[#a0725a] transition"
              aria-label="Previous image"
              style={{ fontSize: '1.25rem' }}
            >
              &#8592;
            </button>
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              className="bg-[#b8845c] text-white rounded-full p-2 shadow-xl hover:bg-[#a0725a] transition"
              aria-label="Next image"
              style={{ fontSize: '1.25rem' }}
            >
              &#8594;
            </button>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
            {galleryImages.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-3 h-3 rounded-full border-2 border-[#b8845c] ${current === idx ? 'bg-[#b8845c]' : 'bg-[#e5c7a0]'} transition`}
              />
            ))}
          </div>
        </section>

        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Transform Your Space</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Design Inspiration</h3>
                <p className="text-gray-700">Get inspired by our gallery of beautifully designed spaces. See how our furniture can transform any room into a stunning showcase.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-700">Each piece in our gallery represents the finest quality furniture. Discover premium materials and expert design in every collection.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Custom Solutions</h3>
                <p className="text-gray-700">Looking for something specific? Our custom furniture solutions can bring any design vision to life. Contact us for personalized options.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Expert Style Advice</h3>
                <p className="text-gray-700">Our design experts are ready to help you select pieces that match your style and space. Visit us or contact for professional guidance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
