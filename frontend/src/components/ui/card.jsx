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