import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Premium Bunk Beds | Kids & Loft Bunk Beds - My Space Furniture',
  description: 'Shop premium bunk beds at My Space Furniture. Browse kids bunk beds, loft beds, and twin over twin options. Quality furniture with expert service.',
  keywords: 'bunk beds, loft beds, kids furniture, twin beds, bunk bed sets',
  openGraph: {
    title: 'Premium Bunk Beds - My Space Furniture',
    description: 'Discover quality bunk beds and loft beds for kids and guests',
    type: 'website',
  },
}

export default function BunkBeds() {
  const bunkBedImages = Array.from({ length: 33 }, (_, i) => 
    `/products/bunk-bed-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Bunk Beds"
        subtitle="Premium bunk beds and loft beds for every room"
        heroImage="/images/heroes/bunk-beds-hero.webp"
      />

      <main>
        <ProductGrid
          title="Bunk Beds Collection"
          description="Browse our extensive selection of bunk beds and loft beds in various styles and configurations. Perfect for kids' rooms, guest rooms, and small spaces."
          images={bunkBedImages}
        />
      </main>

      <Footer />
    </>
  )
}
