export function Button({
  children,
  className = "",
  variant = "default",
  size,
  ...props
}) {
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