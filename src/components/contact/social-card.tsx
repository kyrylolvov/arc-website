import { ElementType } from "react";

export type SocialCardProps = {
  id: string;
  icon: ElementType;
  title: string;
  description: string;
};

export default function SocialCard({ icon: Icon, title, description }: SocialCardProps) {
  return (
    <div className="group w-full cursor-pointer overflow-hidden rounded-xl border bg-background-accent p-4 transition-colors hover:border-foreground">
      <div className="flex items-center gap-4">
        <div className="aspect-square rounded-lg bg-secondary p-3 transition-colors group-hover:bg-primary/90 group-hover:text-primary-foreground">
          <Icon />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-lg font-medium">{title}</div>
          <div className="text-secondary-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
}
