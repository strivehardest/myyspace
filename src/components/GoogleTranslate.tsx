'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    __gtPatched?: boolean
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
  }, [])

  return <div id="google_translate_element" />
}