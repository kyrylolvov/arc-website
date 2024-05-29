"use client";

import { RiPlayFill } from "@remixicon/react";

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type VideoDialogProps = {
  preview: JSX.Element;
};

export default function VideoDialog({ preview }: VideoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg border text-secondary-foreground/60">
          <Button className="absolute left-[50%] top-[50%] aspect-square h-auto w-auto shrink-0 translate-x-[-50%] translate-y-[-50%] p-3 transition-transform duration-200 hover:bg-primary group-hover:scale-105">
            <RiPlayFill className="h-10 w-10" />
          </Button>
          <div className="">{preview}</div>
        </div>
      </DialogTrigger>
      <DialogContent className="aspect-video max-w-[784px] overflow-hidden border-0 bg-black p-0">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="autoplay; encrypted-media" title="video" />
      </DialogContent>
    </Dialog>
  );
}
