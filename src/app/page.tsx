import { RiArrowRightSLine } from "@remixicon/react";

import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-8 py-24">
      <div className="flex items-center gap-4">
        <p className="text-muted-foreground">
          <span className="font-medium text-primary">NVIDIA H200</span> GPU servers are now available for{" "}
          <span className="font-medium text-primary">June</span> delivery.
        </p>

        <Button size="sm" className="gap-0.5 rounded-full">
          Learn more
          <RiArrowRightSLine className="mt-[1px] h-4 w-4" />
        </Button>
      </div>

      <div className="mt-16 max-w-lg text-center">
        <h1 className="text-4xl font-medium">Start Your GPU Infrastructure Deployment Journey</h1>
        <p className="mt-6 font-light text-muted-foreground">
          Optimizing GPU infrastructure is complicated. Luckily, we’re here to help make the process easy.
        </p>
      </div>
    </main>
  );
}
