import { RiArrowRightLine } from "@remixicon/react";

import { Button } from "../ui/button";
import VideoDialog from "../video-dialog";

type ProductCardProps = {
  label: string;
  title: string;
  description: string;
  preview: JSX.Element;
};

export default function ProductCard({ label, title, description, preview }: ProductCardProps) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg border bg-background-accent p-4">
      <div className="w-fit rounded-full border px-2 py-1 font-mono text-xs">{label}</div>

      <div className="grid gap-4">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <VideoDialog preview={preview} />
        <p className="text-secondary-foreground">{description}</p>
      </div>

      <Button size="sm" className="group mt-auto flex w-fit gap-1">
        Learn more
        <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
      </Button>
    </div>
  );
}
