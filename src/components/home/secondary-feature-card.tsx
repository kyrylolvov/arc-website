import { ElementType } from "react";

export type SecondaryFeatureCardProps = {
  icon: ElementType;
  title: string;
  description: string;
};

export default function SecondaryFeatureCard({ icon: Icon, title, description }: SecondaryFeatureCardProps) {
  return (
    <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg border bg-background-accent p-5 dark:bg-secondary/20">
      <div className="flex items-center gap-2">
        <Icon className="h-[18px] w-[18px] text-secondary-foreground/80" />
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <span className="max-w-[60ch] text-sm font-light tracking-tight text-secondary-foreground sm:max-w-full">
        {description}
      </span>
    </div>
  );
}
