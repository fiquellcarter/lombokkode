import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "shrink-0",
    "select-none",
    "whitespace-nowrap font-medium",
    "transition-colors duration-200 ease-in-out",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "outline-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "border border-transparent",
    "bg-clip-padding",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
          "active:bg-primary/85",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/90",
          "active:bg-secondary/85",
          "aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ],
        outline: [
          "border-border bg-background/40",
          "hover:bg-accent/80 hover:text-accent-foreground",
          "active:bg-accent/75",
          "aria-expanded:bg-accent aria-expanded:text-accent-foreground",
        ],
        ghost: [
          "hover:bg-accent/80 hover:text-accent-foreground",
          "active:bg-accent/75",
          "aria-expanded:bg-accent aria-expanded:text-accent-foreground",
        ],
      },
      size: {
        sm: "h-10 rounded-sm px-3 text-sm data-[icon-position='end']:pr-2 data-[icon-position='start']:pl-2",
        md: "h-12 rounded-md px-4 text-sm data-[icon-position='end']:pr-3 data-[icon-position='start']:pl-3",
        lg: "h-14 rounded-lg px-5 text-base data-[icon-position='end']:pr-4 data-[icon-position='start']:pl-4",
        "icon-sm": "size-10 rounded-sm",
        "icon-md": "size-12 rounded-md",
        "icon-lg": "size-14 rounded-lg",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export function Button({
  render,
  variant,
  size,
  block,
  className,
  ...props
}: useRender.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return useRender({
    defaultTagName: "button",
    render,
    props: {
      "data-slot": "button",
      ...props,
      className: cn(buttonVariants({ variant, size, block }), className),
    },
  });
}
