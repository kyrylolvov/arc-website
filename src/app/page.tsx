import { RiArrowRightLine } from "@remixicon/react";

import AutomateLottie from "~/components/lotties/automate-lottie";
import ManageLottie from "~/components/lotties/manage-lottie";
import OptimizationLottie from "~/components/lotties/optimization-lottie";
import PriceLottie from "~/components/lotties/price-lottie";
import SpeedLottie from "~/components/lotties/speed-lottie";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-8 py-24">
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

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="group grid w-full cursor-pointer gap-2 rounded-lg border bg-white p-4 transition-colors hover:border-primary dark:bg-black">
          <div className="grid gap-2">
            <p className="text-sm text-muted-foreground">Event</p>
            <p className="font-semibold">Join us next week in Hamburg, Germany, for ISC24!</p>
          </div>
          <div className="relative mt-2 flex h-8 w-12 items-center overflow-hidden rounded-full bg-secondary text-xs text-primary">
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-50%] transition-transform duration-300 ease-out group-hover:translate-x-[150%]" />
            <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-250%] transition-transform duration-300 ease-out group-hover:translate-x-[-50%]" />
          </div>
        </div>
        <div className="group grid w-full cursor-pointer gap-2 rounded-lg border bg-white p-4 transition-colors hover:border-primary dark:bg-black">
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

      <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">The Leader In GPU Optimization</h2>
        <p className="mx-auto mt-2 max-w-[70%] text-center font-light text-muted-foreground">
          Achieving peak GPU performance has eluded even the most advanced organizations due to the current limitations
          in managing and manipulating how data flows and threads execute on GPUs.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="flex aspect-square w-full flex-col justify-between rounded-lg border bg-white p-4 dark:bg-black">
            <p className="font-mono text-xs">GPU Resources</p>

            <div className="optimization-lottie px-[72px] [&>*]:cursor-default">
              <OptimizationLottie />
            </div>

            <p className="text-5xl font-semibold">
              100<span className="text-4xl font-bold">%</span>{" "}
              <span className="text-xl">
                Utilization<span className="text-muted-foreground">*</span>
              </span>
            </p>
          </div>

          <div className="flex aspect-square w-full flex-col justify-between rounded-lg border bg-white p-4 dark:bg-black">
            <p className="font-mono text-xs">GPU Performance</p>

            <div className="speed-lottie px-[72px] [&>*]:cursor-default">
              <SpeedLottie />
            </div>

            <p className="text-5xl font-semibold">
              5x{" "}
              <span className="text-xl">
                Faster<span className="text-muted-foreground">*</span>
              </span>
            </p>
          </div>

          <div className="flex aspect-square w-full flex-col justify-between rounded-lg border bg-white p-4 dark:bg-black">
            <p className="font-mono text-xs">Hardware Requirements</p>

            <div className="price-lottie px-[72px] [&>*]:cursor-default">
              <PriceLottie />
            </div>

            <p className="text-5xl font-semibold">
              83<span className="text-4xl font-bold">%</span>{" "}
              <span className="text-xl">
                Lower Cost<span className="text-muted-foreground">*</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">Unlock the True Potential of Your GPU Infrastructure</h2>
        <p className="mx-auto mt-2 max-w-[70%] text-center font-light text-muted-foreground">
          An advanced GPU management solution that maximizes user and task density, optimizing GPU utilization and
          performance across your data center.
        </p>
        <div className="mt-8 grid gap-12">
          <div className="grid w-full grid-cols-10 justify-between gap-8 rounded-lg border bg-white p-8 dark:bg-black">
            <div className="col-span-5 flex flex-col gap-12">
              <div className="grid gap-8">
                <div className="-ml-0.5 w-fit rounded-full border px-4 py-2 font-mono text-sm">Manage</div>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <h2 className="text-4xl font-semibold">ArcHPC Nexus</h2>
                    <p className="text-lg font-medium">
                      Creates and manages your environment while optimizing GPU utilization and performance, enables
                      administrators to enhance user and task density.
                    </p>
                  </div>
                  <ul className="grid gap-1 text-muted-foreground">
                    <li>- Intercepts machine code at the load stage dedicated to the accelerated hardware</li>
                    <li>
                      - Aware of the instructions for execution and the data size, but not the data contents,
                      maintaining data privacy.
                    </li>
                  </ul>
                </div>
              </div>
              <Button size="sm" className="group flex w-fit gap-1">
                Learn more
                <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
              </Button>
            </div>
            <div className="col-span-5 grid h-full w-full place-items-center">
              <div className="manage-lottie h-fit w-[70%] [&>*]:cursor-default">
                <ManageLottie />
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-10 justify-between gap-8 rounded-lg border bg-white p-8 dark:bg-black">
            <div className="col-span-5 flex flex-col gap-12">
              <div className="grid gap-8">
                <div className="-ml-0.5 w-fit rounded-full border px-4 py-2 font-mono text-sm">Automate</div>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <h2 className="text-4xl font-semibold">ArcHPC Oracle</h2>
                    <p className="text-lg font-medium">
                      Automates task matching and task deployment across your cluster, by managing low-level operational
                      execution of instructions
                    </p>
                  </div>
                  <ul className="grid gap-1 text-muted-foreground">
                    <li>- The source code is saved to the host memory, independent of Nexus{"'"}s operation.</li>
                    <li>
                      - Pairs, matches tasks, and staggers kernel execution times using the information intercepted from
                      machine codes.
                    </li>
                  </ul>
                </div>
              </div>
              <Button size="sm" className="group flex w-fit gap-1">
                Learn more
                <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
              </Button>
            </div>
            <div className="col-span-5 grid h-full w-full place-items-center">
              <div className="automate-lottie h-fit w-[70%] [&>*]:cursor-default">
                <AutomateLottie />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">End-to-End GPU Infrastructure Solutions</h2>
        <p className="mx-auto mt-2 max-w-[70%] text-center font-light text-muted-foreground">
          Upgrade your infrastructure with the most in demand NVIDIA GPUs or Tap into unprecedented performance,
          scalability, and security for every workload
        </p>
        <div className="mt-8 grid grid-cols-2 gap-12">
          <div className="flex aspect-[4/3] w-full flex-col justify-between rounded-lg border bg-white p-8 dark:bg-black">
            <div className="grid gap-8">
              <div className="-ml-0.5 w-fit rounded-full border px-4 py-2 font-mono text-sm">Build</div>
              <div className="grid gap-2">
                <h2 className="text-4xl font-semibold">GPU Servers</h2>
                <p className="text-muted-foreground">
                  Leverage the power of the latest NVIDIA GPUs in your data center. Whether you need one server or
                  thousands, we{"'"}ve got you covered with industry-best lead times on NVIDIA H100, A100, and L40S
                  deployments.
                </p>
              </div>
            </div>
            <Button size="sm" className="group flex w-fit gap-1">
              Learn more
              <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
            </Button>
          </div>

          <div className="flex aspect-[4/3] w-full flex-col justify-between rounded-lg border bg-white p-8 dark:bg-black">
            <div className="grid gap-8">
              <div className="-ml-0.5 w-fit rounded-full border px-4 py-2 font-mono text-sm">Deploy</div>
              <div className="grid gap-2">
                <h2 className="text-4xl font-semibold">Cloud Instances</h2>
                <p className="text-muted-foreground">
                  Enable large-scale model training with top-of-the-line NVIDIA H100 SXM5 GPUs. Arc Compute{"'"}s cloud
                  clusters are available for a minimum 2-year commitment and start at just $2.20/hr per GPU.
                </p>
              </div>
            </div>
            <Button size="sm" className="group flex w-fit gap-1">
              Learn more
              <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-32 w-full">
        <div className="rounded-lg border bg-white p-14 dark:bg-black">
          <h2 className="text-center text-3xl font-semibold">Ready To Try Arc Compute?</h2>
          <p className="mx-auto mt-6 max-w-[70%] text-center text-lg text-muted-foreground">
            Access ArcHPC today to see how companies using Nexus and Oracle benefit from rapid time-to-market and faster
            iterations across the entire AI lifecycle.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="sm" className="group flex gap-1">
              Book a demo
              <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-32 w-full">
        <h2 className="text-center text-3xl font-semibold">Featured Resources</h2>
        <div className="mt-10 flex justify-center"></div>
      </div>
    </main>
  );
}
