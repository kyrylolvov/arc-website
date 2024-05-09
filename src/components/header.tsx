"use client";

import Link from "next/link";
import * as React from "react";

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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Header() {
  return (
    <div className="flex h-[68px] w-full max-w-screen-2xl items-center justify-between border-b px-6">
      <Link href={"/"}>
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
                  <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
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
              <NavigationMenuItem key={id}>
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
