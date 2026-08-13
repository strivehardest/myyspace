"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ImageSwiper from '@/components/ImageSwiper'

export default function Loveseats() {
  const images = [
    ...Array.from({ length: 34 }, (_, i) => `/products/loveseat-${i + 1}.webp`),
    "/products/loveseat (1).jpeg",
    "/products/loveseat (2).jpeg",
    "/products/loveseat (3).jpeg",
    "/products/loveseat (4).jpeg",
    "/products/loveseat (5).jpeg",
    "/products/loveseat (6).jpeg",
    "/products/loveseat (7).jpeg",
    "/products/loveseat (8).jpeg",
    "/products/loveseat (9).jpeg",
    "/products/loveseat (10).jpeg",
    "/products/loveseat (11).jpeg",
    "/products/loveseat (12).jpeg",
    "/products/loveseat (13).jpeg",
    "/products/loveseat (14).jpeg"
  ];

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
