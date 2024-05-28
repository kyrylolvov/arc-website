"use client";

import { RiArrowRightLine, RiCloseLargeLine, RiMenuLine, RiQuestionMark } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "~/utils/cn";
import { isLinkNavItem, isMenuNavItem, navItems } from "~/utils/tabs";

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

const hoverBubblePosition: { [key: string]: string } = {
  solutions: "w-[107px] translate-x-0",
  resources: "w-[115px] translate-x-[110px]",
  docs: "w-[65px] translate-x-[231px]",
  contact: "w-[84px] translate-x-[300px]",
};

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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
    if (isOpen) {
      const { scrollY } = window;

      setScrollPosition(scrollY);
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
      window.scrollTo({ top: scrollPosition });
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
              "absolute left-0 top-0 h-9 rounded-full bg-secondary",
              hoveredNavItem ? `${hoverBubblePosition[hoveredNavItem]} transition-all duration-300` : "opacity-0",
              prevNavItemRef.current === null && "duration-0",
            )}
          ></div>
          <NavigationMenuList>
            {navItems.map((navItem) => {
              const { id, label, slug } = navItem;

              if (isMenuNavItem(navItem)) {
                return (
                  <NavigationMenuItem key={id} onMouseOver={() => setHoveredNavItem(label.toLowerCase())}>
                    <NavigationMenuTrigger
                      onClick={(e) => e.preventDefault()}
                      className={cn(activeNavItem === id && "rounded-full bg-secondary text-secondary-foreground")}
                    >
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid">
                        <div
                          className={`grid w-[${navItem.sections.length * 20}rem] grid-cols-${navItem.sections.length} p-2`}
                        >
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
                <NavigationMenuItem key={id} onMouseOver={() => setHoveredNavItem(label.toLowerCase())}>
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

        <Button size="sm" className="group hidden gap-1 lg:flex">
          Book a demo
          <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
        </Button>

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

              <Button className="mt-6 flex w-full gap-1 rounded-md">
                Book a demo
                <RiArrowRightLine className="mt-[1px] h-4 w-4" />
              </Button>
            </Accordion>
          </nav>
        )}
      </div>
    </header>
  );
}
