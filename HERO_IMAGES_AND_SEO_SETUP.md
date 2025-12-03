# Hero Images & SEO Implementation Guide

## Overview
This document outlines the hero image infrastructure and SEO structure implemented across all pages of the My Space Furniture website.

---

## Hero Images Directory Structure

All hero images should be placed in: `/public/images/heroes/`

### Required Hero Images

#### Category Pages
- `sofas-hero.jpg` - Hero image for Sofas page
- `sectionals-hero.jpg` - Hero image for Sectionals page
- `mattresses-hero.jpg` - Hero image for Mattresses & Bases page
- `recliners-hero.jpg` - Hero image for Recliners page
- `bedroom-sets-hero.jpg` - Hero image for Bedroom Sets page
- `dining-room-hero.jpg` - Hero image for Dining Room page

#### Custom Pages
- `custom-furniture-hero.jpg` - Hero image for Custom Furniture overview
- `custom-sofas-hero.jpg` - Hero image for Custom Sofas page
- `custom-sectionals-hero.jpg` - Hero image for Custom Sectionals page
- `custom-loveseats-hero.jpg` - Hero image for Custom Loveseats page

#### Information Pages
- `about-hero.jpg` - Hero image for About page
- `contact-hero.jpg` - Hero image for Contact page
- `faq-hero.jpg` - Hero image for FAQ page
- `financing-hero.jpg` - Hero image for Financing page

### Product Images Directory
Product images should be placed in: `/public/images/products/`

---

## PageHeader Component Updates

### Enhanced Component Props

```tsx
interface PageHeaderProps {
  title: string
  subtitle?: string
  heroImage?: string  // Optional: path to hero image
}
```

### Features
- **Responsive Design**: Full-width hero images with text overlay
- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Fallback**: If no image provided, displays blue gradient background
- **Overlay**: Dark overlay ensures text readability over images
- **Priority Loading**: Hero images load with priority for better performance

### Usage Example

```tsx
<PageHeader 
  title="Sofas"
  subtitle="Premium sofas for every style and comfort level"
  heroImage="/images/heroes/sofas-hero.jpg"
/>
```

---

## SEO Implementation

### Metadata Structure

All pages now export SEO metadata with the following structure:

```tsx
export const metadata: Metadata = {
  title: 'Page Title | Brand Name',
  description: 'Clear, compelling description under 160 characters',
  keywords: 'keyword1, keyword2, keyword3, keyword4',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    type: 'website',
  },
}
```

### Metadata by Page

#### Root Layout (`layout.tsx`)
- Enhanced metadata with OpenGraph and Twitter tags
- Canonical URL configuration
- Schema.org Organization structured data
- Theme color meta tag
- JSON-LD script for search engine understanding

#### Homepage (`page.tsx`)
- Title: "My Space Furniture - Premium Furniture Store | Mattresses, Sofas & More"
- Focus keywords: furniture store, mattresses, sofas, sectionals
- Service showcase with 6 main benefits
- CTA section with high-intent language

#### Category Pages
**Sofas**
- Title: "Premium Sofas | Quality Seating - My Space Furniture"
- Keywords: sofas, couches, seating, contemporary sofas, custom sofas

**Sectionals**
- Title: "Sectional Sofas | Modern & Comfortable - My Space Furniture"
- Keywords: sectionals, sectional sofas, corner sofas, modular sofas

**Mattresses**
- Title: "Quality Mattresses | Best Sleep Solutions - My Space Furniture"
- Keywords: mattresses, beds, sleep, quality mattresses, memory foam

**Recliners**
- Title: "Luxury Recliners | Comfort & Style - My Space Furniture"
- Keywords: recliners, reclining chairs, power recliners, comfort furniture

**Bedroom Sets**
- Title: "Bedroom Sets | Complete Bedroom Solutions - My Space Furniture"
- Keywords: bedroom sets, bed frames, dressers, nightstands

**Dining Room**
- Title: "Dining Room Furniture | Elegant Tables & Chairs - My Space Furniture"
- Keywords: dining tables, dining chairs, dining room furniture, buffets

#### Custom Pages
**Custom Furniture**
- Title: "Custom Furniture Design | Bespoke Sofas & Sectionals - My Space Furniture"
- Focus: Custom options and bespoke design

