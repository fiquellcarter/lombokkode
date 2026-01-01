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
      className={cn("border-border bg-background/40 rounded-md border", className)}
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
        "group text-foreground focus-visible:ring-ring focus-visible:ring-offset-background data-panel-open:text-primary flex w-full items-center justify-between gap-4 rounded-md p-6 text-left font-medium transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}>
      {children}
      <ChevronDown className="pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ease-in-out group-data-panel-open:rotate-180" />
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
        "h-(--accordion-panel-height) overflow-hidden transition-[height] duration-200 ease-in-out data-ending-style:h-0 data-starting-style:h-0",
        className
      )}
      {...props}>
      <div data-slot="accordion-panel-content" className="px-6 pt-2 pb-6">
        {children}
      </div>
    </BaseAccordion.Panel>
  );
}
