"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function Mattresses() {
  const images = Array.from({ length: 21 }, (_, i) => `/products/mattress-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Mattresses"
        subtitle="Premium mattresses for the perfect night's sleep"
        heroImage="/images/heroes/mattresses-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Mattress" />
      </main>
      <Footer />
    </>
  )
}
