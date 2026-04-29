export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-400 ${className}`}
      {...props}
    />
  );
}