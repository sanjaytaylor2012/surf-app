import { Forecast } from "@/components/forecast/forecast";
import { LiveView } from "@/components/liveView/live-view";
import { Day } from "@prisma/client";

const getData = async () => {
  const response = await fetch("https://surf-app-411a8.web.app/forecast", {
    method: "GET",
    cache: "no-store",
  });
  const week = await response.json();
  return week.week;
};

const ForecastPage = async () => {
  const week = await getData();

  return (
    <div className="flex w-full h-full ">
      <Forecast week={week} />
    </div>
  );
};

export default ForecastPage;
