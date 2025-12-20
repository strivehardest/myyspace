import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Gallery | My Space Furniture - Furniture Collections Showcase',
  description: 'Browse our gallery of beautiful furniture collections. View stunning interior designs featuring our mattresses, sofas, sectionals, bedroom sets, and more.',
  keywords: 'furniture gallery, interior design, furniture showcase, home decor, furniture inspiration',
  openGraph: {
    title: 'Furniture Gallery - My Space Furniture',
    description: 'Explore our curated collection of premium furniture',
    type: 'website',
  },
}

export default function Gallery() {
  const galleryImages = Array.from({ length: 84 }, (_, i) => 
    `/products/gallery/gallery-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Gallery"
        subtitle="Explore our collection of beautiful furniture and inspiring interior designs"
        heroImage="/images/heroes/gallery-hero.webp"
      />

      <main>
        <ProductGrid
          title="Featured Gallery"
          description="Browse through our curated selection of furniture collections and interior designs. Each image showcases the quality and craftsmanship of our premium furniture pieces."
          images={galleryImages}
        />

        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Transform Your Space</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Design Inspiration</h3>
                <p className="text-gray-700">Get inspired by our gallery of beautifully designed spaces. See how our furniture can transform any room into a stunning showcase.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-700">Each piece in our gallery represents the finest quality furniture. Discover premium materials and expert design in every collection.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Custom Solutions</h3>
                <p className="text-gray-700">Looking for something specific? Our custom furniture solutions can bring any design vision to life. Contact us for personalized options.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Expert Style Advice</h3>
                <p className="text-gray-700">Our design experts are ready to help you select pieces that match your style and space. Visit us or contact for professional guidance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
