import { RiArrowRightLine } from "@remixicon/react";

import { Button } from "../ui/button";

type ProductCardProps = {
  label: string;
  title: string;
  description: string;
  features: string[];
  lottie: JSX.Element;
};

export default function ProductCard({ label, title, description, features, lottie }: ProductCardProps) {
  return (
    <div className="w-full rounded-lg border bg-background-accent p-4 sm:p-8">
      <div className="-ml-0.5 w-fit rounded-full border px-2 py-1 font-mono text-xs md:px-4 md:py-2 md:text-sm">
        {label}
      </div>

      <div className="flex flex-col-reverse items-center justify-between gap-8 md:grid md:grid-cols-10 ">
        <div className="col-span-5 flex flex-col gap-6 sm:mt-8 md:gap-12">
          <div className="grid gap-8">
            <div className="grid gap-4 md:gap-6">
              <div className="grid gap-2">
                <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
                <p className="font-medium md:text-lg">{description}</p>
              </div>
              <ul className="grid gap-1 text-sm text-secondary-foreground md:text-base">
                {features.map((feature, index) => (
                  <li key={`${title}-card-feature-${index}`}>- {feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <Button size="sm" className="group flex w-fit gap-1">
            Learn more
            <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
          </Button>
        </div>
        <div className="col-span-5 grid aspect-square h-full w-full place-items-center">{lottie}</div>
      </div>
    </div>
  );
}
