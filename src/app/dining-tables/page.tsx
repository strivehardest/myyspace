import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Dining Tables | Quality Dining Furniture - My Space Furniture',
  description: 'Shop premium dining tables at My Space Furniture. Browse contemporary and traditional dining table options. Quality furniture with expert service.',
  keywords: 'dining tables, dining room furniture, tables, furniture, dining sets',
  openGraph: {
    title: 'Premium Dining Tables - My Space Furniture',
    description: 'Discover quality dining tables in various styles and sizes',
    type: 'website',
  },
}

export default function DiningTables() {
  const diningTableImages = Array.from({ length: 12 }, (_, i) => 
    `/products/dining-table-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Dining Tables"
        subtitle="Premium dining tables for gathering and dining"
        heroImage="/images/heroes/dining-tables-hero.webp"
      />

      <main>
        <ProductGrid
          title="Dining Tables Collection"
          description="Browse our extensive selection of dining tables in various styles, sizes, and materials. From modern to traditional, find the perfect dining table for your home."
          images={diningTableImages}
        />
      </main>

      <Footer />
    </>
  )
}
