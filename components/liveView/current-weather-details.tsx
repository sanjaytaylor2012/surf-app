"use client";

import { cn } from "@/lib/utils";
import { DayWithHours } from "@/types";
import { Day, Hour } from "@prisma/client";
import { Droplet, Palmtree, SunMedium, Waves } from "lucide-react";

interface CurrentWeatherDetailsProps {
  closestHour: Hour;
}

function getWetsuitThickness(temperature: number) {
  if (temperature >= 65) {
    return "2";
  } else if (temperature >= 60 && temperature < 65) {
    return "3/2";
  } else if (temperature >= 55 && temperature < 60) {
    return "4/3";
  } else if (temperature < 55) {
    return "5/4";
  }
}

export const CurrentWeatherDetails = ({
  closestHour,
}: CurrentWeatherDetailsProps) => {
  const fahrenheit_temp = closestHour.waterTemperature;

  const fahrenheit_land_temp = closestHour.airTempurature;
  const thickness = getWetsuitThickness(fahrenheit_temp);

  return (
    <div className="flex w-full p-4">
      {" "}
      <div className="flex flex-col w-full ml-2 xl:ml-4">
        <p className=" text-lg xl:text-2xl font-semibold mb-5">
          {thickness}mm Wetsuit
        </p>

        <div className="flex items-center xl:text-4xl text-3xl font-bold">
          <Waves size={30} className="text-blue-500 mr-2" /> {fahrenheit_temp}{" "}
          °f
        </div>
        <div className="flex items-center font-semibold text-md xl:text-xl">
          <SunMedium size={20} className="text-yellow-500 mr-2" />
          <p className="text-zinc-500">{fahrenheit_land_temp} °f</p>
        </div>
      </div>
    </div>
  );
};
