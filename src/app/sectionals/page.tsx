import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Sectional Sofas | Modern & Comfortable - My Space Furniture',
  description: 'Browse beautiful sectional sofas at My Space Furniture. Various sizes and configurations available. Premium quality with competitive pricing.',
  keywords: 'sectionals, sectional sofas, corner sofas, modular sofas, furniture, sectional sets, leather sectionals, fabric sectionals, custom sectionals, affordable sectionals, large sectionals, u-shaped sectional, l-shaped sectional, contemporary sectional',
  openGraph: {
    title: 'Sectional Sofas - My Space Furniture',
    description: 'Find your perfect sectional in multiple styles and sizes',
    type: 'website',
  },
}

export default function Sectionals() {
  const sectionalImages = Array.from({ length: 12 }, (_, i) => 
    `/products/sectional-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Sectionals"
        subtitle="Comfortable and stylish sectionals for any space"
        heroImage="/images/heroes/sectionals-hero.jpg"
      />

      <main>
        <ProductGrid
          title="Sectional Sofa Collection"
          description="Discover our selection of sectionals available in various sizes, fabrics, and configurations. Perfect for both small apartments and large living rooms."
          images={sectionalImages}
        />
      </main>

      <Footer />
    </>
  )
}
