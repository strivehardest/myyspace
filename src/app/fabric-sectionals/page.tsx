import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Fabric Sectionals | Quality Seating - My Space Furniture',
  description: 'Shop premium fabric sectionals at My Space Furniture. Browse contemporary and traditional fabric sectional options. Quality furniture with expert service.',
  keywords: 'fabric sectionals, sectional couches, fabric seating, furniture, upholstered sectionals',
  openGraph: {
    title: 'Premium Fabric Sectionals - My Space Furniture',
    description: 'Discover quality fabric sectionals in various styles',
    type: 'website',
  },
}

export default function FabricSectionals() {
  const fabricSectionalImages = Array.from({ length: 42 }, (_, i) => 
    `/products/fabric-sectional-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Fabric Sectionals"
        subtitle="Premium fabric sectionals for comfortable living spaces"
        heroImage="/images/heroes/fabric-sectionals-hero.webp"
      />

      <main>
        <ProductGrid
          title="Fabric Sectionals Collection"
          description="Browse our extensive selection of premium fabric sectionals in various styles, fabrics, and configurations. From modern to classic, find the perfect fabric sectional for your living room."
          images={fabricSectionalImages}
        />
      </main>

      <Footer />
    </>
  )
}
