'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    __gtPatched?: boolean
    googleTranslateElementInit?: () => void
    google?: any
  }
}

function initTranslate() {
  if (window.google?.translate) {
    new window.google.translate.TranslateElement(
      { pageLanguage: 'en', autoDisplay: false },
      'google_translate_element'
    )
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Patch DOM to prevent React crashes
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
      window.__gtPatched = true
    }

    // If Google Translate already loaded (navigated from another page), init immediately
    if (window.google?.translate) {
      initTranslate()
      return
    }

    // Otherwise load the script fresh
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = initTranslate
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return <div id="google_translate_element" />
}