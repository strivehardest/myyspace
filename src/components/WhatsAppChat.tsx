'use client'

import { useEffect, useState } from 'react'

export default function WhatsAppChat() {
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector('footer')
      if (!footerElement) return

      const footerRect = footerElement.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // If footer is visible in viewport (less than windowHeight from bottom)
      const isFooterVisible = footerRect.top < windowHeight

      setIsNearFooter(isFooterVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const buttonColor = isNearFooter ? 'text-[#b8845c]' : 'text-white'
  const hoverColor = isNearFooter ? 'hover:text-[#a0725a]' : 'hover:text-[#ffffff]'

  return (
    <a
      href="https://wa.me/233530505031?text=Hello%21%20I%20am%20interested%20in%20learning%20more%20about%20your%20furniture%20products."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[99] w-16 h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 ${buttonColor} ${hoverColor}`}
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </a>
  )
}
