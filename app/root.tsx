import * as React from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import "~/app.css";

import { Heading } from "~/components/vorent/heading";
import { Text } from "~/components/vorent/text";
import { site } from "~/config/site";

export function meta(): Route.MetaDescriptors {
  return [
    { title: site.meta.title },
    { name: "description", content: site.meta.description },
    { name: "keywords", content: site.meta.keywords.join(", ") },
    { name: "theme-color", content: "#ffffff" },
    { name: "robots", content: "index, follow" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: site.meta.title },
    { name: "twitter:description", content: site.meta.description },
    { name: "twitter:image", content: `${site.url}/opengraph-image.png` },
    { name: "twitter:image:alt", content: site.name },
    { property: "og:title", content: site.meta.title },
    { property: "og:description", content: site.meta.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: site.url },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: "id_ID" },
    { property: "og:image", content: `${site.url}/opengraph-image.png` },
    { property: "og:image:alt", content: site.name },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
  ];
}

export function links(): Route.LinkDescriptors {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
    },
    { rel: "icon", type: "image/x-icon", sizes: "48x48", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "canonical", href: site.url },
    { rel: "manifest", href: "/site.webmanifest" },
  ];
}

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="root">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }

  return (
    <main className="container pt-16">
      <Heading level={2}>{message}</Heading>
      <Text>{details}</Text>
    </main>
  );
}

export default function App() {
  return <Outlet />;
}
