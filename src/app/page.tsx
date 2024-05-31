import { RiArrowRightLine } from "@remixicon/react";

import FeatureCard from "~/components/home/feature-card";
import LatestNewsCard from "~/components/home/latest-news-card";
import SecondaryFeatureCard from "~/components/home/secondary-feature-card";
import { Button } from "~/components/ui/button";
import { features, infrastructure, latestNews, secondaryFeatures } from "~/utils/constants";
import generateId from "~/utils/uuid";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 sm:px-8">
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
        <h1 className="bg-gradient-to-b from-foreground/70 to-foreground bg-clip-text py-1 text-4xl font-extrabold text-transparent dark:bg-gradient-to-t sm:text-5xl">
          Start Your GPU Infrastructure Deployment Journey
        </h1>
        <p className="mt-6 text-secondary-foreground">
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

      <div className="mt-16 hidden w-full grid-cols-3 gap-4 lg:grid">
        {latestNews.map((news) => (
          <div key={news.id}>
            <LatestNewsCard type={news.type} title={news.title} />
          </div>
        ))}
      </div>

      <div className="mt-16 w-full lg:hidden">
        <div className="grid gap-4 sm:grid-cols-2">
          {latestNews.slice(0, 2).map((news, i) => (
            <div key={generateId()}>
              <LatestNewsCard type={news.type} title={news.title} />
            </div>
          ))}
        </div>
        {latestNews.slice(2).length > 0 && (
          <div className="mt-6 flex justify-center gap-4">
            {latestNews.slice(2).map((news, i) => (
              <div key={generateId()} className="w-full sm:w-[calc(50%-12px)]">
                <LatestNewsCard {...news} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-32 w-full">
        <div className="mx-auto max-w-5xl">
          <h2 className="bg-gradient-to-b from-foreground/70 to-foreground bg-clip-text py-1 text-center text-3xl font-bold text-transparent dark:bg-gradient-to-t sm:text-4xl">
            The Leader In GPU Optimization
          </h2>
          <p className="mx-auto mt-2 text-center text-secondary-foreground md:max-w-[70%]">
            Achieving peak GPU performance has eluded even the most advanced organizations due to the current
            limitations in managing and manipulating how data flows and threads execute on GPUs.
          </p>
        </div>

        <div className="mt-8 hidden w-full grid-cols-3 gap-4 lg:grid">
          {features.map((feature) => (
            <div key={feature.id}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        <div className="mt-8 w-full lg:hidden">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.slice(0, 2).map((feature) => (
              <div key={feature.id}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
          {latestNews.slice(2).length > 0 && (
            <div className="mt-6 flex justify-center gap-4">
              {features.slice(2).map((feature) => (
                <div key={feature.id} className="w-full sm:w-[calc(50%-12px)]">
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-32 w-full">
        <div className="mx-auto max-w-6xl">
          <h2 className="bg-gradient-to-b from-foreground/70 to-foreground bg-clip-text py-1 text-center text-3xl font-bold text-transparent dark:bg-gradient-to-t sm:text-4xl">
            Unlock the True Potential of Your GPU Infrastructure
          </h2>
          <p className="mx-auto mt-2 text-center text-secondary-foreground md:max-w-[70%]">
            An advanced GPU management solution that maximizes user and task density, optimizing GPU utilization and
            performance across your data center.
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <Button size="sm" className="group flex gap-1">
            Learn About ArcHPC
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {secondaryFeatures.map((feature) => (
            <SecondaryFeatureCard {...feature} key={feature.id} />
          ))}
        </div>
      </div>

      <div className="mt-32 w-full">
        <div className="mx-auto max-w-5xl">
          <h2 className="bg-gradient-to-b from-foreground/70 to-foreground bg-clip-text py-1 text-center text-3xl font-bold text-transparent dark:bg-gradient-to-t sm:text-4xl">
            End-to-End GPU Infrastructure Solutions
          </h2>
          <p className="mx-auto mt-2 text-center text-secondary-foreground md:max-w-[70%]">
            Upgrade your infrastructure with the most in demand NVIDIA GPUs or Tap into unprecedented performance,
            scalability, and security for every workload.
          </p>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <Button size="sm" variant="outline" className="">
            Contact Sales
          </Button>
          <Button size="sm" className="group flex gap-1">
            More About Infrastructure
          </Button>
        </div>

        <div className="mx-auto mt-8 grid max-w-[500px] place-items-center gap-4 md:max-w-[1016px] md:grid-cols-2">
          {infrastructure.map((item) => (
            <FeatureCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="mt-32 grid w-full rounded-lg border bg-background-accent px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div>
            <h2 className="bg-gradient-to-b from-foreground/70 to-foreground bg-clip-text py-1 text-center text-3xl font-bold text-transparent dark:bg-gradient-to-t sm:text-4xl">
              Ready To Get Started?
            </h2>
            <p className="mx-auto mt-2 text-center text-secondary-foreground lg:max-w-[70%]">
              Contact us today to learn more about our solutions and how we can help you achieve peak performance.
            </p>
          </div>
          <Button size="sm" className="group flex gap-1">
            Book a demo
            <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
          </Button>
        </div>
      </div>
    </main>
  );
}
