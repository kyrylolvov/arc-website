"use client";

import Link from "next/link";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "~/utils/cn";
import { isLinkNavItem, isMenuNavItem, navItems } from "~/utils/tabs";

import { Icons } from "./icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const hoverBubblePosition: { [key: string]: string } = {
  products: "w-[106.11px] translate-x-0",
  resources: "w-[115.65px] translate-x-[106.11px]",
  docs: "w-[65.01px] translate-x-[229.76px]",
  contact: "w-[83.28px] translate-x-[298.77px]",
};

export default function Header() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>("docs");
  const prevNavItemRef = useRef<string | null>(null);

  useEffect(() => {
    prevNavItemRef.current = hoveredNavItem;
  }, [hoveredNavItem]);

  console.log(prevNavItemRef.current, hoveredNavItem);

  return (
    <div className="fixed z-30 flex h-[68px] w-full max-w-screen-2xl items-center justify-between border-b bg-background px-6">
      <Link href={"/"}>
        <Icons.Logo className="h-6" />
      </Link>
      <NavigationMenu onMouseLeave={() => setHoveredNavItem(null)}>
        <div
          className={cn(
            "absolute left-0 top-0 h-10 rounded-full bg-accent",
            hoveredNavItem ? `${hoverBubblePosition[hoveredNavItem]} duration-[300ms] transition-all` : "opacity-0",
            prevNavItemRef.current === null && "duration-0",
          )}
        ></div>
        <NavigationMenuList>
          {navItems.map((navItem) => {
            const { id, label, slug } = navItem;

            if (isMenuNavItem(navItem)) {
              const { upperLinks, lowerLinks } = navItem;

              return (
                <NavigationMenuItem key={id} onMouseOver={() => setHoveredNavItem(id)}>
                  <NavigationMenuTrigger onClick={(e) => e.preventDefault()}>{label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid">
                      <div className={cn("grid w-[40rem] p-2", lowerLinks && "border-b")}>
                        <div className="flex h-10 items-center px-2 text-sm text-muted-foreground">
                          {upperLinks.label}
                        </div>
                        <ul className="grid grid-cols-2">
                          {upperLinks.links.map((link) => (
                            <li key={`${label}-${upperLinks.label}-${link.title}`}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={`/${link.slug}`}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg p-3 transition-colors",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    "focus:bg-accent focus:text-accent-foreground",
                                  )}
                                >
                                  <link.icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" />
                                  <div className="space-y-1">
                                    <p className="text-sm font-medium">{link.title}</p>
                                    <p className="text-xs text-muted-foreground">{link.description}</p>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>

                        {lowerLinks && (
                          <>
                            <div className="flex h-10 items-center px-2 text-sm text-muted-foreground">
                              {lowerLinks.label}
                            </div>
                            <ul className="grid grid-cols-2">
                              {lowerLinks.links.map((link) => (
                                <li key={`${label}-${lowerLinks.label}-${link.title}`}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={`/${link.slug}`}
                                      className={cn(
                                        "flex items-center gap-3 rounded-lg p-3 transition-colors",
                                        "hover:bg-accent hover:text-accent-foreground",
                                        "focus:bg-accent focus:text-accent-foreground",
                                      )}
                                    >
                                      <link.icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" />
                                      <div className="space-y-1">
                                        <p className="text-sm font-medium">{link.title}</p>
                                        <p className="text-xs text-muted-foreground">{link.description}</p>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={id} onMouseOver={() => setHoveredNavItem(id)}>
                <Link href={isLinkNavItem(navItem) ? navItem.url : `/${slug}`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{label}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
