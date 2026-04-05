'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    __gtPatched?: boolean
    googleTranslateElementInit?: () => void
    google?: any
  }
}

export default function GoogleTranslate() {
  const idRef = useRef(`gte_${Date.now()}`)

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

    const elId = idRef.current

    const doInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          elId
        )
      }
    }

    // Small delay to ensure DOM is settled after navigation
    const timer = setTimeout(() => {
      if (window.google?.translate?.TranslateElement) {
        doInit()
      } else if (!document.getElementById('google-translate-script')) {
        window.googleTranslateElementInit = doInit
        const script = document.createElement('script')
        script.id = 'google-translate-script'
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        script.async = true
        document.head.appendChild(script)
      } else {
        let attempts = 0
        const poll = setInterval(() => {
          attempts++
          if (window.google?.translate?.TranslateElement) {
            doInit()
            clearInterval(poll)
          } else if (attempts > 20) {
            clearInterval(poll)
          }
        }, 300)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return <div id={idRef.current} />
}