"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function Vanities() {
  const images = Array.from({ length: 52 }, (_, i) => `/products/vanity-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Vanities"
        subtitle="Premium vanities for bedroom and bathroom spaces"
        heroImage="/images/heroes/vanities-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Vanity" />
      </main>
      <Footer />
    </>
  )
}
