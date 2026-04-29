import React from 'react'

export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-block px-3 py-1 text-sm rounded-full bg-stone-100 text-stone-900 ${className}`}>
      {children}
    </span>
  )
}
