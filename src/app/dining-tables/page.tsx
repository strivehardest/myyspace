"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function DiningTables() {
  const images = Array.from({ length: 12 }, (_, i) => `/products/dining-table-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Dining Tables"
        subtitle="Elegant dining tables for memorable gatherings"
        heroImage="/images/heroes/dining-tables-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Dining Table" />
      </main>
      <Footer />
    </>
  )
}
