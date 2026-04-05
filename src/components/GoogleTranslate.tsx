'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: any
    __gtPatched?: boolean
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Patch DOM to prevent React crashes from Google Translate mutations
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

    if (document.getElementById('google-translate-script')) return

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'google_translate_element'
      )

      const observer = new MutationObserver(() => {
        const select = document.querySelector<HTMLSelectElement>('#google_translate_element select')
        if (select) {
          select.style.display = 'inline-block'
          select.style.visibility = 'visible'
          select.style.opacity = '1'
          select.style.minWidth = '130px'
          select.style.background = 'transparent'
          select.style.border = '1px solid rgba(255,255,255,0.25)'
          select.style.color = 'rgba(255,255,255,0.6)'
          select.style.fontSize = '11px'
          select.style.padding = '4px 8px'
          select.style.borderRadius = '4px'
          select.style.cursor = 'pointer'

          const gadget = document.querySelector<HTMLElement>('.goog-te-gadget')
          if (gadget) {
            gadget.style.display = 'block'
            gadget.style.height = 'auto'
            gadget.style.overflow = 'visible'
          }

          observer.disconnect()
        }
      })

      observer.observe(document.getElementById('google_translate_element')!, {
        childList: true,
        subtree: true,
      })
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return <div id="google_translate_element" />
}