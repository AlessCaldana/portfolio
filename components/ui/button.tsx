"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium font-mono tracking-tight transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white shadow-[0_0_0_1px_rgba(61,99,255,0.4),0_8px_24px_-8px_rgba(61,99,255,0.6)] hover:bg-accent-light hover:shadow-[0_0_0_1px_rgba(127,168,255,0.6),0_12px_28px_-8px_rgba(61,99,255,0.7)] hover:-translate-y-0.5",
        outline:
          "border border-line bg-transparent text-ink hover:border-accent-light/60 hover:bg-white/[0.04] hover:-translate-y-0.5",
        ghost: "bg-transparent text-muted hover:text-ink hover:bg-white/[0.05]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
