"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function BunkBeds() {
  const images = Array.from({ length: 33 }, (_, i) => `/products/bunk-bed-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Bunk Beds"
        subtitle="Premium bunk beds and loft beds for every room"
        heroImage="/images/heroes/bunk-beds-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Bunk Bed" />
      </main>
      <Footer />
    </>
  )
}
