"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const headingVariants = cva(
  "font-serif tracking-wide", // using serif as base since we don't have Alexandria specifically loaded
  {
    variants: {
      size: {
        default: "text-3xl",
        sm: "text-2xl",
        lg: "text-4xl",
        xl: "text-5xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, as = "h1", ...props }, ref) => {
    const Comp = as
    return (
      <Comp
        className={cn(headingVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants } 