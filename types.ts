import { Day, Hour } from "@prisma/client";

export type DayWithHoursWithTides = Day & {
  hours: Hour[];
  tides: any;
};

export type DayWithHours = Day & {
  hours: Hour[];
};
