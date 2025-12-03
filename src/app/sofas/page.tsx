import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Sofas | Quality Seating - My Space Furniture',
  description: 'Shop premium sofas at My Space Furniture. Browse contemporary, traditional, and custom sofa options. Quality furniture with expert service.',
  keywords: 'sofas, couches, seating, furniture, contemporary sofas, custom sofas',
  openGraph: {
    title: 'Premium Sofas - My Space Furniture',
    description: 'Discover quality sofas in various styles and fabrics',
    type: 'website',
  },
}

export default function Sofas() {
  const sofaImages = Array.from({ length: 12 }, (_, i) => 
    `/products/sofa-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Sofas"
        subtitle="Premium sofas for every style and comfort level"
        heroImage="/images/heroes/sofas-hero.jpg"
      />

      <main>
        <ProductGrid
          title="Sofa Collection"
          description="Browse our extensive selection of sofas in various styles, fabrics, and sizes. From contemporary to classic, find the perfect sofa for your living room."
          images={sofaImages}
        />
      </main>

      <Footer />
    </>
  )
}
