import { RiArrowRightLine } from "@remixicon/react";

import { Button } from "../ui/button";

type SecondaryProductCardProps = {
  label: string;
  title: string;
  description: string;
};

export default function SecondaryProductCard({ label, title, description }: SecondaryProductCardProps) {
  return (
    <div className="flex w-full flex-col justify-between gap-12 rounded-lg border bg-white p-4 dark:bg-black sm:p-8">
      <div className="grid gap-8">
        <div className="-ml-0.5 w-fit rounded-full border px-2 py-1 font-mono text-xs md:px-4 md:py-2 md:text-sm">
          {label}
        </div>
        <div className="grid gap-2">
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <Button size="sm" className="group flex w-fit gap-1">
        Learn more
        <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
      </Button>
    </div>
  );
}