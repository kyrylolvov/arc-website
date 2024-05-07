import {
  RiBookOpenLine,
  RiCpuLine,
  RiFlowChart,
  RiGroupLine,
  RiOpenSourceLine,
  RiPenNibLine,
  RiPuzzle2Line,
  RiShapesLine,
  RiTerminalWindowLine,
} from "@remixicon/react";

export const navItems = [
  { id: "docs", label: "Docs", url: "https://arc-hpc-docs-v2.vercel.app/" },
  { id: "contact", label: "Contact", slug: "contact" },
];

export const PRODUCTS_LIST_UPPER = [
  {
    icon: RiCpuLine,
    title: "Nexus",
    description: "Optimize HPC and GPU Performance",
    slug: "products/archpc-nexus",
  },
  {
    icon: RiFlowChart,
    title: "Oracle",
    description: "Automate HPC Deployment and Execution",
    slug: "resources/archpc-oracle",
  },
];

export const PRODUCTS_LIST_LOWER = [
  {
    icon: RiOpenSourceLine,
    title: "Nexus OSS",
    description: "Optimize HPC and GPU Performance",
    slug: "products/archpc-oss",
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
