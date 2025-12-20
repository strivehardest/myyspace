import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Sofas & Loveseats | Compact Seating - My Space Furniture',
  description: 'Shop premium sofas and loveseats at My Space Furniture. Browse contemporary, traditional, and custom options. Quality seating furniture with expert service.',
  keywords: 'sofas, loveseats, sofa and loveseat, compact seating, furniture, contemporary seating',
  openGraph: {
    title: 'Premium Loveseats - My Space Furniture',
    description: 'Discover quality sofas and loveseats in various styles and fabrics',
    type: 'website',
  },
}

export default function Loveseats() {
  const loveseatImages = Array.from({ length: 34 }, (_, i) => 
    `/products/loveseat-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Sofas & Loveseats"
        subtitle="Premium sofas and loveseats for cozy seating spaces"
        heroImage="/images/heroes/loveseats-hero.webp"
      />

      <main>
        <ProductGrid
          title="Sofas & Loveseats Collection"
          description="Browse our extensive selection of sofas and loveseats in various styles, fabrics, and sizes. From contemporary to classic, find the perfect sofa or loveseat for your space."
          images={loveseatImages}
        />
      </main>

      <Footer />
    </>
  )
}
