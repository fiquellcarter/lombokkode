import { useRender } from "@base-ui/react/use-render";

import { cn } from "~/lib/utils";

export function Text({ render, className, ...props }: useRender.ComponentProps<"p">) {
  return useRender({
    defaultTagName: "p",
    render,
    props: {
      "data-slot": "text",
      className: cn("leading-relaxed", className),
      ...props,
    },
  });
}

export function TextLink({ render, className, ...props }: useRender.ComponentProps<"a">) {
  return useRender({
    defaultTagName: "a",
    render,
    props: {
      "data-slot": "text-link",
      className: cn(
        "transition-colors duration-200 ease-in-out",
        "hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      ),
      ...props,
    },
  });
}

export function Small({ render, className, ...props }: useRender.ComponentProps<"small">) {
  return useRender({
    defaultTagName: "small",
    render,
    props: {
      "data-slot": "small",
      className: cn("font-semibold text-primary text-sm leading-tight", className),
      ...props,
    },
  });
}
