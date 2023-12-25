import { DayWithHours } from "@/types";
import { DailyWaveHeightDetails } from "../liveView/daily-wave-height-details";
import { WeekWaveHeightDetails } from "../liveView/week-wave-height-details";

interface ForecastProps {
  week: DayWithHours[];
}

export const Forecast = ({ week }: ForecastProps) => {
  return (
    <div className="flex flex-col h-full w-full gap-y-2 mt-6">
      <p className="font-semibold">Wave Heights</p>
      {week.map((day) => {
        return (
          <div
            key={day.id}
            className="flex mb-4 pb-4 w-full h-[500px] xl:h-[250px] rounded-3xl bg-[#3a3a3c] "
          >
            <WeekWaveHeightDetails day={day} />
          </div>
        );
      })}
    </div>
  );
};
