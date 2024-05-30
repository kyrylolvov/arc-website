"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "~/utils/cn";
import { themeOptions } from "~/utils/theme";
import generateId from "~/utils/uuid";

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
          aria-label={`Switch to ${option.value} theme`}
          key={generateId()}
          size="icon"
          variant="ghost"
          onClick={() => setTheme(option.value)}
          className={cn(
            "h-fit w-fit rounded-full p-2 text-secondary-foreground hover:bg-transparent hover:text-primary",
            !!theme && theme === option.value && "bg-secondary text-primary hover:bg-secondary",
          )}
        >
          <option.icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}
