"use client";

import { cn } from "@/lib/utils";
import { Hour } from "@prisma/client";
import { MousePointer2 } from "lucide-react";

interface CurrentWindDetailsProps {
  closestHour: Hour;
}

export const CurrentWindDetails = ({
  closestHour,
}: CurrentWindDetailsProps) => {
  const windDirection = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  const index = Math.round(closestHour.windDirection / 45) % 8;
  const direction = windDirection[index];

  return (
    <div className="flex w-full p-4">
      {" "}
      <div className="flex flex-col w-full ml-2 xl:ml-4">
        <p className="capitalize text-lg xl:text-2xl font-semibold mb-5">
          Wind
        </p>

        <p className=" xl:text-4xl text-3xl font-bold">
          {closestHour.windSpeed} m/s
        </p>
        <div
          className={cn("flex font-semibold text-md xl:text-xl text-zinc-500")}
        >
          <p>
            {closestHour.gust} m/s gust {direction}
          </p>
          <p
            style={{
              transform: `rotate(${45 + closestHour.windDirection}deg)`,
            }}
          >
            <MousePointer2 size={15} />
          </p>
        </div>
      </div>
    </div>
  );
};
