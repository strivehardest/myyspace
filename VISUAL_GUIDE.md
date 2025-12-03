# Hero Image Integration Visual Guide

## Component Architecture

```
┌─────────────────────────────────────────┐
│         PageHeader Component            │
│  (Updated with hero image support)      │
└─────────────────────────────────────────┘
           │
           ├─→ Image (Optional) → /images/heroes/*.jpg
           ├─→ Dark Overlay (for text readability)
           └─→ Title + Subtitle (centered text)
```

## Page Structure

```
┌─────────────────────────────────────────────────────┐
│                     Header                           │
│              (Navigation, Logo)                      │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│               Hero Section                           │
│  ┌───────────────────────────────────────────────┐  │
│  │  Background Image (1920x1080px)               │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │  Dark Overlay (40% opacity)             │  │  │
│  │  │  ┌───────────────────────────────────┐  │  │  │
│  │  │  │  Page Title                       │  │  │  │
│  │  │  │  Subtitle Text                    │  │  │  │
│  │  │  └───────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│                 Main Content                        │
│              (Product Grid, Info)                   │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│                     Footer                           │
│         (Navigation, Contact, Socials)              │
└─────────────────────────────────────────────────────┘
```

## Responsive Behavior

### Desktop (md and above)
```
Hero Height: 384px (h-96)
Image Size: Full width, responsive
Text: Large titles, visible subtitles
Overlay: 40% opacity maintained
```

### Mobile (below md)
```
Hero Height: 256px (h-64)
Image Size: Responsive, maintains aspect ratio
Text: Smaller but readable
Overlay: 40% opacity maintained
```

## File Organization

```
project/
├── public/
│   └── images/
│       ├── heroes/                    ← ADD HERO IMAGES HERE
│       │   ├── sofas-hero.jpg
│       │   ├── sectionals-hero.jpg
│       │   ├── mattresses-hero.jpg
│       │   ├── recliners-hero.jpg
│       │   ├── bedroom-sets-hero.jpg
│       │   ├── dining-room-hero.jpg
│       │   ├── custom-furniture-hero.jpg
│       │   ├── custom-sofas-hero.jpg
│       │   ├── custom-sectionals-hero.jpg
│       │   ├── custom-loveseats-hero.jpg
│       │   ├── about-hero.jpg
│       │   ├── contact-hero.jpg
│       │   ├── faq-hero.jpg
│       │   └── financing-hero.jpg
│       │
│       └── products/                 ← FOR FUTURE USE
│           ├── sofa-1.jpg
│           ├── sectional-1.jpg
│           └── ...
│
└── src/
    ├── app/
    │   ├── layout.tsx               ← Updated with SEO
    │   ├── page.tsx                 ← Homepage with SEO
    │   ├── sofas/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── sectionals/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── mattresses/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── recliners/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── bedroom-sets/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── dining-room/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── custom-furniture/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── custom-sofas/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── custom-sectionals/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── custom-loveseats/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── about/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── contact/
    │   │   └── page.tsx             ← With SEO + hero
    │   ├── faq/
    │   │   └── page.tsx             ← With SEO + hero
    │   └── financing/
    │       └── page.tsx             ← With SEO + hero
    │
    └── components/
        └── PageHeader.tsx           ← Updated
```

## SEO Metadata Flow

```
┌──────────────────────────────────┐
│   Page Component (page.tsx)      │
│                                  │
│  export const metadata = {       │
│    title: "...",                 │
│    description: "...",           │
│    keywords: "...",              │
│    openGraph: { ... }            │
│  }                               │
│                                  │
│  export default function() {     │
│    return <PageHeader ... />     │
│  }                               │
└──────────────────────────────────┘
          ↓
┌──────────────────────────────────┐
│   Next.js Build Process          │
│   - Reads metadata export        │
│   - Applies to <head> tags       │
│   - Generates HTML/JSON          │
└──────────────────────────────────┘
          ↓
┌──────────────────────────────────┐
│   Browser/Search Engine          │
│   <head>                         │
│   - <title>Page Title</title>    │
│   - <meta name="description">    │
│   - <meta property="og:title">   │
│   - <meta property="og:image">   │
│   </head>                        │
└──────────────────────────────────┘
```

