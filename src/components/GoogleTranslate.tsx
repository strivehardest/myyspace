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
    if (el) el.innerHTML = ''

    const tryInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        )
        return true
      }
      return false
    }

    // If already loaded, init immediately
    if (tryInit()) return

    // Load script if not already added
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => tryInit()
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.head.appendChild(script)
    } else {
      // Script tag exists but google object not ready yet — poll every 300ms
      let attempts = 0
      const poll = setInterval(() => {
        attempts++
        if (tryInit() || attempts > 20) {
          clearInterval(poll)
        }
      }, 300)
    }
  }, [])

  return <div id="google_translate_element" />
}
