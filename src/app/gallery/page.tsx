"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function Gallery() {
  const images = [
    ...Array.from({ length: 84 }, (_, i) => `/products/gallery/gallery-${i + 1}.webp`),
    "/products/gallery/gallery (1).jpeg",
    "/products/gallery/gallery (2).jpeg",
    "/products/gallery/gallery (3).jpeg",
    "/products/gallery/gallery (4).jpeg",
    "/products/gallery/gallery (5).jpeg",
    "/products/gallery/gallery (6).jpeg"
  ];

  return (
    <>
      <Header />
      <PageHeader 
        title="Gallery"
        subtitle="Explore our collection of beautiful furniture and inspiring interior designs"
        heroImage="/images/heroes/gallery-hero.webp"
      />

      <main>
        <ImageSwiper images={images} alt="Gallery" />
      </main>

      <Footer />
    </>
  )
}
