"use client";

import { cn } from "@/lib/utils";
import { DayWithHours } from "@/types";
import { Day } from "@prisma/client";
import { useId } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface WeekWaveHeightDetailsProps {
  day: DayWithHours;
}

export const WeekWaveHeightDetails = ({ day }: WeekWaveHeightDetailsProps) => {
  const timeMap = {
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
    "11": "11",
    "12": "12",
    "13": "1",
    "14": "2",
    "15": "3",
    "16": "4",
    "17": "5",
    "18": "6",
  };
  const hours: any = day.hours.map((hour) => {
    const { hourNumber, waveHeight, ...hourDetails } = hour;
    return {
      ...hourDetails,
      //@ts-ignore
      hourNumber: timeMap[hourNumber.toString()],
      waveHeight,
      waveHeightLabel: waveHeight,
    };
  });

  const highest = Math.round(
    day.hours.reduce((currentMax, contestant) => {
      const newMax =
        currentMax.waveHeight > contestant.waveHeight ? currentMax : contestant;
      return newMax;
    }, day.hours[0]).waveHeight
  );

  const lowest = Math.round(
    day.hours.reduce((currentMax, contestant) => {
      const newMax =
        currentMax.waveHeight < contestant.waveHeight ? currentMax : contestant;
      return newMax;
    }, day.hours[0]).waveHeight
  );

  const average = (lowest + highest) / 2;

  let waveParams;

  if (average < 3) {
    waveParams = "Poor";
  } else if (average >= 3 && average < 5) {
    waveParams = "Fair";
  } else if (average >= 5 && average < 6) {
    waveParams = "Good";
  } else if (average > 6) {
    waveParams = "Epic";
  }

  return (
    <div className="flex w-full h-[200px] flex-col pr-8 pt-4">
      <p className="ml-6 font-semibold">
        {
          //@ts-ignore
          day.date.slice(0, 10)
        }
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart id={"waves bitch"} data={hours}>
          <Bar dataKey={"waveHeightLabel"} fill="#8884d8" />
          <XAxis dataKey={"hourNumber"} />
          <YAxis domain={[0, 8]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-x-2 items-center">
        <p
          className={cn(
            "uppercase font-semibold text-lg ml-6",
            waveParams == "Poor" && "text-orange-500",
            waveParams == "Fair" && "text-yellow-500",
            waveParams == "Good" && "text-green-500",
            waveParams == "Epic" && "text-indigo-500"
          )}
        >
          {waveParams}
        </p>
        <p>
          {lowest !== highest ? (
            <p>
              {lowest} - {highest}ft
            </p>
          ) : (
            <p>
              {lowest}
              ft
            </p>
          )}
        </p>
      </div>
    </div>
  );
};
