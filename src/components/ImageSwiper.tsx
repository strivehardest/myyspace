'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'

interface ImageSwiperProps {
  images: string[]
  alt: string
}

export default function ImageSwiper({ images, alt }: ImageSwiperProps) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    if (isTransitioning) return
    setDirection(dir)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }, [isTransitioning])

  const handlePrev = useCallback(() => {
    const prevIndex = current === 0 ? images.length - 1 : current - 1
    goTo(prevIndex, 'left')
  }, [current, images.length, goTo])

  const handleNext = useCallback(() => {
    const nextIndex = current === images.length - 1 ? 0 : current + 1
    goTo(nextIndex, 'right')
  }, [current, images.length, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
  }

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      {/* Main Swiper — Kempinski full-bleed style */}
      <section className="relative w-full bg-[#f5f0eb]">
        {/* Image container */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
          style={{ height: 'clamp(400px, 75vh, 900px)' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Current image */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
              isTransitioning
                ? direction === 'right'
                  ? '-translate-x-8 opacity-0'
                  : 'translate-x-8 opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <div
              className="relative w-full h-full cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={images[current]}
                alt={`${alt} ${current + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority={current === 0}
              />
            </div>
          </div>

          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-28 z-10 flex items-center justify-center group transition-all"
            aria-label="Previous image"
          >
            <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800/60 group-hover:text-white drop-shadow-lg transition-all duration-300 relative z-10 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-28 z-10 flex items-center justify-center group transition-all"
            aria-label="Next image"
          >
            <div className="w-full h-full absolute inset-0 bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800/60 group-hover:text-white drop-shadow-lg transition-all duration-300 relative z-10 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Bottom bar — counter + thumbnail indicator */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 bg-gradient-to-t from-black/40 to-transparent">
              {/* Counter */}
              <div className="flex items-center gap-3">
                <span className="text-white text-2xl sm:text-3xl font-playfair font-light">
                  {String(current + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-px bg-white/50" />
                <span className="text-white/50 text-sm font-light">
                  {String(images.length).padStart(2, '0')}
                </span>
              </div>

              {/* Progress bar */}
              <div className="hidden sm:flex items-center gap-3 flex-1 max-w-xs ml-auto">
                <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#b8845c] transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${((current + 1) / images.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Expand icon */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="ml-4 p-2 text-white/60 hover:text-white transition-colors"
                aria-label="View fullscreen"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-3 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-[95vw] max-h-[90vh] m-auto">
            <Image
              src={images[current]}
              alt={`${alt} ${current + 1}`}
              fill
              className="object-contain"
              sizes="95vw"
            />
          </div>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span className="text-white text-xl font-playfair font-light">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="w-6 h-px bg-white/40" />
            <span className="text-white/40 text-sm font-light">
              {String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
