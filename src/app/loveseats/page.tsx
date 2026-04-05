"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function Loveseats() {
  const images = Array.from({ length: 34 }, (_, i) => `/products/loveseat-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Sofas & Loveseats"
        subtitle="Premium sofas and loveseats for cozy seating spaces"
        heroImage="/images/heroes/loveseats-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Sofa & Loveseat" />
      </main>
      <Footer />
    </>
  )
}
