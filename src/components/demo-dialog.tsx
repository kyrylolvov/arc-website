"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RiArrowRightLine, RiCalendarLine, RiGroupLine, RiTimeLine } from "@remixicon/react";
import { addMonths, formatDate, startOfMonth, startOfToday, startOfTomorrow } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { useMemo, useState } from "react";
import { DateFormatter } from "react-day-picker";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formatWeekdayName: DateFormatter = (date, options) => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return daysOfWeek[date.getDay()];
};

const estTimezone = "America/New_York";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  notes: z.string().optional(),
});

type DemoDialogProps = {};

export default function DemoDialog({}: DemoDialogProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const currentMonth = useMemo(() => startOfMonth(new Date()), []);
  const today = useMemo(() => startOfToday(), []);
  const tomorrow = useMemo(() => startOfTomorrow(), []);
  const threeMonthsLater = useMemo(() => addMonths(currentMonth, 3), [currentMonth]);

  const nowInEST = useMemo(() => toZonedTime(new Date(), estTimezone), []);
  const isAfter4PM = useMemo(
    () => nowInEST.getHours() > 16 || (nowInEST.getHours() === 16 && nowInEST.getMinutes() > 0),
    [nowInEST],
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);

        if (open) return;

        setTimeout(() => {
          setDate(undefined);
          form.reset();
        }, 150);
      }}
    >
      <DialogTrigger asChild>
        <Button size="sm" className="group flex gap-1">
          Book a demo
          <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-h-[424px] max-w-[700px] p-0">
        {form.formState.isSubmitSuccessful ? (
          <></>
        ) : (
          <div className="flex">
            <div className="flex w-[45%] shrink-0 flex-col justify-between border-r p-4">
              <div className="flex flex-col gap-4">
                <p className="text-xs text-secondary-foreground">Arc Compute</p>
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-bold">ArcHPC Demo</h2>
                  <p className="text-sm text-secondary-foreground">
                    Ready to maximize your GPU performance? Schedule a live demo and discover how ArcHPC can
                    revolutionize your data center operations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1.5 text-sm">
                  <RiCalendarLine className="h-[18px] w-[18px] text-secondary-foreground" />
                  <span className="text-sm">{date ? formatDate(date, "MMMM d, yyyy") : "Select a date"}</span>
                </div>
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
              {date ? (
                <div className="h-full">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
                      <div className="space-y-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem className="space-y-1.5">
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your name..." className="h-9" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-1.5">
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your email address..." className="h-9" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem className="space-y-1.5">
                              <FormLabel>Notes</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter any additional information that will help us to better understand your needs..."
                                  className="h-[108px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setDate(undefined)}>
                          Back
                        </Button>
                        <Button size="sm">Confirm</Button>
                      </div>
                    </form>
                  </Form>
                </div>
              ) : (
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  fromMonth={currentMonth}
                  toMonth={threeMonthsLater}
                  formatters={{ formatWeekdayName }}
                  showOutsideDays={false}
                  disabled={[{ dayOfWeek: [0, 6] }, { before: isAfter4PM ? tomorrow : today }]}
                />
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
