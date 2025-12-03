#!/bin/bash

# This script helps set up the Next.js project with images from the old project

set -e

echo "=== My Space Furniture Next.js Setup Script ==="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found. Make sure you're in the next-project directory."
    exit 1
fi

echo "Step 1: Creating public directories..."
mkdir -p public/hero
mkdir -p public/products
echo "✓ Directories created"
echo ""

echo "Step 2: Installing dependencies..."
npm install
echo "✓ Dependencies installed"
echo ""

echo "Step 3: Copying images from parent project..."
if [ -d "../images/hero" ]; then
    cp ../images/hero/*.webp public/hero/ 2>/dev/null || echo "  ⚠ No WebP images found in ../images/hero/"
    echo "✓ Hero images copied"
else
    echo "  ⚠ Hero images directory not found"
fi

if [ -d "../images/products" ]; then
    cp ../images/products/*.jpg public/products/ 2>/dev/null || echo "  ⚠ No JPG images found in ../images/products/"
    echo "✓ Product images copied"
else
    echo "  ⚠ Product images directory not found"
fi

if [ -f "../images/logo/logo.png" ]; then
    cp ../images/logo/logo.png public/
    echo "✓ Logo copied"
else
    echo "  ⚠ Logo not found"
fi

if [ -f "../images/favicon/favicon.ico" ]; then
    cp ../images/favicon/favicon.ico public/
    echo "✓ Favicon copied"
else
    echo "  ⚠ Favicon not found"
fi

echo ""
echo "=== Setup Complete! ==="
echo ""
echo "Next steps:"
echo "1. Run: npm run dev"
echo "2. Open: http://localhost:3000"
echo "3. Test all pages and make sure images load"
echo ""
echo "For more information, see README.md or SETUP.md"
