import { Forecast } from "@/components/forecast/forecast";
import { LiveView } from "@/components/liveView/live-view";
import { Day } from "@prisma/client";

const getData = async () => {
  const response = await fetch("http://localhost:5000/forecast", {
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