## Image Integration in PageHeader

```tsx
┌────────────────────────────────────┐
│  PageHeader Component              │
│  Props:                            │
│  ├─ title: string                  │
│  ├─ subtitle?: string              │
│  └─ heroImage?: string             │
│                                    │
│  Logic:                            │
│  if (heroImage) {                  │
│    <Image src={heroImage} />       │
│    <Overlay opacity={40%} />       │
│  } else {                          │
│    <BlueGradient />                │
│  }                                 │
│                                    │
│  <Title>{title}</Title>            │
│  <Subtitle>{subtitle}</Subtitle>   │
└────────────────────────────────────┘
```

## Rendering Examples

### With Hero Image
```
┌─────────────────────────────────────────────┐
│         [Beautiful Sofa Image]              │
│         [Dark Overlay 40% opacity]          │
│                                             │
│         Premium Sofas                       │
│         Every style and comfort level       │
│                                             │
└─────────────────────────────────────────────┘
```

### Without Hero Image (Fallback)
```
┌─────────────────────────────────────────────┐
│    [Blue Gradient Background]               │
│    (from primary-blue to secondary-blue)    │
│                                             │
│         Premium Sofas                       │
│         Every style and comfort level       │
│                                             │
└─────────────────────────────────────────────┘
```

## SEO On-Page Elements

```
Page Title (50-60 chars)
└─ "Premium Sofas | Quality Seating - My Space Furniture"

Meta Description (150-160 chars)
└─ "Shop premium sofas at My Space Furniture. Browse 
    contemporary, traditional, and custom sofa options..."

Keywords (4-5 focus keywords)
└─ "sofas, couches, seating, contemporary sofas, custom sofas"

OpenGraph Title
└─ "Premium Sofas - My Space Furniture"

OpenGraph Description
└─ "Discover quality sofas in various styles and fabrics"

Page URL
└─ "/sofas" (clean, keyword-rich)

Content Heading (H1)
└─ Premium Sofas (from PageHeader title)
```

## Performance Optimization

```
┌─────────────────────────────────────────┐
│  Image Loading Strategy                 │
├─────────────────────────────────────────┤
│                                         │
│  Hero Images:                           │
│  ├─ Priority loading               │
│  ├─ Automatic optimization         │
│  ├─ Responsive serving             │
│  ├─ WebP support                   │
│  └─ fill + object-cover layout     │
│                                         │
│  Result:                                │
│  ├─ Faster LCP (Largest Contentful     │
│  │  Paint)                             │
│  ├─ Better Core Web Vitals            │
│  ├─ Smaller file sizes                │
│  └─ Improved SEO ranking              │
│                                         │
└─────────────────────────────────────────┘
```

## Implementation Checklist

```
Pre-Launch
├─ ✅ Component updated (PageHeader)
├─ ✅ SEO metadata added (all pages)
├─ ✅ Directories created
└─ ✅ Documentation created

Ready for Images
├─ ⏳ Add hero images to /public/images/heroes/
├─ ⏳ Verify image paths correct
├─ ⏳ Test on dev server
└─ ⏳ Check mobile responsiveness

Quality Assurance
├─ ⏳ SEO metadata in page source
├─ ⏳ OpenGraph tags working
├─ ⏳ Canonical URLs correct
└─ ⏳ Performance metrics good

Launch
├─ ⏳ Deploy to production
├─ ⏳ Verify pages in staging
├─ ⏳ Submit sitemap to GSC
└─ ⏳ Monitor search rankings
```

## Next Action

**Step 1: Prepare Images**
- Gather 14 professional furniture/interior images
- Resize to 1920x1080px
- Optimize file size

**Step 2: Upload Images**
- Place all images in `/public/images/heroes/`
- Match exact filenames (case-sensitive)

**Step 3: Test**
- Run `npm run dev`
- Visit each page
- Verify display and responsiveness

**Step 4: Deploy**
- Build for production: `npm run build`
- Deploy to hosting
- Monitor performance

---

For detailed technical information, see:
- `HERO_IMAGES_AND_SEO_SETUP.md` - Complete guide
- `IMPLEMENTATION_SUMMARY.md` - Full summary
- `HERO_IMAGES_CHECKLIST.md` - Quick checklist
