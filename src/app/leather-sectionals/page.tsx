"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function LeatherSectionals() {
  const images = Array.from({ length: 31 }, (_, i) => `/products/leather-sectional-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Leather Sectionals"
        subtitle="Premium leather sectionals for sophisticated living spaces"
        heroImage="/images/heroes/leather-sectionals-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Leather Sectional" />
      </main>
      <Footer />
    </>
  )
}

