"use client";

import { cn } from "@/lib/utils";
import { DayWithHours } from "@/types";
import { Day, Hour } from "@prisma/client";
import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";

interface CurrentTideDetailsProps {
  day: DayWithHours;
  closestHour: Hour;
}

export const CurrentTideDetails = ({
  day,
  closestHour,
}: CurrentTideDetailsProps) => {
  const nextHour = day.hours.find((hour) => {
    if (hour.hourNumber == closestHour.hourNumber + 1) {
      return hour;
    }
  });

  let tideValue = "Falling";

  if (nextHour) {
    if (nextHour.waveHeight >= closestHour.waveHeight) {
      tideValue = "Rising";
    }
  }

  const highTideHour = day.hours.reduce((maxHour, currentHour) => {
    return currentHour.waveHeight > maxHour.waveHeight ? currentHour : maxHour;
  }, day.hours[0]);

  const highTideTime = highTideHour.hourNumber % 12;
  const highTideTimeIndicator = highTideHour.hourNumber > 12 ? "pm" : "am";

  return (
    <div className="flex w-full p-4">
      {" "}
      <div className="flex flex-col w-full ml-2 xl:ml-4">
        <p className="capitalize text-lg xl:text-2xl font-semibold mb-5">
          {tideValue} Tide{" "}
        </p>
        <div className="flex items-center">
          <p className=" xl:text-4xl text-3xl font-bold mr-2">
            {Math.round(closestHour.waveHeight)} ft
          </p>

          {tideValue == "Rising" ? (
            <ArrowBigUpDash size={35} className="text-green-500 " />
          ) : (
            <ArrowBigDownDash size={35} className="text-red-500" />
          )}
        </div>
        <p className={cn("font-semibold text-md xl:text-xl text-zinc-500")}>
          {Math.round(highTideHour.waveHeight)} ft high at {highTideTime}
          {highTideTimeIndicator}
        </p>
      </div>
    </div>
  );
};
