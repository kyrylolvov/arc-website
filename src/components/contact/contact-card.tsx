import { ElementType } from "react";

export type ContactCardProps = {
  id: string;
  icon: ElementType;
  title: string;
  footer: JSX.Element;
};

export default function ContactCard({ icon: Icon, title, footer }: ContactCardProps) {
  return (
    <div className="aspect-square h-full w-full overflow-hidden rounded-xl border bg-foreground/90 p-12">
      <div className="text-center">
        <div className="mx-auto aspect-square w-fit rounded-md border bg-secondary p-2">
          <Icon className="h-10 w-10" />
        </div>
        <h2 className="text-shadow-dark-grey mt-6 font-mono text-2xl font-bold text-primary-foreground">{title}</h2>
        {footer}
      </div>
    </div>
  );
}
