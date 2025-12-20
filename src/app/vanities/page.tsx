import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Vanities | Bedroom & Bathroom Vanities - My Space Furniture',
  description: 'Shop premium vanities at My Space Furniture. Browse bathroom and bedroom vanities in various styles and sizes. Quality furniture with expert service.',
  keywords: 'vanities, bathroom vanities, bedroom vanities, furniture, vanity sets',
  openGraph: {
    title: 'Premium Vanities - My Space Furniture',
    description: 'Discover quality vanities in various styles and sizes',
    type: 'website',
  },
}

export default function Vanities() {
  const vanityImages = Array.from({ length: 52 }, (_, i) => 
    `/products/vanity-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Vanities"
        subtitle="Premium vanities for bedroom and bathroom spaces"
        heroImage="/images/heroes/vanities-hero.webp"
      />

      <main>
        <ProductGrid
          title="Vanities Collection"
          description="Browse our extensive selection of vanities in various styles, finishes, and sizes. From modern to traditional, find the perfect vanity for your space."
          images={vanityImages}
        />
      </main>

      <Footer />
    </>
  )
}
