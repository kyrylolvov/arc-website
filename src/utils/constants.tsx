import {
  RiBox3Line,
  RiBriefcase4Line,
  RiCalendarLine,
  RiDiscordFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiMapPinLine,
  RiPuzzle2Line,
  RiScales3Line,
  RiServerLine,
  RiShuffleLine,
  RiSpeedUpLine,
  RiTaskLine,
} from "@remixicon/react";
import Link from "next/link";

import { MetricsCardProps } from "~/components/home/metrics-card";

import generateId from "./uuid";

export const latestNews = [
  {
    id: generateId(),
    type: "Event",
    title: "Join us next week in Hamburg for ISC24!",
  },
  {
    id: generateId(),
    type: "Learn",
    title: "Using ArcHPC: The ultimate guide on Nexus.",
  },
  {
    id: generateId(),
    type: "Case Study",
    title: "How ORNL optimized their GPU performance",
  },
];

export const metrics: MetricsCardProps[] = [
  {
    id: generateId(),
    value: "100%",
    description: "Utilization of GPU Resources",
  },
  {
    id: generateId(),
    value: "5x",
    description: "Boost to GPU Performance",
  },
  {
    id: generateId(),
    value: "1/6",
    description: "Your Hardware Requirements",
  },
  {
    id: generateId(),
    value: "3x",
    description: "More Performance Per Watt",
  },
];

export const features = [
  {
    id: generateId(),
    icon: RiCalendarLine,
    title: "Optimal Scheduling",
    description: "Optimized warp scheduling and thread arrangement, drastically improving task completion times.",
  },
  {
    id: generateId(),
    icon: RiSpeedUpLine,
    title: "Maximized Processor Uptime",
    description: 'Maintain processor uptime by keeping SMs "hot" by utilizing memory-level parallelism.',
  },
  {
    id: generateId(),
    icon: RiShuffleLine,
    title: "Flexible Integration",
    description: "Integrates at the hypervisor level and is compatible with your current job scheduler.",
  },
  {
    id: generateId(),
    icon: RiTaskLine,
    title: "Optimized Task Environment",
    description: "Fine-tune your GPU task environment for minimum and maximum compute times at intersection points.",
  },
  {
    id: generateId(),
    icon: RiPuzzle2Line,
    title: "Automated Task Matching",
    description: "Match and deploy tasks automatically, maximizing task density and increasing GPU throughput.",
  },
  {
    id: generateId(),
    icon: RiScales3Line,
    title: "User-Defined Regulations",
    description: "Policies set forth by infrastructure maintainers to adhere to business objectives.",
  },
];

export const infrastructure = [
  {
    id: generateId(),
    icon: RiServerLine,
    title: "GPU Servers",
    description: "Leverage the power of the latest NVIDIA GPUs in your data center.",
  },
  {
    id: generateId(),
    icon: RiBox3Line,
    title: "Cloud Instances",
    description: "Enable large-scale model training with top-of-the-line NVIDIA GPUs",
  },
];

export const contacts = [
  {
    id: generateId(),
    icon: RiMailLine,
    title: "Contact us",
    footer: (
      <div className="mt-4 grid gap-1 text-background underline underline-offset-2">
        <Link href="mail:support@compute.com">support@compute.com</Link>
        <Link href="mail:support@compute.com">sales@compute.com</Link>
      </div>
    ),
  },

  {
    id: generateId(),
    icon: RiMapPinLine,
    title: "Visit Us",
    footer: (
      <div className="mt-4 grid gap-1 text-background underline underline-offset-2">
        <Link href="https://maps.app.goo.gl/6K1HBBN4tHS6Ra4o6" target="_blank">
          31 Scarsdale Rd #4, Toronto, ON M3B 2R2
        </Link>
      </div>
    ),
  },

  {
    id: generateId(),
    icon: RiBriefcase4Line,
    title: "Join Us",
    footer: (
      <div className="mt-4 grid gap-1 text-background underline underline-offset-2">
        <Link href="/careers">Explore current job openings</Link>
      </div>
    ),
  },
];

export const socials = [
  {
    id: generateId(),
    icon: RiGithubFill,
    title: "Github",
    description: "@arc-compute",
  },
  {
    id: generateId(),
    icon: RiLinkedinBoxFill,
    title: "LinkedIn",
    description: "@arc-compute",
  },
  {
    id: generateId(),
    icon: RiDiscordFill,
    title: "Discord",
    description: "@arc-compute",
  },
];
