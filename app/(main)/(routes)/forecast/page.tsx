import { Forecast } from "@/components/forecast/forecast";
import { LiveView } from "@/components/liveView/live-view";
import { Day } from "@prisma/client";

const getData = async () => {
  const response = await fetch(
    "https://us-central1-surf-app2-6e21e.cloudfunctions.net/app-3/forecast",
    // "http:localhost:5000/forecast",
    // "http://127.0.0.1:5001/surf-app2-6e21e/us-central1/app/forecast",

    {
      method: "GET",
      cache: "no-store",
    }
  );
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
