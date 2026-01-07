"use client";
import React from 'react';
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'


export default function CustomFurniture() {
  const customFurnitureImages = [
    '/products/custom-furniture/custom-sectional-1.webp',
    '/products/custom-furniture/custom-sofa-1.webp',
    '/products/custom-furniture/custom-bedroom-1.webp',
  ];
  const [current, setCurrent] = React.useState(0);
  const handlePrev = () => setCurrent((prev) => (prev === 0 ? 2 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === 2 ? 0 : prev + 1));

  return (
    <>

      <Header />
      {/* Hero Section with Video */}
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
        <div className="relative z-10 text-center text-white px-4 pt-32 md:pt-48">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 uppercase">
            Custom Furniture
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100">
            Design your perfect furniture tailored to your unique needs and style
          </p>
        </div>
      </section>

      <main>
        {/* Gallery Section - same carousel format */}
        <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden mt-4 md:mt-24">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={customFurnitureImages[current]}
              alt={`Gallery Image ${current + 1}`}
              className="w-full h-auto max-h-[40vh] md:max-h-[80vh] object-contain mx-auto rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-[#b8845c] bg-white p-2 md:p-4"
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
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
            {customFurnitureImages.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-4 h-4 rounded-full border-2 border-[#b8845c] ${current === idx ? 'bg-[#b8845c]' : 'bg-[#e5c7a0]'} transition`}
              />
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Custom Furniture Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Browse Styles', description: 'Explore our custom furniture inspirations and configurations.' },
                { step: '2', title: 'Choose Specs', description: 'Select dimensions, materials, colors, and configuration options.' },
                { step: '3', title: 'Get Quote', description: 'Receive a detailed quote for your custom furniture.' },
                { step: '4', title: 'Place Order', description: 'Order with flexible financing and enjoy white-glove delivery.' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-3">{item.step}</div>
                  <h3 className="font-playfair font-bold text-primary-blue mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
