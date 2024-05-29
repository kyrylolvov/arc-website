import { RiArrowRightLine } from "@remixicon/react";

import FeatureCard from "~/components/home/feature-card";
import LatestNewsCard from "~/components/home/latest-news-card";
import { Images } from "~/components/images";
import OptimizationLottie from "~/components/lotties/optimization-lottie";
import PriceLottie from "~/components/lotties/price-lottie";
import SpeedLottie from "~/components/lotties/speed-lottie";
import { Button } from "~/components/ui/button";
import generateId from "~/utils/uuid";

const latestNews = [
  { type: "Event", title: "Join us next week in Hamburg, Germany, for ISC24!" },
  { type: "Learn", title: "Using ArcHPC: The ultimate guide on Nexus." },
  { type: "Case Study", title: "How ORNL optimized their GPU performance" },
];

const features = [
  {
    title: "GPU Resources",
    value: "100",
    unit: "%",
    description: "Utilization",
    lottie: (
      <div className="optimization-lottie px-[48px] md:px-[72px] [&>*]:cursor-default">
        <OptimizationLottie />
      </div>
    ),
  },
  {
    title: "GPU Performance",
    value: "5",
    unit: "x",
    description: "Faster",
    lottie: (
      <div className="speed-lottie px-[48px] md:px-[72px] [&>*]:cursor-default">
        <SpeedLottie />
      </div>
    ),
  },
  {
    title: "Hardware Requirements",
    value: "83",
    unit: "%",
    description: "Lower Cost",
    lottie: (
      <div className="price-lottie px-[48px] md:px-[72px] [&>*]:cursor-default">
        <PriceLottie />
      </div>
    ),
  },
];

const products = [
  {
    id: generateId(),
    label: "Manage",
    title: "Nexus",
    preview: <Images.PreviewNexus className="h-full w-full" />,
    description:
      "Creates and manages your environment while optimizing GPU utilization and performance, enables administrators to enhance user and task density.",
  },
  {
    id: generateId(),
    label: "Automate",
    title: "Oracle",
    preview: <Images.PreviewOracle className="h-full w-full" />,
    description:
      "Automates task matching and task deployment across your cluster, by managing low-level operational execution of instructions",
  },
];

const secondaryProducts = [
  {
    id: generateId(),
    label: "Build",
    title: "GPU Servers",
    description:
      "Leverage the power of the latest NVIDIA GPUs in your data center. Whether you need one server or thousands, we've got you covered with industry-best lead times on NVIDIA H100, A100, and L40S deployments.",
  },
  {
    id: generateId(),
    label: "Deploy",
    title: "Cloud Instances",
    description:
      "Enable large-scale model training with top-of-the-line NVIDIA H100 SXM5 GPUs. Arc Compute's cloud clusters are available for a minimum 2-year commitment and start at just $2.20/hr per GPU.",
  },
];

