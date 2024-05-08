import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";

import { cn } from "~/utils/cn";

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>((props, ref) => (
  <NavigationMenuPrimitive.Viewport
    ref={ref}
    className={cn(
      "data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content",
      "z-100 absolute right-0 top-12 w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center]",
      "flex justify-start rounded-lg border bg-background/20 backdrop-blur-lg",
      "supports-[backdrop-filter]:bg-background/20",
    )}
    {...props}
  />
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} className={cn("relative hidden lg:block", className)} {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List ref={ref} className={cn("flex flex-row space-x-2", className)} {...props} />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;

const NavigationMenuContent = NavigationMenuPrimitive.Content;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
