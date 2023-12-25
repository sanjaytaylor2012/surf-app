import { LiveView } from "@/components/liveView/live-view";
import { Day } from "@prisma/client";

const getData = async () => {
  const response = await fetch("https://surf-app-411a8.web.app/live", {
    method: "GET",
    cache: "no-store",
  });
  const jsonData = await response.json();
  // console.log(jsonData);
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
