"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function Sectionals() {
  const images = Array.from({ length: 12 }, (_, i) => `/products/sectional-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Sectionals"
        subtitle="Comfortable and stylish sectionals for any space"
        heroImage="/images/heroes/sectionals-hero.jpg"
      />
      <main>
        <ImageSwiper images={images} alt="Sectional" />
      </main>
      <Footer />
    </>
  )
}
