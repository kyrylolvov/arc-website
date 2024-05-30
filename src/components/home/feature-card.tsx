export type FeatureCardProps = {
  animation: JSX.Element;
  title: string;
  description: string;
};

export default function FeatureCard({ animation, title, description }: FeatureCardProps) {
  return (
    <div className="flex h-full min-h-[360px] w-full flex-col overflow-hidden rounded-lg border bg-background-accent dark:bg-secondary/20">
      {animation}
      <div className="flex h-fit flex-col gap-1 p-4">
        <span className="text-xl font-semibold">{title}</span>
        <span className="max-w-[45ch] text-sm font-light tracking-tight text-secondary-foreground sm:max-w-full">
          {description}
        </span>
      </div>
    </div>
  );
}
