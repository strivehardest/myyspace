# My Space Furniture - Next.js Application

This is a modern, fully responsive Next.js application for My Space Furniture, built with TypeScript, React, and Tailwind CSS.

## Project Structure

```
next-project/
├── src/
│   ├── app/
│   │   ├── about/          # About Us page
│   │   ├── contact/        # Contact page
│   │   ├── faq/            # FAQs page
│   │   ├── financing/      # Financing page
│   │   ├── mattresses/     # Mattresses product page
│   │   ├── sectionals/     # Sectionals product page
│   │   ├── sofas/          # Sofas product page
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer
│   │   ├── PageHeader.tsx  # Page title sections
│   │   ├── HeroCarousel.tsx    # Hero image carousel
│   │   └── ProductGrid.tsx     # Product grid component
│   └── public/             # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Features

- ✅ Server-side rendering with Next.js
- ✅ Type-safe development with TypeScript
- ✅ Responsive Tailwind CSS styling
- ✅ Client-side interactivity (header menu, FAQ accordion)
- ✅ Image optimization with Next.js Image component
- ✅ SEO-optimized metadata
- ✅ Professional component architecture
- ✅ Auto-scrolling hero carousel
- ✅ Collapsible FAQ sections
- ✅ Mobile-first design
- ✅ Flexible financing options showcase
- ✅ Custom furniture sections

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Navigate to the project directory
```bash
cd next-project
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Create the images directory structure
Create the following directories in the `public` folder:
```
public/
├── hero/
│   ├── 4-1920w (1).webp
│   ├── 4-1920w (2).webp
│   ├── 4-1920w (3).webp
│   ├── 4-1920w (4).webp
│   ├── 4-1920w (5).webp
│   ├── 4-1920w (6).webp
│   ├── 4-1920w (7).webp
│   ├── 4-1920w (8).webp
│   └── 4-1920w (9).webp
├── products/
│   ├── mattress-1.jpg ... mattress-10.jpg
│   ├── sectional-1.jpg ... sectional-10.jpg
│   ├── sofa-1.jpg ... sofa-10.jpg
│   └── ... (other product images)
├── logo.png
└── favicon.ico
```

### Step 4: Copy images from the old project
Copy all hero images from `../images/hero/` to `public/hero/`
Copy all product images from `../images/products/` to `public/products/`

### Step 5: Run the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

### Build the project
```bash
npm run build
```

### Start the production server
```bash
npm start
```

## Environment Setup (Optional)

If you need environment variables, create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Key Pages

- **Home** (`/`) - Homepage with featured collections and hero carousel
- **About** (`/about`) - Company story and mission
- **Financing** (`/financing`) - Flexible payment options
- **FAQs** (`/faq`) - Frequently asked questions with accordion
- **Products** 
  - `/mattresses` - Mattresses & bases
  - `/sectionals` - Sectionals collection
  - `/sofas` - Sofas collection
- **Contact** (`/contact`) - Contact form and information
- **Custom Furniture** (pages to be created)
  - `/custom-sectionals`
  - `/custom-sofas`
  - `/custom-loveseats`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.3
- **UI Components**: React 18
- **Font**: Playfair Display (headings), Mulish (body)

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```ts
colors: {
  'primary-blue': '#1E3A8A',
  'secondary-blue': '#2563EB',
  // Add more colors as needed
}
```

### Fonts
Update Google Fonts in `src/app/layout.tsx` to change typography:
```tsx
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet" />
```

## Migration from Static HTML

The old static HTML files are located in the parent directory. The conversion includes:
- All HTML pages converted to React components
- Static CSS converted to Tailwind utilities
- JavaScript interactivity moved to React hooks
- Image paths updated to Next.js public folder
- Navigation restructured for App Router

## Performance Optimizations

- Image lazy loading with Next.js Image component
- CSS-in-JS with Tailwind for minimal CSS
- Client-side hydration for interactive components
- Server-side rendering for SEO
- Automatic code splitting per route

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Images not loading
- Ensure images are in the `public/` directory
- Check file paths match exactly
- For WebP images, ensure browser support or use fallback formats

### Styling issues
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check Tailwind CSS content paths in `tailwind.config.ts`

### Build errors
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript errors: the build will fail if types are incorrect

## Next Steps

1. **Add remaining product pages**: Create pages for sofas, recliners, bedroom sets, dining room, and custom furniture categories
2. **Integrate backend**: Add API routes for contact form submission, product listings, and financing applications
3. **Add image gallery**: Create a detailed product view with image gallery
4. **Implement search**: Add product search functionality
5. **Add cart functionality**: Create shopping cart with checkout flow
6. **Setup CMS**: Integrate a headless CMS for product management
7. **Analytics**: Add Google Analytics or similar tracking
8. **Testing**: Add Jest and Cypress for unit and E2E testing

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## License

This project is proprietary to My Space Furniture.

---

**Last Updated**: November 27, 2025
**Version**: 1.0.0
