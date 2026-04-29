import React from 'react'

export function Button({ variant = 'default', size = 'md', className = '', children, ...props }) {
  const baseClass = 'font-medium rounded transition-colors'
  const variantClass = {
    default: 'bg-stone-900 text-white hover:bg-stone-800',
    outline: 'border border-stone-300 text-stone-900 hover:bg-stone-100',
    ghost: 'text-stone-900 hover:bg-stone-100'
  }[variant]
  
  const sizeClass = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
    icon: 'p-2 h-10 w-10'
  }[size]

  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