**Custom Sofas**
- Title: "Custom Sofas | Design Your Perfect Sofa - My Space Furniture"
- Keywords: custom sofas, bespoke sofas, made-to-order sofas

**Custom Sectionals**
- Title: "Custom Sectionals | Design Your Sectional - My Space Furniture"
- Keywords: custom sectionals, bespoke sectional sofas, made-to-order

**Custom Loveseats**
- Title: "Custom Loveseats | Design Your Loveseat - My Space Furniture"
- Keywords: custom loveseats, bespoke loveseats, made-to-order

#### Information Pages
**About**
- Title: "About My Space Furniture | Our Story & Mission"
- Focus: Brand authority, company history, values

**Contact**
- Title: "Contact My Space Furniture | Get in Touch"
- Keywords: contact us, customer service, showroom

**FAQ**
- Title: "FAQ | My Space Furniture - Frequently Asked Questions"
- Keywords: faq, frequently asked questions, delivery, financing

**Financing**
- Title: "Flexible Financing Options | My Space Furniture"
- Keywords: financing, payment plans, flexible payments

---

## Image Specifications

### Recommended Hero Image Specs
- **Resolution**: 1920 x 1080px (16:9 aspect ratio)
- **File Size**: 200-400KB (optimized for web)
- **Format**: JPEG or WebP for best compression
- **Quality**: High-quality, professional photography

### Product Image Specs
- **Resolution**: 800 x 600px or larger
- **Format**: JPEG or WebP
- **Count**: 9-10 product images per category for proper cycling

---

## SEO Best Practices Implemented

1. **Title Tags**: Unique, descriptive, keyword-rich titles (50-60 characters)
2. **Meta Descriptions**: Compelling summaries with CTAs (150-160 characters)
3. **Keywords**: Relevant, search-intent-focused keywords (4-5 per page)
4. **OpenGraph Tags**: Enhanced social media sharing
5. **Canonical URLs**: Prevent duplicate content issues
6. **Structured Data**: JSON-LD schema for rich snippets
7. **Internal Linking**: Navigation structure supports SEO
8. **Mobile Optimization**: Responsive design across all viewports

---

## Adding New Pages

When creating new pages:

1. **Export Metadata**:
```tsx
export const metadata: Metadata = {
  title: 'Your Title | My Space Furniture',
  description: 'Your meta description',
  keywords: 'keyword1, keyword2, keyword3',
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG Description',
    type: 'website',
  },
}
```

2. **Add PageHeader with Hero Image**:
```tsx
<PageHeader 
  title="Your Page Title"
  subtitle="Your subtitle here"
  heroImage="/images/heroes/your-page-hero.jpg"
/>
```

3. **Place Hero Image**: Add image to `/public/images/heroes/your-page-hero.jpg`

---

## Image Placeholders

While awaiting actual images, the system falls back to:
- Blue gradient background if no hero image is provided
- Product placeholder containers (gray boxes) for category products

---

## Performance Considerations

- Hero images use Next.js Image component for automatic optimization
- Images are lazy-loaded when not in viewport
- Priority loading for above-the-fold hero images
- WebP format support for modern browsers
- Responsive image serving based on device width

---

## Next Steps

1. **Prepare Hero Images**: Gather or create professional hero images
2. **Add Images**: Place images in `/public/images/heroes/` directory
3. **Test Pages**: Verify hero images display correctly
4. **Monitor Performance**: Track page load times and SEO metrics
5. **Optimize Keywords**: Refine keywords based on search analytics
6. **Update Meta Tags**: A/B test titles and descriptions for CTR improvement

---

## Troubleshooting

### Hero image not displaying
- Verify file path: `/public/images/heroes/filename.jpg`
- Check file extension matches the path
- Ensure filename follows the naming convention
- Test image file is valid JPEG or WebP

### Metadata not appearing
- Ensure page is using server-side component (remove 'use client' for metadata export)
- Verify metadata export is at the top of file
- Clear Next.js cache: `npm run build`

### Performance issues
- Optimize image file size (use ImageOptim or TinyPNG)
- Consider using WebP format
- Ensure images are the correct resolution

---

For questions or updates, refer to the main README.md or PROJECT_OVERVIEW.md