const latestResources = [
  {
    id: generateId(),
    type: "Blog",
    title: "AI in Healthcare: Enhanced Medical Practices for Improved Patient Care",
  },
  {
    id: generateId(),
    type: "Blog",
    title: "Inside NVIDIA's Blackwell Architecture: The Next Step in AI and HPC Progress",
  },
  {
    id: generateId(),
    type: "Blog",
    title: "Unveiling Considerations for GPU Maximization",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 sm:px-8">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
        <p className="text-center font-light text-secondary-foreground">
          <span className="font-medium text-primary">NVIDIA H200</span> GPU servers are now available for{" "}
          <span className="font-medium text-primary">June</span> delivery.
        </p>

        <Button size="sm" variant="outline">
          Learn more
        </Button>
      </div>

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Start Your GPU Infrastructure Deployment Journey</h1>
        <p className="mt-6 font-light text-secondary-foreground">
          Optimizing GPU infrastructure is complicated. Luckily, we{"'"}re here to help make the process easy.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button size="sm" variant="outline" className="">
            Contact Sales
          </Button>
          <Button size="sm" className="group flex gap-1">
            Book a demo
            <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
          </Button>
        </div>
      </div>

      <div className="mt-16 hidden w-full grid-cols-3 gap-6 lg:grid">
        {latestNews.map((news, i) => (
          <div key={generateId()}>
            <LatestNewsCard type={news.type} title={news.title} />
          </div>
        ))}
      </div>

      <div className="mt-16 w-full lg:hidden">
        <div className="grid gap-6 sm:grid-cols-2">
          {latestNews.slice(0, 2).map((news, i) => (
            <div key={generateId()}>
              <LatestNewsCard type={news.type} title={news.title} />
            </div>
          ))}
        </div>
        {latestNews.slice(2).length > 0 && (
          <div className="mt-6 flex justify-center gap-6">
            {latestNews.slice(2).map((news, i) => (
              <div key={generateId()} className="w-full sm:w-[calc(50%-12px)]">
                <LatestNewsCard {...news} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">The Leader In GPU Optimization</h2>
        <p className="mx-auto mt-2 text-center font-light text-secondary-foreground md:max-w-[70%]">
          Achieving peak GPU performance has eluded even the most advanced organizations due to the current limitations
          in managing and manipulating how data flows and threads execute on GPUs.
        </p>
        <div className="mx-auto mt-8 w-full lg:hidden">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.slice(0, 2).map((feature, i) => (
              <FeatureCard {...feature} key={generateId()} />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-6">
            {features.slice(2).map((feature, i) => (
              <div key={generateId()} className="w-full sm:w-[calc(50%-12px)]">
                <FeatureCard {...feature} key={generateId()} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 hidden grid-cols-3 gap-6 lg:grid">
          {features.map((feature, i) => (
            <FeatureCard {...feature} key={generateId()} />
          ))}
        </div>
      </div>

      {/* <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">Unlock the True Potential of Your GPU Infrastructure</h2>
        <p className="mx-auto mt-2 text-center font-light text-secondary-foreground md:max-w-[70%]">
          An advanced GPU management solution that maximizes user and task density, optimizing GPU utilization and
          performance across your data center.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>

      <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">End-to-End GPU Infrastructure Solutions</h2>
        <p className="mx-auto mt-2 text-center font-light text-secondary-foreground md:max-w-[70%]">
          Upgrade your infrastructure with the most in demand NVIDIA GPUs or Tap into unprecedented performance,
          scalability, and security for every workload
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {secondaryProducts.map((product) => (
            <SecondaryProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>

      <div className="mt-32 w-full">
        <div className="group cursor-pointer rounded-lg border bg-white p-14 dark:bg-black">
          <div className="flex max-w-[90%] flex-wrap gap-2">
            <p className="flex h-[76px] w-fit items-center rounded-full bg-primary px-6 pr-7 text-6xl font-semibold uppercase text-primary-foreground">
              Start
            </p>
            <div className="aspect-square h-[76px] rounded-full bg-primary"></div>
            <div className="aspect-square h-[76px] rounded-full bg-border"></div>
            <p className="flex h-[76px] w-fit items-center rounded-full border-2 border-primary px-6 pr-7 text-6xl font-semibold uppercase text-primary">
              Optimizing
            </p>
            <div className="aspect-square h-[76px] rounded-full bg-border"></div>
            <div className="aspect-square h-[76px] rounded-full bg-primary"></div>
            <p className="flex h-[76px] w-fit items-center rounded-full border-2 border-primary px-6 pr-7 text-6xl font-semibold uppercase text-primary">
              Now
            </p>
            <p className="flex h-[76px] w-fit items-center gap-4 rounded-full bg-primary px-6 text-6xl font-semibold uppercase text-primary-foreground">
              Here
              <RiArrowRightLine className="h-12 w-12 transition-transform duration-150 ease-out group-hover:-rotate-45" />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">Latest Resources</h2>
        <p className="mx-auto mt-2 max-w-[70%] text-center font-light text-secondary-foreground">
          Dive into our most recent blog posts where we share the latest insights and developments in the industry.
        </p>
        <div className="mx-auto mt-8 w-full lg:hidden">
          <div className="grid gap-6 sm:grid-cols-2">
            {latestResources.slice(0, 2).map((resource, i) => (
              <LatestResourceCard {...resource} key={generateId()} />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-6">
            {latestResources.slice(2).map((resource, i) => (
              <div key={generateId()} className="w-full sm:w-[calc(50%-12px)]">
                <LatestResourceCard {...resource} key={generateId()} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 hidden grid-cols-3 gap-6 lg:grid">
          {latestResources.map((resource, i) => (
            <LatestResourceCard {...resource} key={generateId()} />
          ))}
        </div>
      </div> */}
    </main>
  );
}
