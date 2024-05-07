import {
  RiBookOpenLine,
  RiCpuLine,
  RiFlowChart,
  RiGroupLine,
  RiPenNibLine,
  RiPuzzle2Line,
  RiServerLine,
  RiShapesLine,
  RiTerminalWindowLine,
} from "@remixicon/react";

export const navItems = [
  { id: "products", label: "Products", slug: "products" },
  { id: "resources", label: "Resources", slug: "resources" },
  { id: "docs", label: "Docs", slug: "docs", url: "https://arc-hpc-docs-v2.vercel.app/" },
  { id: "contact", label: "Contact", slug: "contact" },
];

export const PRODUCTS_LIST_UPPER = [
  {
    icon: RiCpuLine,
    title: "Nexus",
    description: "Optimize HPC and GPU performance",
    slug: "products/archpc",
  },
  {
    icon: RiFlowChart,
    title: "Oracle",
    description: "Automate HPC deployment and execution",
    slug: "products/archpc",
  },
];

export const PRODUCTS_LIST_LOWER = [
  {
    icon: RiServerLine,
    title: "GPU Servers",
    description: "High-performance Nvidia GPU servers",
    slug: "products/servers",
  },
];

export const RESOURCES_LIST_UPPER = [
  {
    icon: RiPuzzle2Line,
    title: "Integrations",
    description: "Extend and automate your workflows",
    slug: "resources/integrations",
  },
  {
    icon: RiTerminalWindowLine,
    title: "Templates",
    description: "Jumpstart with our pre-built templates",
    slug: "resources/templates",
  },
  {
    icon: RiShapesLine,
    title: "Resource Center",
    description: "Discover today's best practices",
    slug: "resources/practices",
  },
  {
    icon: RiBookOpenLine,
    title: "Guides",
    description: "Find the answers you need",
    slug: "resources/guides",
  },
];

export const RESOURCES_LIST_LOWER = [
  {
    icon: RiPenNibLine,
    title: "Blog",
    description: "Latest from Arc Compute",
    slug: "blog",
  },
  {
    icon: RiGroupLine,
    title: "Customers",
    description: "The companies we keep",
    slug: "customers",
  },
];
