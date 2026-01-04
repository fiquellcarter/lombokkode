import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/utils";

export const headingVariants = cva("font-semibold tracking-tight text-pretty", {
  variants: {
    size: {
      sm: ["text-base", "sm:text-lg"],
      md: ["text-lg", "sm:text-xl"],
      lg: ["text-xl", "sm:text-2xl"],
      xl: ["text-2xl", "sm:text-3xl", "md:text-4xl"],
      xxl: ["text-3xl", "sm:text-4xl", "md:text-5xl"],
      xxxl: ["text-4xl", "sm:text-5xl", "md:text-6xl"],
    },
  },
  defaultVariants: {
    size: "xxxl",
  },
});

export type HeadingSize = NonNullable<VariantProps<typeof headingVariants>["size"]>;

export const levelToSizeMap: Record<1 | 2 | 3 | 4 | 5 | 6, HeadingSize> = {
  1: "xxxl",
  2: "xxl",
  3: "xl",
  4: "lg",
  5: "md",
  6: "sm",
};

export function Heading({
  render,
  level = 1,
  size: overrideSize,
  className,
  ...props
}: useRender.ComponentProps<"h1"> &
  VariantProps<typeof headingVariants> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  }) {
  const inferredSize = levelToSizeMap[level];
  const finalSize = overrideSize ?? inferredSize;

  return useRender({
    defaultTagName: `h${Math.min(Math.max(level, 1), 6)}` as keyof React.JSX.IntrinsicElements,
    render,
    props: {
      "data-slot": "heading",
      className: cn(headingVariants({ size: finalSize }), className),
      ...props,
    },
  });
}
