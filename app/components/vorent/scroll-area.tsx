import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import * as React from "react";

import { cn } from "~/lib/utils";

export function ScrollArea({
  children,
  scrollbar = "both",
  className,
  ...props
}: React.ComponentProps<typeof BaseScrollArea.Root> & {
  scrollbar?: "both" | "horizontal" | "vertical" | false;
}) {
  return (
    <BaseScrollArea.Root
      data-slot="scroll-area"
      className={cn("overflow-hidden", className)}
      {...props}>
      <BaseScrollArea.Viewport
        data-slot="scroll-area-viewport"
        className="size-full overscroll-contain outline-none">
        {children}
      </BaseScrollArea.Viewport>
      {scrollbar === "both" && (
        <React.Fragment>
          <ScrollAreaScrollbar orientation="horizontal" />
          <ScrollAreaScrollbar orientation="vertical" />
        </React.Fragment>
      )}
      {scrollbar === "horizontal" && <ScrollAreaScrollbar orientation="horizontal" />}
      {scrollbar === "vertical" && <ScrollAreaScrollbar orientation="vertical" />}
      <BaseScrollArea.Corner />
    </BaseScrollArea.Root>
  );
}

function ScrollAreaScrollbar({
  orientation,
  className,
  ...props
}: React.ComponentProps<typeof BaseScrollArea.Scrollbar>) {
  return (
    <BaseScrollArea.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "pointer-events-none m-1 flex touch-none opacity-0 transition-opacity duration-200 ease-in-out",
        "data-hovering:pointer-events-auto data-hovering:opacity-100",
        "data-scrolling:pointer-events-auto data-scrolling:opacity-100",
        orientation === "vertical" ? "w-1.5 justify-center" : "h-1.5 justify-start",
        className
      )}
      {...props}>
      <BaseScrollArea.Thumb data-slot="scroll-area-thumb" className="w-full rounded-sm bg-border" />
    </BaseScrollArea.Scrollbar>
  );
}
