'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    __gtPatched?: boolean
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          element: string | HTMLElement
        ) => void
      }
    }
  }
}

export default function GoogleTranslate() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Only run once
    if (ready) return

    // Patch DOM methods to prevent React crashes from GT mutations
    if (!window.__gtPatched) {
      const origRemoveChild = Node.prototype.removeChild
      Node.prototype.removeChild = function <T extends Node>(child: T): T {
        if (child.parentNode !== this) return child
        return origRemoveChild.call(this, child) as T
      }
      const origInsertBefore = Node.prototype.insertBefore
      Node.prototype.insertBefore = function <T extends Node>(newNode: T, refNode: Node | null): T {
        if (refNode && refNode.parentNode !== this) return newNode
        return origInsertBefore.call(this, newNode, refNode) as T
      }
      ;(window as any).__gtPatched = true
    }

    // Create target div inside our container (not managed by React)
    const el = document.createElement('div')
    el.id = 'google_translate_element'
    if (containerRef.current) {
      containerRef.current.appendChild(el)
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        )
      }
    }

    const script = document.createElement('script')
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.head.appendChild(script)

    setReady(true)
  }, [ready])

  return <div ref={containerRef} className="google-translate-container" />
}
