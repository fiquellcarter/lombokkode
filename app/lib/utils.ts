import { clsx, type ClassValue } from "clsx";
import { kebabCase, replace } from "string-ts";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toSlug(str: string) {
  return kebabCase(replace(str, "&", ""));
}
