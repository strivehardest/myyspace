"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function DiningTables() {
  const images = [
    ...Array.from({ length: 12 }, (_, i) => `/products/dining-table-${i + 1}.webp`),
    "/products/dinnig-table (1).jpeg",
    "/products/dinnig-table (2).jpeg",
    "/products/dinnig-table (3).jpeg",
    "/products/dinnig-table (4).jpeg",
    "/products/dinnig-table (5).jpeg",
    "/products/dinnig-table (6).jpeg",
    "/products/dinnig-table (7).jpeg",
    "/products/dinnig-table (8).jpeg",
    "/products/dinnig-table (9).jpeg",
    "/products/dinning-table (10).jpeg",
  ];

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
