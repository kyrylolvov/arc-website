import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";

import { cn } from "~/utils/cn";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(GeistMono.variable, GeistSans.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
