"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { RiArrowDownSLine } from "@remixicon/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { cn } from "~/utils/cn";
import {
  navItems,
  PRODUCTS_LIST_LOWER,
  PRODUCTS_LIST_UPPER,
  RESOURCES_LIST_LOWER,
  RESOURCES_LIST_UPPER,
} from "~/utils/tabs";

import { Icons } from "./icons";

export default function Header() {
  const pathname = usePathname();

  const activeNavItem = useMemo(() => navItems.find(({ slug }) => pathname.includes(slug))?.id ?? "", [pathname]);

  const [hoveredNavItem, setHoveredNavItem] = useState(activeNavItem);

  return (
    <div className={cn("fixed inset-x-0 top-0 z-30 w-full max-w-screen-2xl")}>
      <div className={cn("-z-1 absolute inset-0", "border-b bg-background/60 backdrop-blur")} />
      <div className="relative h-[68px] w-full px-6">
        <div className="flex h-full items-center justify-between">
          <Link href={"/"} className="">
            <Icons.Logo className="h-6" />
          </Link>
          <NavigationMenuPrimitive.Root delayDuration={0} className="relative hidden lg:block">
            <NavigationMenuPrimitive.List className="flex flex-row" onMouseOut={() => setHoveredNavItem(activeNavItem)}>
              <NavigationMenuPrimitive.Item onMouseOver={() => setHoveredNavItem("products")}>
                <NavigationMenuPrimitive.Trigger
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className={cn(
                    "group relative flex items-center rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors ease-out",
                    hoveredNavItem === "products" && "text-primary",
                    activeNavItem === "products" && "bg-foreground/5 text-primary",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <p className="text-sm transition-colors ease-out">Products</p>
                    <RiArrowDownSLine className="h-3.5 w-3.5 group-data-[state=open]:rotate-180" />
                  </div>

                  {hoveredNavItem === "products" && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 rounded-full bg-foreground/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}

                  {activeNavItem === "products" && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </NavigationMenuPrimitive.Trigger>

                <NavigationMenuPrimitive.Content>
                  <div className="w-[40rem]">
                    <div className="grid">
                      <div className="grid grid-cols-2 border-b p-2">
                        <div className="col-span-2 flex h-10 items-center px-2 text-sm text-muted-foreground">
                          Software
                        </div>
                        {PRODUCTS_LIST_UPPER.map(({ slug, icon: Icon, title, description }) => (
                          <Link
                            key={`products-list-${slug}`}
                            href={`/${slug}`}
                            className={cn(
                              "flex items-center gap-3 rounded-lg p-3 transition-colors",
                              "hover:bg-muted-foreground/10",
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
                          Hardware
                        </div>
                        {PRODUCTS_LIST_LOWER.map(({ slug, icon: Icon, title, description }) => (
                          <Link
                            key={`products-list-${slug}`}
                            href={`/${slug}`}
                            className={cn(
                              "flex items-center gap-3 rounded-lg p-3 transition-colors",
                              "hover:bg-muted-foreground/10",
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

              <NavigationMenuPrimitive.Item onMouseOver={() => setHoveredNavItem("resources")}>
                <NavigationMenuPrimitive.Trigger
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className={cn(
                    "group relative flex items-center rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors ease-out",
                    hoveredNavItem === "resources" && "text-primary",
                    activeNavItem === "resources" && "bg-foreground/5 text-primary",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <p className="text-sm transition-colors ease-out">Resources</p>
                    <RiArrowDownSLine className="h-3.5 w-3.5 group-data-[state=open]:rotate-180" />
                  </div>

                  {hoveredNavItem === "resources" && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 rounded-full bg-foreground/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}

                  {activeNavItem === "resources" && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
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
                              "hover:bg-muted-foreground/10",
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
                              "hover:bg-muted-foreground/10",
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

              {navItems.slice(2).map(({ label, slug, id, url }, i) => (
                <NavigationMenuPrimitive.Item asChild key={`nav-item-${i}`}>
                  <div className="flex items-center" onMouseOver={() => setHoveredNavItem(id)}>
                    <Link
                      target={url ? "_blank" : "_self"}
                      href={url || `/${slug}`}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                      className={cn(
                        "relative w-full rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors ease-out",
                        hoveredNavItem === id && "text-primary",
                      )}
                    >
                      {label}

                      {hoveredNavItem === id && (
                        <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 rounded-full bg-foreground/5"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}

                      {activeNavItem === id && (
                        <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 z-0 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                    </Link>
                  </div>
                </NavigationMenuPrimitive.Item>
              ))}
            </NavigationMenuPrimitive.List>

            <NavigationMenuPrimitive.Viewport
              className={cn(
                "data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content",
                "z-100 absolute right-0 top-12 w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center]",
                "flex justify-start rounded-lg border bg-background/20 backdrop-blur-lg",
                "supports-[backdrop-filter]:bg-background/20",
              )}
            />
          </NavigationMenuPrimitive.Root>
        </div>
      </div>
    </div>
  );
}
