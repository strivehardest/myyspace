import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata: Metadata = {
  title: 'Custom Furniture Design | Bespoke Sofas & Sectionals - My Space Furniture',
  description: 'Design custom furniture at My Space Furniture. Create custom sofas, sectionals, and loveseats tailored to your exact specifications and style.',
  keywords: 'custom furniture, custom sofas, custom sectionals, bespoke furniture design',
  openGraph: {
    title: 'Custom Furniture - My Space Furniture',
    description: 'Design your perfect piece tailored to your unique needs',
    type: 'website',
  },
}

export default function CustomFurniture() {
  return (
    <>
      <Header />
      <PageHeader 
        title="Custom Furniture"
        subtitle="Design your perfect piece tailored to your unique needs"
        heroImage="/images/heroes/custom-furniture-hero.jpg"
      />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Custom Sectionals',
                description: 'Design your perfect sectional with custom dimensions, fabrics, and configurations.',
                href: '/custom-sectionals',
              },
              {
                title: 'Custom Sofas',
                description: 'Create a sofa that matches your exact specifications and style preferences.',
                href: '/custom-sofas',
              },
              {
                title: 'Custom Bedroom Sets',
                description: 'Craft the perfect bedroom set for your unique space and comfort needs.',
                href: '/custom-bedroom-sets',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border-2 border-light-gray hover:border-primary-blue hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-2xl font-playfair font-bold text-primary-blue mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <a
                  href={item.href}
                  className="inline-block px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue transition"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>

          <section className="bg-light-gray rounded-lg p-12 text-center">
            <h2 className="text-3xl font-playfair font-bold text-primary-blue mb-6">Design Your Custom Piece</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              With our custom furniture options, you have complete control over every detail. Choose your dimensions, select from premium fabrics and leathers, pick your color, and configure your piece exactly how you want it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-blue mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21H7a2 2 0 01-2-2V5a2 2 0 012-2h2m0 0h2V3m-2 0h0m0 0v11m0 0v-2.5m0 2.5h5m-5 0V7" />
                  </svg>
                </div>
                <h3 className="font-playfair font-bold text-primary-blue mb-2">Custom Dimensions</h3>
                <p className="text-gray-700 text-sm">Get the exact size you need for your space.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-blue mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-playfair font-bold text-primary-blue mb-2">Premium Materials</h3>
                <p className="text-gray-700 text-sm">Choose from quality fabrics and leathers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-blue mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-playfair font-bold text-primary-blue mb-2">Perfect Configuration</h3>
                <p className="text-gray-700 text-sm">Customize layout and features to suit you.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-blue mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="5" r="1" />
                    <circle cx="5" cy="19" r="1" />
                    <path stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth={1.5} d="M5 19l7-14m7 0l-7 14" />
                  </svg>
                </div>
                <h3 className="font-playfair font-bold text-primary-blue mb-2">Expert Design Help</h3>
                <p className="text-gray-700 text-sm">Our team guides you through the process.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
