import React from "react";

export function Button({ children, className = "", variant = "default", size, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer";

  const styles =
    variant === "outline"
      ? "border border-stone-300 bg-white text-stone-900 hover:bg-stone-100"
      : variant === "ghost"
      ? "bg-transparent hover:bg-stone-100"
      : "bg-stone-900 text-white hover:bg-stone-800";

  const iconSize = size === "icon" ? "h-10 w-10 p-0" : "";

  return (
    <button className={`${base} ${styles} ${iconSize} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-xl border bg-white shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-400 ${className}`}
      {...props}
    />
  );
}

export function Badge({ children, className = "", ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
