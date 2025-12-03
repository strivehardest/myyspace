'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CategoryCard {
  href: string
  title: string
  image: string
}

interface FeaturedCategoriesProps {
  categories: CategoryCard[]
}

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Link
          key={category.href}
          href={category.href}
          className="group rounded-lg border-2 border-light-gray hover:border-primary-blue hover:shadow-lg transition-all overflow-hidden"
        >
          <div className="relative w-full h-64 bg-light-gray">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-playfair font-semibold text-primary-blue mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600 group-hover:text-primary-blue transition">
              Explore our collection →
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
