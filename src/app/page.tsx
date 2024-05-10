import { RiArrowRightLine, RiArrowRightSLine } from "@remixicon/react";

import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center px-8 py-24">
      <div className="flex items-center gap-4">
        <p className="font-light text-muted-foreground">
          <span className="font-medium text-primary">NVIDIA H200</span> GPU servers are now available for{" "}
          <span className="font-medium text-primary">June</span> delivery.
        </p>

        <Button size="sm" className="gap-0.5 rounded-full">
          Learn more
          <RiArrowRightSLine className="mt-[1px] h-4 w-4" />
        </Button>
      </div>

      <div className="mt-16 max-w-lg text-center">
        <h1 className="text-4xl font-bold">Start Your GPU Infrastructure Deployment Journey</h1>
        <p className="mt-6 font-light text-muted-foreground">
          Optimizing GPU infrastructure is complicated. Luckily, we{"'"}re here to help make the process easy.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-6">
        <div className="grid cursor-pointer gap-2 rounded-lg border p-4 transition-colors hover:border-primary">
          <p className="text-sm text-muted-foreground">Event</p>
          <p className="font-semibold">Join us in Hamburg, Germany, for ISC24!</p>
          <div className="mt-2 flex w-fit items-center rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground">
            <RiArrowRightLine className="h-4 w-4 shrink-0" />
          </div>
        </div>
        <div className="grid cursor-pointer gap-2 rounded-lg border p-4 transition-colors hover:border-primary">
          <p className="text-sm text-muted-foreground">Learn</p>
          <p className="font-semibold">Using ArcHPC: The ultimate guide on Nexus.</p>
          <div className="mt-2 flex w-fit items-center rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground">
            <RiArrowRightLine className="h-4 w-4 shrink-0" />
          </div>
        </div>
        <div className="grid cursor-pointer gap-2 rounded-lg border p-4 transition-colors hover:border-primary">
          <p className="text-sm text-muted-foreground">Case Study</p>
          <p className="font-semibold">How ORNL optimized their GPU performance</p>
          <div className="mt-2 flex w-fit items-center rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground">
            <RiArrowRightLine className="h-4 w-4 shrink-0" />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold">Companies Building With Arc</h2>
      </div>
    </main>
  );
}
