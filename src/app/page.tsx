import { RiArrowRightLine } from "@remixicon/react";

import OptimizationLottie from "~/components/lotties/optimization-lottie";
import PriceLottie from "~/components/lotties/price-lottie";
import SpeedLottie from "~/components/lotties/speed-lottie";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center px-8 py-24">
      <div className="flex items-center gap-4">
        <p className="font-light text-muted-foreground">
          <span className="font-medium text-primary">NVIDIA H200</span> GPU servers are now available for{" "}
          <span className="font-medium text-primary">June</span> delivery.
        </p>

        <Button size="sm" variant="outline">
          Learn more
        </Button>
      </div>

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h1 className="text-5xl font-bold">Start Your GPU Infrastructure Deployment Journey</h1>
        <p className="mt-6 font-light text-muted-foreground">
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

      <div className="mt-16 grid grid-cols-3 gap-6">
        <div className="group grid cursor-pointer gap-2 rounded-lg border bg-white p-4 transition-colors hover:border-primary dark:bg-black">
          <p className="text-sm text-muted-foreground">Event</p>
          <p className="font-semibold">Join us in Hamburg, Germany, for ISC24!</p>
          <div className="relative mt-2 flex h-8 w-12 items-center overflow-hidden rounded-full bg-secondary text-xs text-primary">
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-50%] transition-transform duration-300 ease-out group-hover:translate-x-[150%]" />
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-250%] transition-transform duration-300 ease-out group-hover:translate-x-[-50%]" />
          </div>
        </div>
        <div className="group grid cursor-pointer gap-2 rounded-lg border bg-white p-4 transition-colors hover:border-primary dark:bg-black">
          <p className="text-sm text-muted-foreground">Learn</p>
          <p className="font-semibold">Using ArcHPC: The ultimate guide on Nexus.</p>
          <div className="relative mt-2 flex h-8 w-12 items-center overflow-hidden rounded-full bg-secondary text-xs text-primary">
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-50%] transition-transform duration-300 ease-out group-hover:translate-x-[150%]" />
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-250%] transition-transform duration-300 ease-out group-hover:translate-x-[-50%]" />
          </div>
        </div>
        <div className="group grid cursor-pointer gap-2 rounded-lg border bg-white p-4 transition-colors hover:border-primary dark:bg-black">
          <p className="text-sm text-muted-foreground">Case Study</p>
          <p className="font-semibold">How ORNL optimized their GPU performance</p>
          <div className="relative mt-2 flex h-8 w-12 items-center overflow-hidden rounded-full bg-secondary text-xs text-primary">
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-50%] transition-transform duration-300 ease-out group-hover:translate-x-[150%]" />
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-250%] transition-transform duration-300 ease-out group-hover:translate-x-[-50%]" />
          </div>
        </div>
      </div>

      <div className="mt-16 w-full">
        <h2 className="text-center text-3xl font-semibold">The Leader In GPU Optimization</h2>
        <p className="mx-auto mt-2 max-w-[90%] text-center font-light text-muted-foreground">
          Achieving peak GPU performance has eluded even the most advanced organizations due to the current limitations
          in managing and manipulating how data flows and threads execute on GPUs.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="flex aspect-square w-full flex-col justify-between rounded-lg border bg-white p-4 dark:bg-black">
            <p className="font-mono text-xs">GPU Resources</p>

            <div className="optimization-lottie px-16 [&>*]:cursor-default">
              <OptimizationLottie />
            </div>

            <p className="text-5xl font-semibold">
              100<span className="text-4xl font-bold">%</span> <span className="text-xl">Utilization*</span>
            </p>
          </div>

          <div className="flex aspect-square w-full flex-col justify-between rounded-lg border bg-white p-4 dark:bg-black">
            <p className="font-mono text-xs">GPU Performance</p>

            <div className="speed-lottie px-16 [&>*]:cursor-default">
              <SpeedLottie />
            </div>

            <p className="text-5xl font-semibold">
              5x <span className="text-xl">Faster*</span>
            </p>
          </div>

          <div className="flex aspect-square w-full flex-col justify-between rounded-lg border bg-white p-4 dark:bg-black">
            <p className="font-mono text-xs">Hardware Requirements</p>

            <div className="price-lottie px-16 [&>*]:cursor-default">
              <PriceLottie />
            </div>

            <p className="text-5xl font-semibold">
              83<span className="text-4xl font-bold">%</span> <span className="text-xl">Lower Cost*</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
