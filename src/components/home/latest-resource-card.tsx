type LatestResourceCardProps = {
  title: string;
  type: string;
};

export default function LatestResourceCard({ type, title }: LatestResourceCardProps) {
  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-lg border bg-white hover:border-primary dark:bg-black">
      <div className="aspect-video bg-secondary" />
      <div className="flex flex-col gap-8 px-3 py-4">
        <div className="grid gap-3">
          <p className="font-mono text-xs text-secondary-foreground">{type}</p>
          <p className="font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
}
