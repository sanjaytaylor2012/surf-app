"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CurrentWaveDetails } from "./current-wave-details";
import { CurrentWindDetails } from "./current-wind-details";
import { CurrentTideDetails } from "./current-tide-details";
import { Day, Hour } from "@prisma/client";
import { DayWithHours } from "@/types";
import { CurrentWeatherDetails } from "./current-weather-details";
import { DailyWaveHeightDetails } from "./daily-wave-height-details";
import { DailyTideDetails } from "./daily-tide-details";

interface LiveViewProps {
  data: DayWithHours;
}

export const LiveView = ({ data }: LiveViewProps) => {
  const currentHour = new Date().getHours();

  const timeMap = {
    "7": "7am",
    "8": "8am",
    "9": "9am",
    "10": "10am",
    "11": "11am",
    "12": "12pm",
    "13": "1pm",
    "14": "2pm",
    "15": "3pm",
    "16": "4pm",
    "17": "5pm",
    "18": "6pm",
  };

  const closestHour = data.hours.reduce(
    (closest: Hour, candidateHour: Hour) => {
      const currentDiff = Math.abs(currentHour - closest.hourNumber);
      const candidateDiff = Math.abs(currentHour - candidateHour.hourNumber);
      return candidateDiff < currentDiff ? candidateHour : closest;
    },
    data.hours[0]
  ) as Hour;

  return (
    <div
      className="w-full h-full flex flex-col   mt-10    gap-y-4
    "
    >
      <p className="font-semibold">
        Current Update:{" "}
        {
          //@ts-ignore
          timeMap[closestHour.hourNumber.toString()]
        }{" "}
        on{" "}
        {
          //@ts-ignore

          data.date.slice(0, 10)
        }{" "}
      </p>

      <div
        className="flex w-full gap-y-4 md:gap-y-0 sm:flex-row flex-col gap-x-4 
      justify-between"
      >
        <div className="flex w-full h-[200px] xl:h-[250px] rounded-3xl bg-[#3a3a3c] ">
          <CurrentWaveDetails closestHour={closestHour} />
        </div>
        <div className="flex   w-full h-[200px] xl:h-[250px]  rounded-3xl bg-[#3a3a3c]">
          <CurrentWindDetails closestHour={closestHour} />
        </div>
        <div className="flex   w-full  h-[200px] xl:h-[250px]  rounded-3xl bg-[#3a3a3c]">
          <CurrentTideDetails day={data} closestHour={closestHour} />
        </div>
      </div>
      <div
        className="flex w-full gap-y-4 md:gap-y-0  sm:flex-row flex-col gap-x-4 
      justify-around"
      >
        <div className="flex w-full sm:w-1/3 h-[200px] xl:h-[250px] rounded-3xl bg-[#3a3a3c] ">
          <CurrentWeatherDetails closestHour={closestHour} />
        </div>
        <div className="flex w-full h-[200px] xl:h-[250px] rounded-3xl bg-[#3a3a3c] ">
          <DailyWaveHeightDetails day={data} />
        </div>
      </div>
      <div className="flex h-[200px] xl:h-[250px]  mb-4 pb-4 w-full  flex-grow  rounded-3xl bg-[#3a3a3c] ">
        <DailyTideDetails day={data} />
      </div>
    </div>
  );
};
