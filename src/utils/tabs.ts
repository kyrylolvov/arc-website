import { Airplay, BarChart, Link2, QrCode } from "lucide-react";

export const navItems = [
  { id: "docs", label: "Docs", url: "https://arc-hpc-docs-v2.vercel.app/" },
  { id: "contact", label: "Contact", slug: "contact" },
];

export const PRODUCTS_LIST = [
  {
    title: "Powerful Analytics For The Modern Marketer",
    shortTitle: "Advanced Analytics",
    icon: BarChart,
    slug: "features/analytics",
  },
  {
    title: "Branded Links That Stand Out",
    shortTitle: "Branded Links",
    icon: Airplay,
    slug: "features/branded-links",
  },
  {
    title: "Gorgeous QR codes for your links",
    shortTitle: "QR Codes",
    icon: QrCode,
    slug: "features/qr-codes",
  },
  {
    title: "Personalize Your Short Links",
    shortTitle: "Personalization",
    icon: Link2,
    slug: "features/personalization",
  },
];

export const RESOURCES_LIST = [];
