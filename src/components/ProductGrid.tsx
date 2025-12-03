'use client'

import { useState } from 'react'

interface ProductGridProps {
  title: string
  description?: string
  images: string[]
  columns?: number
}

export default function ProductGrid({ 
  title, 
  description, 
  images,
  columns = 3 
}: ProductGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(21)
  const showViewMore = images.length > 21
  const visibleImages = images.slice(0, visibleCount)

  const handlePrevious = () => {
    if (selectedImage) {
      const currentIndex = images.indexOf(selectedImage)
      if (currentIndex > 0) {
        setSelectedImage(images[currentIndex - 1])
      }
    }
  }

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = images.indexOf(selectedImage)
      if (currentIndex < images.length - 1) {
        setSelectedImage(images[currentIndex + 1])
      }
    }
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-[#b8845c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#ebebeb] mb-4 uppercase">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-[#ebebeb] max-w-2xl mx-auto">{description}</p>
            )}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden bg-light-gray hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className="aspect-square bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>

          {showViewMore && visibleCount < images.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount(prev => prev + 21)}
                className="px-8 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                View More ({images.length - visibleCount} remaining)
              </button>
            </div>
          )}

          {showViewMore && visibleCount >= images.length && visibleCount > 21 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount(21)}
                className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                View Less
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-primary-blue text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image display */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage}
                alt="Product"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between p-4 border-t bg-gray-50">
              <button
                onClick={handlePrevious}
                disabled={images.indexOf(selectedImage) === 0}
                className="px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-opacity-90 disabled:bg-gray-400 transition-all"
                aria-label="Previous image"
              >
                ← Previous
              </button>

              <span className="text-sm text-gray-600 font-semibold">
                {images.indexOf(selectedImage) + 1} / {images.length}
              </span>

              <button
                onClick={handleNext}
                disabled={images.indexOf(selectedImage) === images.length - 1}
                className="px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-opacity-90 disabled:bg-gray-400 transition-all"
                aria-label="Next image"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
