import { RiArrowRightLine } from "@remixicon/react";

import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto grid h-[calc(100dvh)] max-w-6xl place-items-center px-8 py-24">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center">
          <h1 className="mr-4 border-r-2 pr-4 text-2xl font-semibold leading-10">404</h1>
          <p className="font-light leading-10">Sorry, the page was not found.</p>
        </div>
        <Button size="sm" className="group flex gap-1">
          Go Home
          <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
        </Button>
      </div>
    </main>
  );
}
