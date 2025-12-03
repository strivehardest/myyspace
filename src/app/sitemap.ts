import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myspacefurniture.com'

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credits`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Furniture Categories
    {
      url: `${baseUrl}/mattresses`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sofas`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sectionals`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bedroom-sets`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dining-room`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recliners`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Custom Furniture Categories
    {
      url: `${baseUrl}/custom-sofas`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-sectionals`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-bedroom-sets`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-furniture`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/custom-loveseats`,
      lastModified: new Date('2025-11-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  return routes
}
