"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "~/utils/cn";
import { themeOptions } from "~/utils/theme";

import { Button } from "./button";

export default function FooterThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex">
      {themeOptions.map((option) => (
        <Button
          key={option.value}
          size="icon"
          variant="ghost"
          onClick={() => setTheme(option.value)}
          className={cn(
            "h-fit w-fit rounded-full p-2 text-muted-foreground hover:bg-transparent hover:text-primary",
            !!theme && theme === option.value && "bg-muted text-primary hover:bg-muted",
          )}
        >
          <option.icon className="h-[18px] w-[18px]" />
        </Button>
      ))}
    </div>
  );
}
