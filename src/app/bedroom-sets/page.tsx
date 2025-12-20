import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Bedroom Sets | Complete Bedroom Solutions - My Space Furniture',
  description: 'Shop complete bedroom sets at My Space Furniture. Bed frames, dressers, nightstands. Create your perfect bedroom with quality furniture.',
  keywords: 'bedroom sets, bed frames, dressers, nightstands, bedroom furniture, complete bedroom sets, modern bedroom, contemporary bedroom, luxury bedroom, affordable bedroom sets, queen bedroom set, king bedroom set, master bedroom, guest bedroom, bedroom decor',
  openGraph: {
    title: 'Bedroom Sets - My Space Furniture',
    description: 'Complete bedroom solutions for restful nights',
    type: 'website',
  },
}

export default function BedroomSets() {
  const bedroomImages = Array.from({ length: 78 }, (_, i) => 
    `/products/bedroom-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Bedroom Sets"
        subtitle="Complete bedroom solutions for restful nights"
        heroImage="/images/heroes/bedroom-sets-hero.webp"
      />

      <main>
        <ProductGrid
          title="Bedroom Collection"
          description="Create your perfect bedroom with our selection of bed frames, nightstands, dressers, and complete bedroom sets. Quality craftsmanship for lasting comfort."
          images={bedroomImages}
        />
      </main>

      <Footer />
    </>
  )
}
