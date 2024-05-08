"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { RiArrowDownSLine } from "@remixicon/react";
import Link from "next/link";

import { cn } from "~/utils/cn";
import { isLinkNavItem, isMenuNavItem, navItems } from "~/utils/tabs";

import { Icons } from "./icons";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

export default function Header() {
  return (
    <div className={cn("fixed inset-x-0 top-0 z-30 w-full max-w-screen-2xl")}>
      <div className={cn("-z-1 absolute inset-0", "border-b bg-background/60 backdrop-blur")} />
      <div className="relative h-[68px] w-full px-6">
        <div className="flex h-full items-center justify-between">
          <Link href={"/"} className="">
            <Icons.Logo className="h-6" />
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((navItem) => {
                const { id, label, slug } = navItem;

                if (isMenuNavItem(navItem)) {
                  const { upperLinks, lowerLinks } = navItem;

                  return (
                    <NavigationMenuItem key={id}>
                      <NavigationMenuPrimitive.Trigger
                        className={cn(
                          "group relative flex items-center rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors ease-out",
                          "hover:bg-muted-foreground/10 hover:text-primary",
                          "data-[state=open]:bg-muted-foreground/10 data-[state=open]:text-primary",
                        )}
                      >
                        <div className="flex items-center space-x-2">
                          <p className="text-sm transition-colors ease-out">{label}</p>
                          <RiArrowDownSLine className="h-3.5 w-3.5 group-data-[state=open]:rotate-180" />
                        </div>
                      </NavigationMenuPrimitive.Trigger>

                      <NavigationMenuPrimitive.Content>
                        <div className="w-[40rem]">
                          <div className="grid">
                            <div className={cn("grid grid-cols-2 p-2", lowerLinks && "border-b")}>
                              <div className="col-span-2 flex h-10 items-center px-2 text-sm text-muted-foreground">
                                {upperLinks.label}
                              </div>
                              {upperLinks.links.map(({ slug, icon: Icon, title, description }) => (
                                <Link
                                  key={`${label}-upper-${slug}`}
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

                            {lowerLinks && (
                              <div className="grid grid-cols-2 p-2">
                                <div className="col-span-2 flex h-10 items-center px-2 text-sm text-muted-foreground">
                                  {lowerLinks.label}
                                </div>
                                {lowerLinks.links.map(({ slug, icon: Icon, title, description }) => (
                                  <Link
                                    key={`${label}-lower-${slug}`}
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
                            )}
                          </div>
                        </div>
                      </NavigationMenuPrimitive.Content>
                    </NavigationMenuItem>
                  );
                }

                if (isLinkNavItem(navItem)) {
                  const { url } = navItem;

                  return (
                    <NavigationMenuPrimitive.Item asChild key={`nav-item-${id}`}>
                      <div className="flex items-center">
                        <Link
                          target="_blank"
                          href={url}
                          className={cn(
                            "relative w-full rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors ease-out",
                            "hover:bg-muted-foreground/10 hover:text-primary",
                          )}
                        >
                          {label}
                        </Link>
                      </div>
                    </NavigationMenuPrimitive.Item>
                  );
                }

                return (
                  <NavigationMenuPrimitive.Item asChild key={`nav-item-${id}`}>
                    <div className="flex items-center">
                      <Link
                        href={`/${slug}`}
                        className={cn(
                          "relative w-full rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors ease-out",
                          "hover:bg-muted-foreground/10 hover:text-primary",
                        )}
                      >
                        {label}
                      </Link>
                    </div>
                  </NavigationMenuPrimitive.Item>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
