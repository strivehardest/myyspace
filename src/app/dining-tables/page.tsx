"use client";
import React from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'


export default function DiningTables() {
  const diningTableImages = Array.from({ length: 12 }, (_, i) => 
    `/products/dining-table-${i + 1}.webp`
  );
  const [current, setCurrent] = React.useState(0);
  const handlePrev = () => setCurrent((prev) => (prev === 0 ? diningTableImages.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === diningTableImages.length - 1 ? 0 : prev + 1));

  return (
    <>
      <Header />
      <PageHeader 
        title="Dining Tables"
        subtitle="Premium dining tables for gathering and dining"
        heroImage="/images/heroes/dining-tables-hero.webp"
      />

      <main>
        <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden mt-4 md:mt-24">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={diningTableImages[current]}
              alt={`Dining Table Image ${current + 1}`}
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
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
            {diningTableImages.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-3 h-3 rounded-full border-2 border-[#b8845c] ${current === idx ? 'bg-[#b8845c]' : 'bg-[#e5c7a0]'} transition`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
