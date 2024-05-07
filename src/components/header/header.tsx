import { Icons } from "~/components/icons";
import { cn } from "~/utils/cn";

export default function Header() {
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full max-w-screen-2xl border-b border-border bg-background/60 backdrop-blur px-6 py-5 flex items-center justify-between",
        "supports-[backdrop-filter]:bg-background/60",
      )}
    >
      <Icons.Logo className="h-6" />
    </header>
  );
}
