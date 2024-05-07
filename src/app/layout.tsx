import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next/types";
import { ReactNode } from "react";

import Header from "~/components/header";
import { cn } from "~/utils/cn";

export const metadata: Metadata = {
  title: { template: "Arc Compute - %s", default: "Arc HPC - Optimize Your GPU Infrastructure" },
  description: "End-to-end AI infrastructure specialists focused on GPU optimization.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className="max-w-screen-2xl mx-auto min-h-[150vh] flex flex-col relative">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
