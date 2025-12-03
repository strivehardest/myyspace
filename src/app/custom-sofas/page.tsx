import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Custom Sofas | Design Your Perfect Sofa - My Space Furniture',
  description: 'Design custom sofas at My Space Furniture. Choose size, fabric, color, and features. Create your perfect sofa exactly as you imagine it.',
  keywords: 'custom sofas, bespoke sofas, made-to-order sofas, sofa customization',
  openGraph: {
    title: 'Custom Sofas - My Space Furniture',
    description: 'Create your perfect sofa with complete customization',
    type: 'website',
  },
}

export default function CustomSofas() {
  const customSofaImages = Array.from({ length: 26 }, (_, i) => 
    `/products/custom-sofa/custom-sofa-${i + 1}.webp`
  )

  return (
    <>p
      <Header />
      <PageHeader 
        title="Custom Sofas"
        subtitle="Design your perfect sofa tailored to your unique needs and style"
        heroImage="/images/heroes/custom-sofas-hero.webp"
      />

      <main>
        <ProductGrid
          title="Custom Sofa Options"
          description="Create your ideal sofa with complete customization. Choose size, fabric, leather, color, and special features like recliners or sleeper sofas."
          images={customSofaImages}
        />

        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Why Custom Sofas?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Perfect Fit',
                  description: 'Get exactly the dimensions you need for your space. No compromises on size or shape.',
                },
                {
                  title: 'Your Style',
                  description: 'Choose from hundreds of fabric and leather options to match your aesthetic perfectly.',
                },
                {
                  title: 'Quality Guaranteed',
                  description: 'Each custom sofa is crafted with premium materials and built to last for years.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg">
                  <h3 className="font-playfair font-bold text-primary-blue mb-3 text-lg">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
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
