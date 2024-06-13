import Link from "next/link";

import DemoDialog from "~/components/demo-dialog";
import FeatureCard from "~/components/home/feature-card";
import LatestNewsCard from "~/components/home/latest-news-card";
import MetricsCard from "~/components/home/metrics-card";
import { Button } from "~/components/ui/button";
import { features, infrastructure, latestNews, metrics } from "~/utils/constants";
import generateId from "~/utils/uuid";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 sm:px-8">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
        <p className="text-center font-light text-secondary-foreground">
          <span className="font-medium text-foreground">NVIDIA H200</span> GPU servers are now available for{" "}
          <span className="font-medium text-foreground">June</span> delivery.
        </p>

        <Button size="sm" variant="outline">
          Learn more
        </Button>
      </div>

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h1 className="text-shadow-grey py-1 text-4xl font-extrabold tracking-wide sm:text-5xl">
          Start Your GPU Infrastructure Deployment Journey.
        </h1>
        <p className="mt-6 text-secondary-foreground">
          Optimizing GPU infrastructure is complicated. Luckily, we{"'"}re here to help make the process easy.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button size="sm" variant="outline" className="">
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <DemoDialog />
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

      <div className="mt-36 w-full">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-shadow-grey py-1 text-center text-3xl font-bold sm:text-4xl">
            The Leader In GPU Optimization
          </h2>
          <p className="mx-auto mt-2 text-center text-secondary-foreground md:max-w-[70%]">
            Achieving peak GPU performance has eluded even the most advanced organizations due to the current
            limitations in managing and manipulating how data flows and threads execute on GPUs.
          </p>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[350px] gap-4 sm:max-w-[600px] sm:grid-cols-2 lg:max-w-[1000px] lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.id}>
              <MetricsCard {...metric} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-36 w-full">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-shadow-grey py-1 text-center text-3xl font-bold sm:text-4xl">
            Unlock the True Potential of Your GPU Infrastructure
          </h2>
          <p className="mx-auto mt-2 text-center text-secondary-foreground md:max-w-[70%]">
            An advanced GPU management solution that maximizes user and task density, optimizing GPU utilization and
            performance across your data center.
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <Button size="sm" className="group flex gap-1">
            Learn about ArcHPC
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard {...feature} key={feature.id} />
          ))}
        </div>
      </div>

      <div className="mt-36 w-full">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-shadow-grey py-1 text-center text-3xl font-bold sm:text-4xl">
            End-to-End GPU Infrastructure Solutions
          </h2>
          <p className="mx-auto mt-2 text-center text-secondary-foreground md:max-w-[70%]">
            Upgrade your infrastructure with the most in demand NVIDIA GPUs or Tap into unprecedented performance,
            scalability, and security for every workload.
          </p>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <Button size="sm" variant="outline" className="">
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <Button size="sm" className="group flex gap-1">
            More about Infrastructure
          </Button>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
          {infrastructure.map((item) => (
            <div key={item.id} className="md:max-w-[363px]">
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-36 grid w-full rounded-xl border bg-foreground/90 px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div>
            <h2 className="text-shadow-dark-grey py-1 text-center text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready To Get Started?
            </h2>
            <p className="mx-auto mt-2 text-center text-border lg:max-w-[70%]">
              Contact us today to learn more about our solutions and how we can help you achieve peak performance.
            </p>
          </div>
          <DemoDialog isLight />
        </div>
      </div>
    </main>
  );
}
