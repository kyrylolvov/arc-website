import {
  RemixiconComponentType,
  RiBookOpenLine,
  RiFlowChart,
  RiGroupLine,
  RiPenNibLine,
  RiPuzzle2Line,
  RiRamLine,
  RiServerLine,
  RiShapesLine,
  RiTerminalWindowLine,
} from "@remixicon/react";

import generateId from "./uuid";

interface MenuNavItemLinks {
  id: string;
  icon: RemixiconComponentType;
  title: string;
  description: string;
  slug: string;
}

export const PRODUCTS_LIST_UPPER: MenuNavItemLinks[] = [
  {
    id: generateId(),
    icon: RiRamLine,
    title: "Nexus",
    description: "Optimize HPC and GPU performance",
    slug: "products/archpc",
  },
  {
    id: generateId(),
    icon: RiFlowChart,
    title: "Oracle",
    description: "Automate HPC deployment and execution",
    slug: "products/archpc",
  },
];

export const PRODUCTS_LIST_LOWER: MenuNavItemLinks[] = [
  {
    id: generateId(),
    icon: RiServerLine,
    title: "GPU Servers",
    description: "High-performance Nvidia GPU servers",
    slug: "products/servers",
  },
];

export const RESOURCES_LIST_UPPER: MenuNavItemLinks[] = [
  {
    id: generateId(),
    icon: RiPuzzle2Line,
    title: "Integrations",
    description: "Extend and automate your workflows",
    slug: "resources/integrations",
  },
  {
    id: generateId(),
    icon: RiTerminalWindowLine,
    title: "Templates",
    description: "Jumpstart with our pre-built templates",
    slug: "resources/templates",
  },
  {
    id: generateId(),
    icon: RiShapesLine,
    title: "Resource Center",
    description: "Discover today's best practices",
    slug: "resources/practices",
  },
  {
    id: generateId(),
    icon: RiBookOpenLine,
    title: "Guides",
    description: "Find the answers you need",
    slug: "resources/guides",
  },
];

export const RESOURCES_LIST_LOWER: MenuNavItemLinks[] = [
  {
    id: generateId(),
    icon: RiPenNibLine,
    title: "Blog",
    description: "Latest from Arc Compute",
    slug: "blog",
  },
  {
    id: generateId(),
    icon: RiGroupLine,
    title: "Customers",
    description: "The companies we keep",
    slug: "customers",
  },
];

interface BaseNavItem {
  id: string;
  label: string;
  slug: string;
  type: "menu" | "slug" | "link";
}

export interface MenuNavItem extends BaseNavItem {
  type: "menu";
  upperLinks: {
    label: string;
    links: MenuNavItemLinks[];
  };
  lowerLinks?: {
    label: string;
    links: MenuNavItemLinks[];
  };
}

interface SlugNavItem extends BaseNavItem {
  type: "slug";
}

interface LinkNavItem extends BaseNavItem {
  type: "link";
  url: string;
}

type NavItem = MenuNavItem | LinkNavItem | SlugNavItem;

export const navItems: NavItem[] = [
  {
    id: generateId(),
    label: "Products",
    type: "menu",
    slug: "products",
    upperLinks: {
      label: "Software",
      links: PRODUCTS_LIST_UPPER,
    },
    lowerLinks: {
      label: "Hardware",
      links: PRODUCTS_LIST_LOWER,
    },
  },
  {
    id: generateId(),
    label: "Resources",
    type: "menu",
    slug: "resources",
    upperLinks: {
      label: "Tools",
      links: RESOURCES_LIST_UPPER,
    },
    lowerLinks: {
      label: "Company",
      links: RESOURCES_LIST_LOWER,
    },
  },
  { id: generateId(), label: "Docs", slug: "docs", type: "link", url: "https://arc-hpc-docs-v2.vercel.app/" },
  { id: generateId(), label: "Contact", type: "slug", slug: "contact" },
];

export function isMenuNavItem(item: NavItem): item is MenuNavItem {
  return item.type === "menu";
}

export function isSlugNavItem(item: NavItem): item is SlugNavItem {
  return item.type === "slug";
}

export function isLinkNavItem(item: NavItem): item is LinkNavItem {
  return item.type === "link";
}
