'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    __gtPatched?: boolean
    googleTranslateElementInit?: () => void
    google?: any
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Patch DOM once to prevent React crashes
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

    const el = document.getElementById('google_translate_element')
    if (el) el.innerHTML = '' // Clear old widget on every navigation

    const doInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        )
      }
    }

    if (window.google?.translate?.TranslateElement) {
      // Script already loaded — just reinit into the fresh div
      doInit()
    } else {
      // First load — fetch script
      window.googleTranslateElementInit = doInit
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script')
        script.id = 'google-translate-script'
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        script.async = true
        document.head.appendChild(script)
      }
    }
  }, []) // Runs on every mount (every page navigation)

  return <div id="google_translate_element" />
}