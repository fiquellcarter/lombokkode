import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import * as React from "react";

import { buttonVariants } from "~/components/vorent/button";
import { headingVariants } from "~/components/vorent/heading";
import { cn } from "~/lib/utils";

export function Dialog({ ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger({
  render,
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return (
    <BaseDialog.Trigger
      data-slot="dialog-trigger"
      render={render}
      className={cn(!render && buttonVariants({ variant: "primary" }), className)}
      {...props}
    />
  );
}

export function DialogPopup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop
        data-slot="dialog-backdrop"
        className={cn(
          "fixed inset-0 min-h-dvh bg-black/20 transition-opacity duration-200 ease-in-out",
          "data-starting-style:opacity-0",
          "data-ending-style:opacity-0"
        )}
      />
      <BaseDialog.Popup
        data-slot="dialog-popup"
        className={cn(
          "fixed top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] rounded-md border bg-background transition-all duration-200 ease-in-out",
          "data-starting-style:scale-90 data-starting-style:opacity-0",
          "data-ending-style:scale-90 data-ending-style:opacity-0",
          "data-nested-dialog-open:after:absolute data-nested-dialog-open:after:inset-0 data-nested-dialog-open:after:rounded-[inherit] data-nested-dialog-open:after:content-['']",
          className
        )}
        {...props}>
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

export function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "grid auto-rows-min gap-4 p-6",
        "has-data-[slot='dialog-action']:grid-cols-[1fr_auto]",
        className
      )}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      data-slot="dialog-title"
      className={cn(headingVariants({ size: "md" }), className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description
      data-slot="dialog-description"
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

export function DialogAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 flex items-center gap-2 self-start",
        className
      )}
      {...props}
    />
  );
}

export function DialogClose({
  render,
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Close>) {
  return (
    <BaseDialog.Close
      data-slot="dialog-close"
      render={render}
      className={cn(!render && buttonVariants({ variant: "ghost" }), className)}
      {...props}
    />
  );
}

export function DialogContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="dialog-content" className={cn("px-6 pb-6", className)} {...props} />;
}

export function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex items-center gap-2 px-6 pb-6", className)}
      {...props}
    />
  );
}
