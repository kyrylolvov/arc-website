"use client";

import { RiArrowRightLine, RiGroupLine, RiTimeLine } from "@remixicon/react";
import { startOfMonth, startOfToday } from "date-fns";
import { useMemo, useState } from "react";
import { DateFormatter } from "react-day-picker";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const formatWeekdayName: DateFormatter = (date, options) => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return daysOfWeek[date.getDay()];
};

type DemoDialogProps = {};

export default function DemoDialog({}: DemoDialogProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const currentMonth = useMemo(() => startOfMonth(new Date()), []);
  const today = useMemo(() => startOfToday(), []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="group flex gap-1">
          Book a demo
          <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-h-[424px] max-w-[700px] p-0">
        <div className="flex">
          <div className="flex w-[45%] shrink-0 flex-col justify-between border-r p-4">
            <div className="flex flex-col gap-4">
              <p className="text-xs text-secondary-foreground">Arc Compute</p>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">ArcHPC Demo</h2>
                <p className="text-sm text-secondary-foreground">
                  Ready to maximize your GPU performance? Schedule a live demo and discover how ArcHPC can revolutionize
                  your data center operations.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1.5 text-sm">
                <RiTimeLine className="h-[18px] w-[18px] text-secondary-foreground" />
                30 mins
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <RiGroupLine className="h-[18px] w-[18px] text-secondary-foreground" />
                Michael Buchel, Anton Allen
              </div>
            </div>
          </div>

          <div className="w-full p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              showOutsideDays={false}
              fromMonth={currentMonth}
              disabled={{ before: today }}
              formatters={{ formatWeekdayName }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
