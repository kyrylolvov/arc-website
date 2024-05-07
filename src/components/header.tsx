"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { cn } from "~/utils/cn";
import { navItems, PRODUCTS_LIST } from "~/utils/tabs";

import { Icons } from "./icons";

export default function Header() {
  const { domain = "dub.co" } = useParams() as { domain: string };

  return (
    <div className={cn("fixed inset-x-0 top-0 z-30 w-full max-w-screen-2xl")}>
      <div className={cn("-z-1 absolute inset-0", "border-b bg-background/60 backdrop-blur")} />
      <div className="relative w-full py-4 px-6">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Icons.Logo className="h-6" />
          </Link>
          <NavigationMenuPrimitive.Root delayDuration={0} className="relative hidden lg:block">
            <NavigationMenuPrimitive.List className="flex flex-row space-x-2">
              <NavigationMenuPrimitive.Item>
                <NavigationMenuPrimitive.Trigger className="group flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none dark:hover:bg-white/10">
                  <p
                    className={cn(
                      "text-sm font-medium text-gray-500 transition-colors ease-out group-hover:text-black dark:text-white/70 dark:group-hover:text-white",
                    )}
                  >
                    Products
                  </p>
                  <ChevronDown className="h-4 w-4 text-black group-data-[state=open]:rotate-180 dark:text-white" />
                </NavigationMenuPrimitive.Trigger>

                <NavigationMenuPrimitive.Content>
                  <div className="grid w-[32rem] grid-cols-2 gap-1 p-3">
                    {PRODUCTS_LIST.map(({ slug, icon: Icon, title, shortTitle }, i) => (
                      <Link
                        key={`products-list-${i}`}
                        href={`/${slug}`}
                        className="rounded-lg p-3 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-white/[0.15] dark:active:bg-white/20"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4 text-gray-700 dark:text-white/80" />
                          <p className="text-sm font-medium text-gray-700 dark:text-white">{shortTitle}</p>
                        </div>
                        <p className="mt-1 line-clamp-1 text-sm text-gray-500 dark:text-white/60">{title}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuPrimitive.Content>
              </NavigationMenuPrimitive.Item>

              {navItems.map(({ label, slug, url }, i) => (
                <NavigationMenuPrimitive.Item key={`nav-item-${i}`} asChild>
                  <Link
                    target={url ? "_blank" : "_self"}
                    href={url || `/${slug}`}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black dark:text-white/70 dark:hover:text-white",
                    )}
                  >
                    {label}
                  </Link>
                </NavigationMenuPrimitive.Item>
              ))}
            </NavigationMenuPrimitive.List>

            <NavigationMenuPrimitive.Viewport
              className={cn(
                "data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content",
                "absolute z-50 right-0 top-12 w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center]",
                "flex justify-start rounded-lg border bg-background/60 backdrop-blur",
                "supports-[backdrop-filter]:bg-background/60",
              )}
            />
          </NavigationMenuPrimitive.Root>
        </div>
      </div>
    </div>
  );
}
