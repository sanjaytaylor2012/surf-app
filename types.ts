import { Day, Hour, Tide } from "@prisma/client";

export type DayWithHoursWithTides = Day & {
  hours: Hour[];
  tides: Tide[];
};
