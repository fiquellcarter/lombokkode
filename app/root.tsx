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

export function meta(): Route.MetaDescriptors {
  return [
    {
      title:
        "Jasa Pembuatan Website Profesional Lombok Kode | Mitra Digital Terpercaya untuk Bisnis & UMKM",
    },
    {
      name: "description",
      content:
        "Tingkatkan reputasi bisnis Anda dengan website premium, modern, cepat, dan siap bersaing di mesin pencari. Solusi pembuatan website terbaik di Lombok untuk pasar lokal dan global. Konsultasi Gratis.",
    },
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
