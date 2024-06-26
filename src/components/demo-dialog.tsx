"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  RiArrowRightLine,
  RiCalendarLine,
  RiCheckLine,
  RiGroupLine,
  RiLoader2Line,
  RiTimeLine,
} from "@remixicon/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { addMonths, endOfTomorrow, formatDate, startOfMonth } from "date-fns";
import { useMemo, useState } from "react";
import { DateFormatter } from "react-day-picker";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { demoRequestSchema } from "~/schemas/demo";
import { cn } from "~/utils/cn";

import { Badge } from "./ui/badge";
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

type DemoDialogProps = {
  isLight?: boolean;
};

export default function DemoDialog({ isLight }: DemoDialogProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const currentMonth = useMemo(() => startOfMonth(new Date()), []);
  const tomorrow = useMemo(() => endOfTomorrow(), []);
  const threeMonthsLater = useMemo(() => addMonths(currentMonth, 3), [currentMonth]);

  const form = useForm<z.infer<typeof demoRequestSchema>>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (demoRequest: z.infer<typeof demoRequestSchema>) => {
      return axios.post("/api/demo", demoRequest);
    },
  });

  function onSubmit(values: z.infer<typeof demoRequestSchema>) {
    mutation.mutate(values);
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
          mutation.reset();
        }, 150);
      }}
    >
      <DialogTrigger asChild>
        <Button size="sm" variant={isLight ? "outline" : "default"} className="group flex gap-1">
          Book a demo
          <RiArrowRightLine className="mt-[1px] h-4 w-4 transition-transform duration-150 ease-out group-hover:-rotate-45" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn("min-h-[424px] max-w-[700px] p-0", mutation.isSuccess && "max-h-[100%] max-w-[500px]")}
      >
        {mutation.isSuccess && !!date ? (
          <div className="flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <RiCheckLine className="text-primary-foreground" />
                </div>
              </div>
              <div className="gap-1 text-center">
                <h2 className="text-2xl font-semibold">Your demo request has been received!</h2>
                <p className="text-secondary-foreground">We will contact you shortly to schedule a demo session.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t py-6">
              <div className="text-secondary-foreground">What</div>
              <div className="col-span-2">
                <p>ArcHPC Demo Session</p>
              </div>

              <div className="text-secondary-foreground">When</div>
              <div className="col-span-2">
                <p>{formatDate(date, "EEEE, MMMM d, yyyy")}</p>
              </div>

              <div className=" ">
                <span className="text-secondary-foreground">Who</span>
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="space-y-0.5">
                  <span className="flex items-center gap-2">
                    Anton Allen
                    <Badge>Host</Badge>
                  </span>
                  <p>anton@arccompute.io</p>
                </div>

                <div className="space-y-0.5">
                  <span className="flex items-center gap-2">
                    Michael Buchel<Badge>Host</Badge>
                  </span>
                  <p>michael@arccompute.io</p>
                </div>

                <div className="space-y-0.5">
                  <span>{form.getValues("name")}</span>
                  <p>{form.getValues("email")}</p>
                </div>
              </div>
            </div>
          </div>
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
                  Anton Allen, Michael Buchel
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
                              <FormLabel>
                                Name<span className="text-destructive">*</span>
                              </FormLabel>
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
                              <FormLabel>
                                Email Address<span className="text-destructive">*</span>
                              </FormLabel>
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
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setDate(undefined)}
                          disabled={mutation.isPending}
                        >
                          Back
                        </Button>
                        <Button size="sm" disabled={mutation.isPending}>
                          {mutation.isPending && (
                            <RiLoader2Line className="text-muted-foreground mr-1.5 h-4 w-4 animate-spin" />
                          )}
                          Confirm
                        </Button>
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
                  disabled={[{ dayOfWeek: [0, 6] }, { before: tomorrow }]}
                />
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
