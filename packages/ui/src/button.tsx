"use client";


interface ButtonProps {
  variant : "primary" | "secondary" | "ghost" 
  size : "sm" | "md" | "lg"
  onClick? : ()=>void
  children : string
}
export function Button ({ variant = 'primary', size = 'md',children ,onClick }: ButtonProps) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button onClick={onClick} className={ "rounded-lg font-medium transition-colors" + variants[variant] + " " + sizes[size] }>
      {children}
    </button>
  );
};
