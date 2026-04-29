import React from 'react'

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 ${className}`}
      {...props}
    />
  )
}
