import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/utils";

export const separatorVariants = cva("bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "min-h-4 w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export function Separator({
  orientation,
  className,
  ...props
}: React.ComponentProps<typeof BaseSeparator> & VariantProps<typeof separatorVariants>) {
  return (
    <BaseSeparator
      data-slot="separator"
      className={cn(separatorVariants({ orientation }), className)}
      {...props}
    />
  );
}
