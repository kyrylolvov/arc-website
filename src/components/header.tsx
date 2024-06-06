"use client";

import { RiCloseLargeLine, RiMenuLine, RiQuestionMark } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "~/utils/cn";
import { isLinkNavItem, isMenuNavItem, navItems } from "~/utils/tabs";

import DemoDialog from "./demo-dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
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

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const activeNavItem = useMemo(() => navItems.find((navItem) => pathname.includes(navItem.slug))?.slug, [pathname]);

  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);

  const prevNavItemRef = useRef<string | null>(null);

  useEffect(() => {
    prevNavItemRef.current = hoveredNavItem;
  }, [hoveredNavItem]);

  useEffect(() => {
    setHoveredNavItem(activeNavItem ?? null);
  }, [activeNavItem]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const offsetX = document.querySelector(`[data-slug="solutions"]`)?.getBoundingClientRect().left ?? 0;

    const updateBubblePosition = (element: Element | null) => {
      if (element) {
        const { width, left } = element.getBoundingClientRect();
        document.documentElement.style.setProperty("--bubble-width", `${width}px`);
        document.documentElement.style.setProperty("--bubble-translate-x", `${left - offsetX}px`);
      } else {
        document.documentElement.style.setProperty("--bubble-width", "0px");
        document.documentElement.style.setProperty("--bubble-translate-x", "0px");
      }
    };

    const elementSlug = hoveredNavItem ?? activeNavItem;
    const element = elementSlug ? document.querySelector(`[data-slug="${elementSlug}"]`) : null;

    updateBubblePosition(element);
  }, [hoveredNavItem, activeNavItem]);

  return (
    <header className="fixed z-30 w-full border-b bg-background-accent">
      <div className="mx-auto flex h-[68px] max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <Link href={"/"} className="w-[138px]" aria-label="Go to homepage">
          <RiQuestionMark className="h-5" />
        </Link>

        <NavigationMenu
          className="hidden lg:block"
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
              "absolute left-0 top-0 h-9 w-[var(--bubble-width)] translate-x-[var(--bubble-translate-x)] rounded-full bg-secondary",
              hoveredNavItem ? "transition-all duration-300" : "opacity-0",
              prevNavItemRef.current === null && "duration-0",
            )}
          ></div>
          <NavigationMenuList>
            {navItems.map((navItem) => {
              const { id, label, slug } = navItem;

              if (isMenuNavItem(navItem)) {
                return (
                  <NavigationMenuItem
                    key={id}
                    onMouseOver={() => setHoveredNavItem(label.toLowerCase())}
                    data-slug={slug}
                  >
                    <NavigationMenuTrigger
                      onClick={(e) => e.preventDefault()}
                      className={cn(activeNavItem === id && "rounded-full bg-secondary text-secondary-foreground")}
                    >
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid">
                        <div className={`grid w-[40rem] grid-cols-${navItem.sections.length} p-2`}>
                          {navItem.sections.map((section) => (
                            <div key={section.id}>
                              <div className="flex h-10 items-center px-2 text-sm font-light text-secondary-foreground">
                                {section.label}
                              </div>
                              <ul className="">
                                {section.links.map((link) => (
                                  <li key={link.id}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={`/${link.slug}`}
                                        className="group flex items-center gap-3 p-3 [&>*]:transition-colors"
                                      >
                                        <div className="flex aspect-square items-center justify-center rounded-md border p-1 group-hover:border-transparent group-hover:bg-primary">
                                          <link.icon className="h-[18px] text-secondary-foreground group-hover:text-primary-foreground" />
                                        </div>
                                        <div className="space-y-1">
                                          <p className="text-sm font-medium">{link.title}</p>
                                          <p className="text-nowrap text-xs text-secondary-foreground group-hover:text-primary">
                                            {link.description}
                                          </p>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem
                  key={id}
                  onMouseOver={() => setHoveredNavItem(label.toLowerCase())}
                  data-slug={slug}
                >
                  <Link
                    target={isLinkNavItem(navItem) ? "_blank" : "_self"}
                    href={isLinkNavItem(navItem) ? navItem.url : `/${slug}`}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        activeNavItem === slug && "bg-secondary text-primary",
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

        <div className="hidden lg:block">
          <DemoDialog />
        </div>

        <Button
          variant="outline"
          aria-label="Mobile menu"
          className="flex aspect-square h-8 p-0 hover:border-border lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <RiCloseLargeLine className="h-3.5 w-3.5" /> : <RiMenuLine className="h-3.5 w-3.5" />}
        </Button>

        {isOpen && (
          <nav className="fixed left-0 top-[68px] h-[calc(100dvh-68px)] w-full max-w-[100vw] overflow-y-scroll bg-background-accent px-6 pb-6">
            <Accordion type="single" collapsible className="w-full">
              {navItems.map((navItem) => {
                if (isMenuNavItem(navItem)) {
                  return (
                    <AccordionItem value={navItem.id} key={navItem.id}>
                      <AccordionTrigger className="font-normal">{navItem.label}</AccordionTrigger>
                      <AccordionContent className="grid">
                        {navItem.sections.map((section) =>
                          section.links.map((link) => (
                            <Link
                              key={link.id}
                              href={`/${link.slug}`}
                              className="flex h-14 items-center gap-3 text-base text-secondary-foreground"
                            >
                              <link.icon className="h-5 w-5" />
                              {link.title}
                            </Link>
                          )),
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return (
                  <Link
                    key={navItem.id}
                    href={isLinkNavItem(navItem) ? navItem.url : `/${navItem.slug}`}
                    className="flex h-14 w-full items-center border-b text-base"
                  >
                    {navItem.label}
                  </Link>
                );
              })}

              <DemoDialog />
            </Accordion>
          </nav>
        )}
      </div>
    </header>
  );
}
