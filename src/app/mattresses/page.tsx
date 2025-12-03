import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Quality Mattresses | Best Sleep Solutions - My Space Furniture',
  description: 'Discover premium mattresses at My Space Furniture. Quality brands, various firmness levels, and financing available. Sleep better tonight.',
  keywords: 'mattresses, beds, sleep, quality mattresses, memory foam, innerspring',
  openGraph: {
    title: 'Premium Mattresses - My Space Furniture',
    description: 'Find your perfect mattress for better sleep',
    type: 'website',
  },
}

export default function Mattresses() {
  const mattressImages = Array.from({ length: 21 }, (_, i) => 
    `/products/mattress-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Mattresses & Bases"
        subtitle="Find the perfect mattress for a good night's sleep"
        heroImage="/images/heroes/mattresses-hero.webp"
      />

      <main>
        <ProductGrid
          title="Premium Mattress Selection"
          description="Explore our comprehensive collection of quality mattresses from leading manufacturers. With options ranging from soft to firm support, we have the perfect mattress for every sleep preference."
          images={mattressImages}
        />

        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Why Choose Our Mattresses?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">100-Night Sleep Trial</h3>
                <p className="text-gray-700">Try your mattress risk-free for 100 nights. If you're not completely satisfied, we'll arrange a full refund or exchange.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">10-Year Warranty</h3>
                <p className="text-gray-700">All mattresses come with a comprehensive 10-year warranty covering defects in materials and workmanship.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Free Delivery</h3>
                <p className="text-gray-700">Get free delivery on mattress purchases over $1,000. Professional setup and old mattress removal available.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary-blue mb-3">Expert Assistance</h3>
                <p className="text-gray-700">Our sleep experts can help you find the perfect mattress based on your sleep position, weight, and firmness preference.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
