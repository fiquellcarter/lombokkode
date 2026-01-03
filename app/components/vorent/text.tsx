import { useRender } from "@base-ui/react/use-render";
import * as React from "react";

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
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
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
      className: cn("text-sm leading-tight font-semibold text-primary", className),
      ...props,
    },
  });
}
