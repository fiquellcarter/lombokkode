import { useRender } from "@base-ui/react/use-render";

import { cn } from "~/lib/utils";

export function Text({ render, className, ...props }: useRender.ComponentProps<"p">) {
  return useRender({
    defaultTagName: "p",
    render,
    props: {
      "data-slot": "text",
      ...props,
      className: cn("leading-relaxed", className),
    },
  });
}

export function TextLink({ render, className, ...props }: useRender.ComponentProps<"a">) {
  return useRender({
    defaultTagName: "a",
    render,
    props: {
      "data-slot": "text-link",
      ...props,
      className: cn(
        "transition-colors duration-200 ease-in-out",
        "hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      ),
    },
  });
}

export function Small({ render, className, ...props }: useRender.ComponentProps<"small">) {
  return useRender({
    defaultTagName: "small",
    render,
    props: {
      "data-slot": "small",
      ...props,
      className: cn("font-semibold text-primary text-sm leading-tight", className),
    },
  });
}
