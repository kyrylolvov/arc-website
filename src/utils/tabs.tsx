import {
  RemixiconComponentType,
  RiBookOpenLine,
  RiBox3Line,
  RiFlowChart,
  RiGroupLine,
  RiPenNibLine,
  RiPuzzle2Line,
  RiRuler2Line,
  RiServerLine,
  RiShapesLine,
  RiSpeedUpLine,
  RiTerminalWindowLine,
  RiUserSmileLine,
} from "@remixicon/react";

import generateId from "./uuid";

interface MenuNavItemLinks {
  id: string;
  icon: RemixiconComponentType;
  title: string;
  description: string;
  slug: string;
}

export const PRODUCTS_SOFTWARE: MenuNavItemLinks[] = [
  {
    id: generateId(),
    icon: RiSpeedUpLine,
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
  {
    id: generateId(),
    icon: RiRuler2Line,
    title: "Mercury",
    description: "Tailor system architecture to your needs",
    slug: "products/archpc",
  },
];

export const PRODUCTS_INFRASTRUCTURE: MenuNavItemLinks[] = [
  {
    id: generateId(),
    icon: RiServerLine,
    title: "GPU Servers",
    description: "High-performance Nvidia GPU servers",
    slug: "products/servers",
  },
  {
    id: generateId(),
    icon: RiBox3Line,
    title: "Cloud Instances",
    description: "Flexible cloud clusters for any workload",
    slug: "products/servers",
  },
];

export const RESOURCES_TOOLS: MenuNavItemLinks[] = [
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

export const RESOURCES_COMPANY: MenuNavItemLinks[] = [
  {
    id: generateId(),
    icon: RiGroupLine,
    title: "About",
    description: "Learn more about Arc Compute",
    slug: "about",
  },
  {
    id: generateId(),
    icon: RiPenNibLine,
    title: "Blog",
    description: "Latest from Arc Compute",
    slug: "blog",
  },
  {
    id: generateId(),
    icon: RiUserSmileLine,
    title: "Customers",
    description: "The companies we help succeed",
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
  sections: {
    id: string;
    label: string;
    links: MenuNavItemLinks[];
  }[];
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
    label: "Solutions",
    type: "menu",
    slug: "solutions",
    sections: [
      {
        id: generateId(),
        label: "Software",
        links: PRODUCTS_SOFTWARE,
      },
      {
        id: generateId(),
        label: "Infrastructure",
        links: PRODUCTS_INFRASTRUCTURE,
      },
    ],
  },
  {
    id: generateId(),
    label: "Resources",
    type: "menu",
    slug: "resources",
    sections: [
      {
        id: generateId(),
        label: "Tools",
        links: RESOURCES_TOOLS,
      },
      {
        id: generateId(),
        label: "Company",
        links: RESOURCES_COMPANY,
      },
    ],
  },
  { id: generateId(), label: "Docs", type: "link", slug: "docs", url: "https://arc-hpc-docs-v2.vercel.app/" },
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
