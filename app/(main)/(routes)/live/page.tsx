import { LiveView } from "@/components/liveView/live-view";
import { Day } from "@prisma/client";

const getData = async () => {
  const response = await fetch(
    "https://us-central1-surf-app2-6e21e.cloudfunctions.net/app/live",
    // "http://localhost:5000/live",
    // "http://127.0.0.1:5001/surf-app2-6e21e/us-central1/app/live",

    {
      method: "GET",
      cache: "no-store",
    }
  );
  const jsonData = await response.json();
  const day = await jsonData.closestDay;
  return day;
};

const Live = async () => {
  const day = await getData();

  return (
    <div className="flex w-full h-full">
      <LiveView data={day} />
    </div>
  );
};

export default Live;
