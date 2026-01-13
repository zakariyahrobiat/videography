import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "primary" | "outline" | "ghost";
  icon?: ReactNode;
  isLoading?: boolean;
}

const Button = ({
  text,
  variant = "primary",
  icon,
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-archivo font-semibold px-6 py-3 rounded-tl-lg rounded-br-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#EF476F] to-[#FF9A5A] text-white hover:shadow-lg hover:shadow-[#EF476F]/25 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "bg-transparent border-2 border-[#EF476F] text-[#EF476F] hover:bg-[#EF476F]/10 hover:border-[#FF9A5A]",
    ghost: "bg-transparent text-[#E0E0E0] hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

export default Button;
