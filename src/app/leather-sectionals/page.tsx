import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Leather Sectionals | Quality Seating - My Space Furniture',
  description: 'Shop premium leather sectionals at My Space Furniture. Browse contemporary and traditional leather sectional options. Quality furniture with expert service.',
  keywords: 'leather sectionals, sectional couches, leather seating, furniture, premium sectionals',
  openGraph: {
    title: 'Premium Leather Sectionals - My Space Furniture',
    description: 'Discover quality leather sectionals in various styles',
    type: 'website',
  },
}

export default function LeatherSectionals() {
  const leatherSectionalImages = Array.from({ length: 31 }, (_, i) => 
    `/products/leather-sectional-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Leather Sectionals"
        subtitle="Premium leather sectionals for sophisticated living spaces"
        heroImage="/images/heroes/leather-sectionals-hero.webp"
      />

      <main>
        <ProductGrid
          title="Leather Sectionals Collection"
          description="Browse our extensive selection of premium leather sectionals in various styles and configurations. From modern to classic, find the perfect leather sectional for your living room."
          images={leatherSectionalImages}
        />
      </main>

      <Footer />
    </>
  )
}
