'use client'

import Image from 'next/image'

interface PageHeaderProps {
  title: string
  subtitle?: string
  heroImage?: string
  compact?: boolean
}

export default function PageHeader({ title, subtitle, heroImage, compact = false }: PageHeaderProps) {
  const heightClass = compact ? 'h-32 md:h-40' : 'h-64 md:h-96'
  const titleClass = compact ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'
  const subtitleClass = compact ? 'text-sm md:text-base' : 'text-lg md:text-xl'

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden`}>
      {heroImage && (
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className={`absolute inset-0 ${heroImage ? 'bg-black/40' : 'bg-gradient-to-r from-primary-blue to-secondary-blue'}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
          <h1 className={`${titleClass} font-playfair font-bold mb-2`}>{title}</h1>
          {subtitle && <p className={`${subtitleClass} text-blue-100`}>{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
