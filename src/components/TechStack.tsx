'use client'

interface Technology {
  name: string
  url: string
}

interface TechStackProps {
  technologies: Technology[]
}

interface QuickLink {
  name: string
  href: string
  label: string
  isImage?: boolean
  imageUrl?: string
}

export function QuickLinks({ links }: { links: QuickLink[] }) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-4 rounded-lg bg-[#b8845c] hover:bg-[#a0725a] transition group overflow-hidden"
        >
          {link.isImage && link.imageUrl ? (
            <img
              src={link.imageUrl}
              alt={link.name}
              className="w-6 h-6 flex-shrink-0"
              onError={handleImageError}
            />
          ) : (
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-xs text-white">{link.label}</p>
            <p className="font-semibold text-white text-sm truncate">{link.name}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default function TechStack({ technologies }: TechStackProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none'
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {technologies.map((tech, index) => (
        <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 hover:border-orange-400 transition group hover:shadow-lg">
          <div className="h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition relative">
            <img
              src={tech.url}
              alt={tech.name}
              className="h-10 w-10 object-contain"
              onError={handleImageError}
            />
          </div>
          <span className="text-orange-700 font-semibold text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
