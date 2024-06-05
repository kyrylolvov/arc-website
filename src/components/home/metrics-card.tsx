export type MetricsCardProps = {
  id: string;
  value: string;

  description: string;
};

export default function MetricsCard({ value, description }: MetricsCardProps) {
  return (
    <div className="grid aspect-square h-full w-full place-items-center overflow-hidden rounded-lg border bg-background-accent p-6 dark:bg-secondary/20">
      <div className="flex flex-col gap-8 text-center">
        <h2 className="bg-gradient-to-b from-foreground/70 to-foreground bg-clip-text text-7xl font-bold text-transparent">
          {value}
        </h2>
        <p className="text-secondary-foreground">{description}</p>
      </div>
    </div>
  );
}
