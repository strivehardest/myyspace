import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Custom Bedroom Sets | Personalized Sleep Furniture - My Space Furniture',
  description: 'Design your custom bedroom sets at My Space Furniture. Choose materials, colors, and styles. Quality custom furniture with expert service.',
  keywords: 'custom bedroom sets, custom beds, personalized bedroom furniture, bespoke bedroom design',
  openGraph: {
    title: 'Custom Bedroom Sets - My Space Furniture',
    description: 'Create your perfect custom bedroom set',
    type: 'website',
  },
}

export default function CustomBedroomSets() {
  const customBedroomImages = Array.from({ length: 31 }, (_, i) => 
    `/products/custom-bedroom-set/custom-bedroom-set-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Custom Bedroom Sets"
        subtitle="Design your perfect custom bedroom set"
        heroImage="/images/heroes/custom-bedroom-sets-hero.webp"
      />

      <main>
        <ProductGrid
          title="Custom Bedroom Sets Collection"
          description="Create your perfect bedroom set with our custom design options. Choose from various styles, materials, colors, and configurations to match your personal aesthetic and needs."
          images={customBedroomImages}
        />
      </main>

      <Footer />
    </>
  )
}
