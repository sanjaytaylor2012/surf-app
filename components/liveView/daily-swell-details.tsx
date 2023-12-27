"use client";

import { DayWithHoursWithTides } from "@/types";
import { Day } from "@prisma/client";
import { useId } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DailySwellDetailsProps {
  day: DayWithHoursWithTides;
}

export const DailySwellDetails = ({ day }: DailySwellDetailsProps) => {
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
    const { hourNumber, ...hourDetails } = hour;
    //@ts-ignore
    return { ...hourDetails, hourNumber: timeMap[hourNumber.toString()] };
  });

  return (
    <div className="flex w-full  pr-8 pt-4 flex-col h-[200px] xl:h-[250px] ">
      <p className="ml-6 font-semibold">Swell Height</p>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart id={"tides bitch"} data={hours}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="90%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={"hourNumber"} />
          <YAxis />

          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <Area
            type="monotone"
            dataKey="swellHeight"
            stroke="#FFFFFF"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
