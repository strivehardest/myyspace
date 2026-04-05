"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function FabricSectionals() {
  const images = Array.from({ length: 42 }, (_, i) => `/products/fabric-sectional-${i + 1}.webp`);

  return (
    <>
      <Header />
      <PageHeader 
        title="Fabric Sectionals"
        subtitle="Premium fabric sectionals for comfortable living spaces"
        heroImage="/images/heroes/fabric-sectionals-hero.webp"
      />
      <main>
        <ImageSwiper images={images} alt="Fabric Sectional" />
      </main>
      <Footer />
    </>
  )
}
