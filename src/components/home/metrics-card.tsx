export type MetricsCardProps = {
  id: string;
  value: string;

  description: string;
};

export default function MetricsCard({ value, description }: MetricsCardProps) {
  return (
    <div className="grid aspect-square h-full w-full place-items-center overflow-hidden rounded-xl border bg-foreground/90 p-6">
      <div className="grid flex-col gap-4 text-center">
        <h2 className="text-shadow-dark-grey font-mono text-7xl font-bold text-primary-foreground lg:text-6xl">
          {value}
        </h2>
        <p className="mx-auto max-w-[15ch] text-border">
          {description}
          <span className="cursor-pointer text-primary-foreground">*</span>
        </p>
      </div>
    </div>
  );
}
