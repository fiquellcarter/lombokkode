import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "~/lib/utils";

export function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Root>) {
  return (
    <BaseAccordion.Root
      data-slot="accordion"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      data-slot="accordion-item"
      className={cn("rounded-md border bg-background/40", className)}
      {...props}
    />
  );
}

export function AccordionHeader({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Header>) {
  return <BaseAccordion.Header data-slot="accordion-header" className={cn(className)} {...props} />;
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Trigger
      data-slot="accordion-trigger"
      className={cn(
        "group flex w-full items-center justify-between gap-4 rounded-md p-6 text-left font-medium text-foreground transition-colors duration-200 ease-in-out",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-panel-open:text-primary",
        className
      )}
      {...props}>
      {children}
      <ChevronDown
        className={cn(
          "pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ease-in-out",
          "group-data-panel-open:rotate-180"
        )}
      />
    </BaseAccordion.Trigger>
  );
}

export function AccordionPanel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      data-slot="accordion-panel"
      className={cn(
        "h-(--accordion-panel-height)",
        "overflow-hidden transition-[height] duration-200 ease-in-out",
        "data-ending-style:h-0 data-starting-style:h-0",
        className
      )}
      {...props}>
      <div data-slot="accordion-panel-content" className="px-6 pt-1 pb-6">
        {children}
      </div>
    </BaseAccordion.Panel>
  );
}
