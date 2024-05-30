import { RiCalendarLine, RiScales3Line, RiShuffleLine, RiTaskLine, RiTimelineView } from "@remixicon/react";

import generateId from "./uuid";

export const latestNews = [
  {
    id: generateId(),
    type: "Event",
    title: "Join us next week in Hamburg, Germany, for ISC24!",
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

export const features = [
  {
    id: generateId(),
    animation: <div className="h-full bg-secondary"></div>,
    title: "Maximize GPU Utilization",
    description: "Utilize all available GPU resources to achieve peak performance.",
  },
  {
    id: generateId(),
    animation: <div className="h-full bg-secondary"></div>,
    title: "Faster GPU Performance",
    description: "Improve GPU performance by optimizing data flow and thread execution.",
  },
  {
    id: generateId(),
    animation: <div className="h-full bg-secondary"></div>,
    title: "Reduce Hardware Requirements",
    description: "Reduce hardware requirements by optimizing utilization and performance.",
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
    icon: RiTimelineView,
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
    icon: RiTaskLine,
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
    animation: <div className="h-full bg-secondary"></div>,
    title: "GPU Servers",
    description: "Leverage the power of the latest NVIDIA GPUs in your data center.",
  },
  {
    id: generateId(),
    animation: <div className="h-full bg-secondary"></div>,
    title: "Cloud Infrastructure",
    description: "Enable large-scale model training with top-of-the-line NVIDIA GPUs.",
  },
];
