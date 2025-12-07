import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Flexible Financing Options | My Space Furniture',
  description: 'Explore financing options at My Space Furniture. Flexible payment plans, special rates, and easy approvals for your furniture purchase.',
  keywords: 'financing, payment plans, flexible payments, furniture financing',
  openGraph: {
    title: 'Financing Options - My Space Furniture',
    description: 'Make your furniture purchase affordable with flexible financing',
    type: 'website',
  },
}

export default function Financing() {
  return (
    <>
      <Header />
      <PageHeader 
        title="Flexible Financing"
        subtitle="Make your furniture purchase affordable with our financing options"
        heroImage="/images/heroes/financing-hero.webp"
      />

      <main className="py-16 md:py-24 bg-[#b8845c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-[#ebebeb] uppercase">Flexible Payment Options</h2>
            <p className="text-lg text-[#ebebeb] max-w-3xl mx-auto">
              At My Space Furniture, we offer various flexible payment options. Choose the best option for your needs and make your furniture purchase affordable today!
            </p>
          </section>

          {/* Financing Options */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Snap Finance',
                terms: '100 Days No Interest',
                duration: 'Up to 18 Months',
                description: 'Flexible financing with 100 days no interest option. Extended payment terms available up to 18 months.',
                features: [
                  '100 days no interest',
                  'Payment terms up to 18 months',
                  'Quick approval process',
                  'No credit needed*',
                ],
                link: 'https://app.snapfinance.com/origination?paramId=3w%2FEWVFzVGcQioSdKn1vuqdr2hNr3A1xiMt4CtG%2BqOVzBLFbDs0lrpCWfkdCvNKE7NiJor%2BcWcRld9e3IFdUTA%3D%3D',
                cta: 'Apply with Snap Finance',
              },
              {
                title: 'Synchrony',
                terms: 'Promotional Financing',
                duration: 'Flexible Terms',
                description: 'Promotional financing available with flexible payment terms and special offers for qualified customers.',
                featured: true,
                features: [
                  'Promotional financing available',
                  'Flexible payment terms',
                  'Subject to credit approval',
                  'Competitive rates',
                ],
                link: 'https://www.synchrony.com/mmc/GY232172807',
                cta: 'Apply with Synchrony',
              },
              {
                title: 'Acima',
                terms: '90 Days No Interest',
                duration: 'Up to 12 Months',
                description: 'Get 90 days no interest financing with up to 12 months to pay. Easy approval and flexible payment schedules.',
                features: [
                  '90 days no interest',
                  'Up to 12 months no payments',
                  'Quick application',
                  'Flexible schedules',
                ],
                link: 'https://ams.acima.com/discover/new?utm_campaign=merchant&utm_source=web&merchant_guid=merc-b16674d6-f463-4052-adac-224d1d755e4b#/select_location',
                cta: 'Apply with Acima',
              },
            ].map((option, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 transition-all flex flex-col ${
                  option.featured
                    ? 'border-2 border-primary-blue bg-white shadow-lg relative'
                    : 'border-2 border-light-gray bg-white hover:border-primary-blue hover:shadow-lg'
                }`}
              >
                {option.featured && (
                  <div className="absolute -top-4 right-6 bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-playfair font-bold text-primary-blue mb-4">{option.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="inline-block bg-light-gray text-primary-blue px-3 py-1 rounded font-bold text-sm">
                    {option.terms}
                  </span>
                  <span className="inline-block bg-light-gray text-primary-blue px-3 py-1 rounded font-bold text-sm">
                    {option.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-sm text-gray-700 flex items-start">
                      <svg className="w-4 h-4 mr-2 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-2 bg-primary-blue text-white font-semibold rounded-lg hover:bg-secondary-blue transition"
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </section>

          {/* Financing Information Section */}
          <section className="mb-16 bg-white/10 rounded-lg p-8 md:p-12 backdrop-blur">
            <h2 className="text-3xl font-playfair font-bold mb-8 text-[#ebebeb] uppercase">Why Choose Our Financing Options?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-4">Affordable Payment Plans</h3>
                <p className="text-[#ebebeb] mb-4 leading-relaxed">
                  We understand that premium furniture is an investment. That's why we partner with trusted financing companies to offer flexible payment plans that fit your budget. Whether you need short-term financing or extended payment terms, we have options that work for you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-4">Quick Approval Process</h3>
                <p className="text-[#ebebeb] mb-4 leading-relaxed">
                  Our financing partners use advanced technology to provide quick approvals—often in minutes. With minimal documentation and simple application processes, you can get approved and start enjoying your new furniture right away.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-4">Flexible Terms & No Hidden Fees</h3>
                <p className="text-[#ebebeb] mb-4 leading-relaxed">
                  Choose payment terms that work best for your situation. Our financing options come with transparent pricing—no hidden fees or surprise charges. You'll know exactly what you're paying before you apply.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-bold text-[#ebebeb] mb-4">Special Promotional Offers</h3>
                <p className="text-[#ebebeb] mb-4 leading-relaxed">
                  Take advantage of special promotional financing offers including interest-free periods and extended payment terms. These limited-time offers make premium furniture more accessible than ever before.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#b8845c] border-l-4 border-white rounded">
              <h4 className="text-lg font-playfair font-bold text-[#ebebeb] mb-3">How It Works</h4>
              <ol className="text-[#ebebeb] space-y-2 ml-4">
                <li className="list-decimal"><span className="font-semibold">Browse our collection</span> and select your favorite furniture pieces</li>
                <li className="list-decimal"><span className="font-semibold">Choose your financing option</span> based on your preferences and budget</li>
                <li className="list-decimal"><span className="font-semibold">Complete the quick application</span> with our financing partners</li>
                <li className="list-decimal"><span className="font-semibold">Get instant or quick approval</span> and start shopping</li>
                <li className="list-decimal"><span className="font-semibold">Make affordable monthly payments</span> at your own pace</li>
              </ol>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-gradient-to-r from-primary-blue to-secondary-blue text-white rounded-lg p-12 mb-16 relative overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url('/images/cta-bg.webp')` }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-playfair font-bold mb-4">Questions About Our Financing Options?</h2>
              <p className="text-lg mb-6 text-blue-100">
                Contact us today to learn more about our flexible payment options and find the perfect plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:(916)661-1073" className="inline-block px-8 py-3 bg-white text-primary-blue font-semibold rounded-lg hover:bg-light-gray transition">
                  Call: (916) 661-1073
                </a>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-blue transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
