"use client";

import { DayWithHours } from "@/types";
import { Day } from "@prisma/client";
import { useId } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DailyWaveHeightDetailsProps {
  day: DayWithHours;
}

export const DailyWaveHeightDetails = ({
  day,
}: DailyWaveHeightDetailsProps) => {
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
      waveHeightLabel: waveHeight.toFixed(1),
    };
  });

  return (
    <div className="flex w-full flex-col pr-4 pt-4">
      <p className="ml-6 font-semibold">Wave Height</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart id={"waves bitch"} data={hours}>
          <Bar
            label={{ position: "top" }}
            dataKey={"waveHeightLabel"}
            fill="#8884d8"
          />
          {/* <LabelList
            dataKey="waveHeightLabel"
            position="top"
            fill="black"
          /> */}
          <XAxis dataKey={"hourNumber"} />
          <YAxis domain={[0, 8]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
