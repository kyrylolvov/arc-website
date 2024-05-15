import generateId from "./uuid";

export const footerLinks = [
  {
    id: generateId(),
    label: "Products",
    links: [
      { id: generateId(), label: "Nexus", href: "/#" },
      { id: generateId(), label: "Oracle", href: "/#" },
      { id: generateId(), label: "Mercury", href: "/#" },
      { id: generateId(), label: "Changelog", href: "/#" },
      { id: generateId(), label: "Hardware", href: "/#" },
    ],
  },
  {
    id: generateId(),
    label: "Resources",
    links: [
      { id: generateId(), label: "Docs", href: "/#" },
      { id: generateId(), label: "Integrations", href: "/#" },
      { id: generateId(), label: "Templates", href: "/#" },
      { id: generateId(), label: "Resource Center", href: "/#" },
      { id: generateId(), label: "Guides", href: "/#" },
    ],
  },
  {
    id: generateId(),
    label: "Company",
    links: [
      { id: generateId(), label: "About", href: "/#" },
      { id: generateId(), label: "Blog", href: "/#" },
      { id: generateId(), label: "Customers", href: "/#" },
      { id: generateId(), label: "Partners", href: "/#" },
      { id: generateId(), label: "Contact Us", href: "/#" },
      { id: generateId(), label: "Open Source", href: "/#" },
    ],
  },
];
