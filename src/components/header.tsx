"use client";

import { RiArrowRightLine, RiQuestionMark } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "~/utils/cn";
import { isLinkNavItem, isMenuNavItem, navItems } from "~/utils/tabs";

import { Button } from "./ui/button";
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
  products: "w-[106px] translate-x-0",
  resources: "w-[115px] translate-x-[108px]",
  docs: "w-[65px] translate-x-[229px]",
  contact: "w-[84px] translate-x-[298px]",
};

export default function Header() {
  const pathname = usePathname();

  const activeNavItem = useMemo(() => navItems.find((navItem) => pathname.includes(navItem.slug))?.id, [pathname]);

  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);

  const prevNavItemRef = useRef<string | null>(null);

  useEffect(() => {
    prevNavItemRef.current = hoveredNavItem;
  }, [hoveredNavItem]);

  useEffect(() => {
    setHoveredNavItem(activeNavItem ?? null);
  }, [activeNavItem]);

  return (
    <div className="fixed z-30 flex h-[68px] w-full max-w-screen-2xl items-center justify-between border-b bg-background px-6">
      <Link href={"/"} className="w-[138px]">
        {/* <Icons.Logo className="h-[22px]" /> */}
        <RiQuestionMark className="h-5" />
      </Link>
      <NavigationMenu
        onMouseLeave={() => {
          if (activeNavItem) {
            setHoveredNavItem(activeNavItem);
          } else {
            setHoveredNavItem(null);
          }
        }}
      >
        <div
          className={cn(
            "absolute left-0 top-0 h-9 rounded-full bg-accent brightness-95",
            hoveredNavItem ? `${hoverBubblePosition[hoveredNavItem]} transition-all duration-300` : "opacity-0",
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
                  <NavigationMenuTrigger
                    onClick={(e) => e.preventDefault()}
                    className={cn(
                      activeNavItem === id && "rounded-full bg-accent text-accent-foreground brightness-95",
                    )}
                  >
                    {label}
                  </NavigationMenuTrigger>
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
                                    "hover:bg-muted-foreground/5 hover:text-accent-foreground",
                                    "focus:bg-muted-foreground/5 focus:text-accent-foreground",
                                    "dark:hover:bg-accent/40",
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
                                        "hover:bg-muted-foreground/5 hover:text-accent-foreground",
                                        "focus:bg-muted-foreground/5 focus:text-accent-foreground",
                                        "dark:hover:bg-accent/40",
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
                <Link
                  target={isLinkNavItem(navItem) ? "_blank" : "_self"}
                  href={isLinkNavItem(navItem) ? navItem.url : `/${slug}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      activeNavItem === id && "bg-accent text-accent-foreground brightness-95",
                    )}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <Button size="sm" className="flex gap-1">
        Book a demo
        <RiArrowRightLine className="mt-[1px] h-4 w-4" />
      </Button>
    </div>
  );
}
