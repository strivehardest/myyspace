import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myyspacefurniture.com'
  const today = new Date('2025-12-07')

  const routes = [
    // Main Pages
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credits`,
      lastModified: today,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    // Main Furniture Categories
    {
      url: `${baseUrl}/mattresses`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/loveseats`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/sectionals`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/bedroom-sets`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/bunk-beds`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dining-tables`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vanities`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Sectional Variations
    {
      url: `${baseUrl}/fabric-sectionals`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/leather-sectionals`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.88,
    },
    // Custom Furniture Categories
    {
      url: `${baseUrl}/custom-furniture`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-sofas`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-sectionals`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-bedroom-sets`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]

  return routes
}
