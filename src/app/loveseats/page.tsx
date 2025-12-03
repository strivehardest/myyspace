import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Loveseats | Compact Seating - My Space Furniture',
  description: 'Shop premium loveseats at My Space Furniture. Browse contemporary, traditional, and custom loveseat options. Quality seating furniture with expert service.',
  keywords: 'loveseats, sofa loveseats, compact seating, furniture, contemporary loveseats',
  openGraph: {
    title: 'Premium Loveseats - My Space Furniture',
    description: 'Discover quality loveseats in various styles and fabrics',
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
        title="Loveseats"
        subtitle="Premium loveseats for cozy seating spaces"
        heroImage="/images/heroes/loveseats-hero.webp"
      />

      <main>
        <ProductGrid
          title="Loveseat Collection"
          description="Browse our extensive selection of loveseats in various styles, fabrics, and sizes. From contemporary to classic, find the perfect loveseat for your space."
          images={loveseatImages}
        />
      </main>

      <Footer />
    </>
  )
}
