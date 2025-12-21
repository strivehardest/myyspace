import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Custom Furniture | Design Your Own - My Space Furniture',
  description: 'Design custom furniture at My Space Furniture. Choose configuration, size, material, and color. Create your ideal piece.',
  keywords: 'custom furniture, bespoke sofas, made-to-order beds, furniture customization',
  openGraph: {
    title: 'Custom Furniture - My Space Furniture',
    description: 'Create your perfect furniture with complete customization',
    type: 'website',
  },
}

export default function CustomFurniture() {
  const customSectionalImages = Array.from({ length: 26 }, (_, i) =>
    `/products/custom-furniture/custom-sectional-${i + 1}.webp`
  );
  const customSofaImages = Array.from({ length: 26 }, (_, i) =>
    `/products/custom-furniture/custom-sofa-${i + 1}.webp`
  );
  const customBedroomImages = Array.from({ length: 31 }, (_, i) =>
    `/products/custom-furniture/custom-bedroom-${i + 1}.webp`
  );
  const customFurnitureImages = [
    ...customSectionalImages,
    ...customSofaImages,
    ...customBedroomImages,
  ];

  return (
    <>
      <Header />
      <PageHeader 
        title="Custom Furniture"
        subtitle="Design your perfect furniture tailored to your unique needs and style"
        heroImage="/images/heroes/custom-furniture-hero.jpg"
      />

      <main>
        <ProductGrid
          title="Custom Furniture Gallery"
          description="Browse inspirational custom furniture pieces. Select your preferred size, material, color, and configuration to create your dream furniture."
          images={customFurnitureImages}
        />

        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Custom Furniture Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Browse Styles', description: 'Explore our custom furniture inspirations and configurations.' },
                { step: '2', title: 'Choose Specs', description: 'Select dimensions, materials, colors, and configuration options.' },
                { step: '3', title: 'Get Quote', description: 'Receive a detailed quote for your custom furniture.' },
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
