import { RiArrowRightLine } from "@remixicon/react";

type LatestNewsCardProps = {
  title: string;
  type: string;
};

export default function LatestNewsCard({ type, title }: LatestNewsCardProps) {
  return (
    <div className="group flex h-full w-full cursor-pointer flex-col justify-between gap-2 rounded-lg border bg-background-accent p-4 transition-colors hover:border-primary">
      <div className="grid gap-2">
        <p className="text-sm text-secondary-foreground">{type}</p>
        <p className="font-semibold">{title}</p>
      </div>
      <div className="relative mt-2 flex h-8 w-12 items-center overflow-hidden rounded-full bg-secondary text-xs text-primary">
        <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-50%] transition-transform duration-300 ease-out group-hover:translate-x-[150%]" />
        <RiArrowRightLine className="absolute left-[50%] h-4 w-4 shrink-0 translate-x-[-250%] transition-transform duration-300 ease-out group-hover:translate-x-[-50%]" />
      </div>
    </div>
  );
}
