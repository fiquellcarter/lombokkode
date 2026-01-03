import * as React from "react";

import { headingVariants } from "~/components/vorent/heading";
import { cn } from "~/lib/utils";

export function Testimoni({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimoni"
      className={cn("relative rounded-md border bg-background/40", className)}
      {...props}
    />
  );
}

export function TestimoniIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimoni-icon"
      className={cn("absolute top-6 right-6 text-primary/20", className)}
      {...props}
    />
  );
}

export function TestimoniHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimoni-header"
      className={cn(
        "grid auto-rows-min gap-y-1 p-6",
        "has-data-[slot='testimoni-media']:grid-cols-[auto_1fr]",
        "has-data-[slot='testimoni-media']:gap-x-4",
        className
      )}
      {...props}
    />
  );
}

export function TestimoniMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimoni-media"
      className={cn("col-start-1 row-span-2 row-start-1 self-center", className)}
      {...props}
    />
  );
}

export function TestimoniTitle({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="testimoni-title"
      className={cn(
        "has-data-[slot='testimoni-media']:col-start-2",
        headingVariants({ size: "md" }),
        className
      )}
      {...props}
    />
  );
}

export function TestimoniMeta({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="testimoni-meta"
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        "has-data-[slot='testimoni-media']:col-start-2",
        className
      )}
      {...props}
    />
  );
}

export function TestimoniContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="testimoni-content" className={cn("px-6 pb-6", className)} {...props} />;
}
