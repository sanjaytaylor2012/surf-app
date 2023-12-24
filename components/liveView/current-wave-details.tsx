"use client";

import { cn } from "@/lib/utils";
import { Hour } from "@prisma/client";

interface CurrentWaveDetailsProps {
  closestHour: Hour;
}

export const CurrentWaveDetails = ({
  closestHour,
}: CurrentWaveDetailsProps) => {
  let waveParams;
  let waveHeight;

  if (closestHour.waveHeight < 3) {
    waveParams = "Poor";
  } else if (closestHour.waveHeight >= 3 && closestHour.waveHeight < 5) {
    waveParams = "Fair";
  } else if (closestHour.waveHeight >= 5 && closestHour.waveHeight < 6) {
    waveParams = "Good";
  } else if (closestHour.waveHeight > 6) {
    waveParams = "Epic";
  }

  if (closestHour.waveHeight < 2) {
    waveHeight = "ankle-shin high";
  } else if (closestHour.waveHeight >= 2 && closestHour.waveHeight < 3) {
    waveHeight = "knee-thigh high";
  } else if (closestHour.waveHeight >= 3 && closestHour.waveHeight < 4) {
    waveHeight = "waist-belly high";
  } else if (closestHour.waveHeight >= 4 && closestHour.waveHeight < 5) {
    waveHeight = "chest-shoulder high";
  } else if (closestHour.waveHeight >= 5 && closestHour.waveHeight < 6) {
    waveHeight = "head high";
  } else if (closestHour.waveHeight > 6) {
    waveHeight = "overhead";
  }

  return (
    <div className="flex w-full p-4">
      <div
        className={cn(
          "flex w-4 xl:w-6 h-full rounded-md",
          waveParams == "Poor" && "bg-orange-500",
          waveParams == "Fair" && "bg-yellow-500",
          waveParams == "Good" && "bg-green-500",
          waveParams == "Epic" && "bg-indigo-500"
        )}
      />
      <div className="flex flex-col w-full ml-2 xl:ml-4 justify-between">
        <p className="capitalize text-lg xl:text-2xl font-semibold">
          {waveHeight}
        </p>
        <p className=" xl:text-6xl text-5xl font-bold">
          {Math.round(closestHour.waveHeight - 1)} -{" "}
          {Math.round(closestHour.waveHeight)} ft
        </p>
        <p
          className={cn(
            "uppercase font-semibold text-lg xl:text-2xl ",
            waveParams == "Poor" && "text-orange-500",
            waveParams == "Fair" && "text-yellow-500",
            waveParams == "Good" && "text-green-500",
            waveParams == "Epic" && "text-indigo-500"
          )}
        >
          {waveParams}
        </p>
      </div>
    </div>
  );
};
