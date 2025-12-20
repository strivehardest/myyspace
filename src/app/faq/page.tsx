'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

const faqCategories: FAQCategory[] = [
  {
    title: 'Custom Furniture & Customization',
    items: [
      {
        question: 'Can I custom order furniture from your store?',
        answer: 'Yes! We custom build furniture right here in Roseville, CA. We can customize the size, color, layout, and feel of any piece. Whether you need a custom sectional, sofa, bedroom set, or dining configuration, we can build exactly what you need to furnish your home. Visit us today to discuss your custom furniture needs!',
      },
    ],
  },
  {
    title: 'Financing & Payments',
    items: [
      {
        question: 'Do you offer any financing or layaway options?',
        answer: 'Yes! We offer various flexible financing options for your furniture purchases. We have payment plans to fit different budgets and credit situations. Contact us or stop by our Roseville showroom today to learn more about our financing options and terms.',
      },
    ],
  },
  {
    title: 'Brands & Quality',
    items: [
      {
        question: 'What brands of furniture and mattresses do you sell?',
        answer: 'My Space Furniture offers top-quality furniture and mattresses. We carry premium brands including Sealy, Beauty Rest, Sapphire, and others at amazing prices! According to consumer research, 81% of consumers ranked quality as the top factor in furniture purchases. We match prices too, ensuring you get the best value for premium quality furniture.',
      },
    ],
  },
  {
    title: 'Delivery & Service',
    items: [
      {
        question: 'Do you offer free delivery?',
        answer: 'We offer delivery and pick-up options for furniture. Delivery fees apply depending on your location and the size of your order. Stop by our showroom today to learn more about our delivery options and pricing.',
      },
      {
        question: 'Do you offer room sets?',
        answer: 'Absolutely! Our selection includes complete bedroom sets for adults and children. You can choose from mattresses, bed frames, vanities, and bunk beds. We even offer custom bedroom designs tailored to your specific needs and preferences. Visit us to explore our full selection of bedroom furniture solutions.',
      },
    ],
  },
]

export default function FAQ() {
  const [activeItems, setActiveItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setActiveItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <>
      <Header />
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products and services"
        heroImage="/images/heroes/faq-hero.webp"
      />

      <main className="py-16 md:py-24 bg-[#b8845c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <section key={catIndex} className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-6 uppercase">{category.title}</h2>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const itemId = `faq-${catIndex}-${itemIndex}`
                  const isActive = activeItems.includes(itemId)
                  return (
                    <div
                      key={itemIndex}
                      className="border border-light-gray rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 bg-light-gray hover:bg-blue-50 text-left font-semibold text-primary-blue transition flex justify-between items-center"
                      >
                        <span>{item.question}</span>
                        <span className={`transition-transform ${isActive ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      {isActive && (
                        <div className="px-6 py-4 bg-white text-gray-700 border-t border-light-gray">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          ))}

          {/* Contact Section */}
          <section className="mt-16 bg-light-gray rounded-lg p-12 text-center">
            <h2 className="text-3xl font-playfair font-bold text-primary-blue mb-4 uppercase">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Can't find the answer you're looking for? Our customer service team is here to help!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-secondary-blue transition"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
