"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function BedroomSets() {
  const images = Array.from({ length: 78 }, (_, i) => `/products/bedroom-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Bedroom Sets"
        subtitle="Complete bedroom solutions for restful nights"
        heroImage="/images/heroes/bedroom-sets-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Bedroom Set" />
      </main>
      <Footer />
    </>
  )
}
