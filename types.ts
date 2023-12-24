import { Day, Hour } from "@prisma/client";

export type DayWithHours = Day & {
  hours: Hour[];
};
