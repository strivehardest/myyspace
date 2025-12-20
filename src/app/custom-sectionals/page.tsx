import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Custom Sectionals | Design Your Sectional - My Space Furniture',
  description: 'Design custom sectionals at My Space Furniture. Choose configuration, size, fabric, and color. Create your ideal sectional sofa.',
  keywords: 'custom sectionals, bespoke sectional sofas, made-to-order sectionals, sectional customization',
  openGraph: {
    title: 'Custom Sectionals - My Space Furniture',
    description: 'Create your perfect sectional with complete customization',
    type: 'website',
  },
}

export default function CustomSectionals() {
  const customSectionalImages = Array.from({ length: 26 }, (_, i) => 
    `/products/custom-sectional/custom-sectional-${i + 1}.webp`
  )

  return (
    <>
      <Header />
      <PageHeader 
        title="Custom Sectionals"
        subtitle="Design your perfect sectional tailored to your unique needs and style"
        heroImage="/images/heroes/custom-sectionals-hero.webp"
      />

      <main>
        <ProductGrid
          title="Custom Sectional Options"
          description="Browse inspirational custom sectional configurations. Select your preferred size, fabric, color, and configuration to create your dream sectional."
          images={customSectionalImages}
        />

        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Custom Sectional Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Browse Styles', description: 'Explore our custom sectional inspirations and configurations.' },
                { step: '2', title: 'Choose Specs', description: 'Select dimensions, fabrics, colors, and configuration options.' },
                { step: '3', title: 'Get Quote', description: 'Receive a detailed quote for your custom sectional.' },
                { step: '4', title: 'Place Order', description: 'Order with flexible financing and enjoy white-glove delivery.' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-3">{item.step}</div>
                  <h3 className="font-playfair font-bold text-primary-blue mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
