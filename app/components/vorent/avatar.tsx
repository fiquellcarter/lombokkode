import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/utils";

export const avatarVariants = cva(
  "flex items-center justify-center overflow-hidden rounded-full border bg-muted text-sm leading-tight font-semibold text-muted-foreground select-none",
  {
    variants: {
      size: {
        sm: "size-10",
        md: "size-12",
        lg: "size-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export function Avatar({
  size,
  className,
  ...props
}: React.ComponentProps<typeof BaseAvatar.Root> & VariantProps<typeof avatarVariants>) {
  return (
    <BaseAvatar.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof BaseAvatar.Image>) {
  return (
    <BaseAvatar.Image
      data-slot="avatar-image"
      className={cn("size-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof BaseAvatar.Fallback>) {
  return (
    <BaseAvatar.Fallback
      data-slot="avatar-fallback"
      className={cn("flex size-full items-center justify-center", className)}
      {...props}
    />
  );
}
