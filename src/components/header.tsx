"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { RiArrowDownSLine } from "@remixicon/react";
import Link from "next/link";

import { cn } from "~/utils/cn";
import { navItems, PRODUCTS_LIST_UPPER, RESOURCES_LIST_LOWER, RESOURCES_LIST_UPPER } from "~/utils/tabs";

import { Icons } from "./icons";

export default function Header() {
  return (
    <div className={cn("fixed inset-x-0 top-0 z-30 w-full max-w-screen-2xl")}>
      <div className={cn("-z-1 absolute inset-0", "border-b bg-background/60 backdrop-blur")} />
      <div className="relative w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="">
            <Icons.Logo className="h-6" />
          </Link>
          <NavigationMenuPrimitive.Root delayDuration={0} className="relative hidden lg:block">
            <NavigationMenuPrimitive.List className="flex flex-row">
              <NavigationMenuPrimitive.Item>
                <NavigationMenuPrimitive.Trigger
                  className={cn(
                    "group flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors ease-out",
                    "hover:bg-muted hover:text-primary",
                    "data-[state=open]:bg-muted data-[state=open]:text-primary",
                  )}
                >
                  <p className="text-sm font-medium transition-colors ease-out">Products</p>
                  <RiArrowDownSLine className="h-4 w-4 group-data-[state=open]:rotate-180" />
                </NavigationMenuPrimitive.Trigger>

                <NavigationMenuPrimitive.Content>
                  <div className="w-[40rem]">
                    <div className="grid">
                      <div className="grid grid-cols-2 border-b p-2">
                        <div className="col-span-2 flex h-10 items-center px-2 text-sm text-muted-foreground">
                          Arc Compute
                        </div>
                        {PRODUCTS_LIST_UPPER.map(({ slug, icon: Icon, title, description }) => (
                          <Link
                            key={`products-list-${slug}`}
                            href={`/${slug}`}
                            className={cn(
                              "flex items-center gap-3 rounded-lg p-3 transition-colors",
                              "hover:bg-muted/40",
                            )}
                          >
                            <Icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium">{title}</p>
                              <p className="text-xs text-muted-foreground">{description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* <div className="grid grid-cols-2 p-2">
                        <div className="col-span-2 flex h-10 items-center px-2 text-sm text-muted-foreground">
                          Open Source
                        </div>
                        {PRODUCTS_LIST_LOWER.map(({ slug, icon: Icon, title, description }) => (
                          <Link
                            key={`products-list-${slug}`}
                            href={`/${slug}`}
                            className={cn(
                              "flex items-center gap-3 rounded-lg p-3 transition-colors",
                              "hover:bg-muted/40",
                            )}
                          >
                            <Icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium">{title}</p>
                              <p className="text-xs text-muted-foreground">{description}</p>
                            </div>
                          </Link>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </NavigationMenuPrimitive.Content>
              </NavigationMenuPrimitive.Item>

              <NavigationMenuPrimitive.Item>
                <NavigationMenuPrimitive.Trigger
                  className={cn(
                    "group flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors ease-out",
                    "hover:bg-muted hover:text-primary",
                    "data-[state=open]:bg-muted data-[state=open]:text-primary",
                  )}
                >
                  <p className="text-sm font-medium transition-colors ease-out">Resources</p>
                  <RiArrowDownSLine className="h-4 w-4 group-data-[state=open]:rotate-180" />
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuPrimitive.Content>
                  <div className="w-[40rem]">
                    <div className="grid">
                      <div className="grid grid-cols-2 border-b p-2">
                        <div className="col-span-2 flex h-10 items-center px-2 text-sm text-muted-foreground">
                          Tools
                        </div>
                        {RESOURCES_LIST_UPPER.map(({ slug, icon: Icon, title, description }) => (
                          <Link
                            key={`products-list-${slug}`}
                            href={`/${slug}`}
                            className={cn(
                              "flex items-center gap-3 rounded-lg p-3 transition-colors",
                              "hover:bg-muted/40",
                            )}
                          >
                            <Icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium">{title}</p>
                              <p className="text-xs text-muted-foreground">{description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 p-2">
                        <div className="col-span-2 flex h-10 items-center px-2 text-sm text-muted-foreground">
                          Company
                        </div>
                        {RESOURCES_LIST_LOWER.map(({ slug, icon: Icon, title, description }) => (
                          <Link
                            key={`products-list-${slug}`}
                            href={`/${slug}`}
                            className={cn(
                              "flex items-center gap-3 rounded-lg p-3 transition-colors",
                              "hover:bg-muted/40",
                            )}
                          >
                            <Icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium">{title}</p>
                              <p className="text-xs text-muted-foreground">{description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
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
                "absolute right-0 top-12 z-50 w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center]",
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
