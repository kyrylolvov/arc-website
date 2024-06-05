import {
  RiCalendarLine,
  RiPuzzle2Line,
  RiScales3Line,
  RiShuffleLine,
  RiSpeedUpLine,
  RiTaskLine,
} from "@remixicon/react";

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

    description: "Utilization of GPU resources to achieve peak performance on your data center.",
  },
  {
    id: generateId(),
    value: "5x",

    description: "Faster GPU performance by optimizing data flow and thread execution.",
  },
  {
    id: generateId(),
    value: "1/6",
    description: "Your hardware requirements are reduced so you can focus on your workload.",
  },
];

export const secondaryFeatures = [
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
    picture: <div className="h-full bg-secondary"></div>,
    title: "GPU Servers",
    description: "Leverage the power of the latest NVIDIA GPUs in your data center.",
  },
  {
    id: generateId(),
    picture: <div className="h-full bg-secondary"></div>,
    title: "Cloud Infrastructure",
    description: "Enable large-scale model training with top-of-the-line NVIDIA GPUs.",
  },
];
