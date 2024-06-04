"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/cn";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
        month: "space-y-4 w-full",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1 rounded-md",
        nav_button_next: "absolute right-1 rounded-md",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full justify-between",
        head_cell: "text-secondary-foreground uppercase rounded-md w-full font-normal text-[0.8rem]",
        row: "flex w-full mt-2 justify-between space-x-1",
        cell: "w-full aspect-square text-center text-sm p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full h-auto aspect-square rounded-md p-0 border-2 border-transparent bg-secondary hover:text-foreground hover:border-foreground",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "!bg-primary !text-primary-foreground !hover:bg-primary !hover:text-primary-foreground before:bg-primary-foreground",
        day_today:
          "text-foreground relative before:absolute  before:bottom-1.5 before:w-[4px] before:h-[4px] before:rounded-full before:bg-primary",
        day_disabled: "text-secondary-foreground bg-transparent hover:border-transparent",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
