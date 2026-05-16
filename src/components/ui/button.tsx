import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "default" | "lg" | "sm";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand text-white hover:bg-brand-dark":
              variant === "primary",
            "bg-accent text-foreground hover:bg-border":
              variant === "secondary",
            "text-foreground hover:text-brand": variant === "ghost",
            "border border-border text-foreground hover:bg-accent":
              variant === "outline",
          },
          {
            "h-11 px-6 text-sm rounded-sm": size === "default",
            "h-13 px-8 text-base rounded-sm": size === "lg",
            "h-9 px-4 text-sm rounded-sm": size === "sm",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, type ButtonProps };
