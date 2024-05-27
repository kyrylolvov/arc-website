type FeatureCardProps = {
  title: string;
  value: string;
  unit: string;
  description: string;
  lottie: JSX.Element;
};

export default function FeatureCard({ title, lottie, value, unit, description }: FeatureCardProps) {
  return (
    <div className="flex aspect-square w-full flex-col justify-between rounded-lg border bg-background-accent p-4">
      <p className="font-mono text-xs">{title}</p>

      {lottie}

      <p className="text-4xl font-semibold sm:text-5xl">
        {value}
        <span className="text-3xl font-bold sm:text-4xl">{unit}</span>{" "}
        <span className="text-xl">
          {description}
          <span className="text-secondary-foreground">*</span>
        </span>
      </p>
    </div>
  );
}
