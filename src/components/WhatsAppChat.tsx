'use client'

import { useState } from 'react'

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '233530505031' // Replace with your WhatsApp number
  const message = 'Hello! I am interested in learning more about your furniture products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-4 w-80 mb-4 animate-fadeIn">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {message}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded text-center transition-colors"
          >
            Open WhatsApp
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 relative group"
      >
        {/* WhatsApp SVG Icon - Clear and Simple */}
        <svg 
          className="w-8 h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.94l-.28-.15-2.89.44.44-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.5-9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5S7.67 8 8.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
        {/* Online Indicator */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-300 rounded-full border-2 border-white animate-pulse"></div>
      </button>
    </div>
  )
}
