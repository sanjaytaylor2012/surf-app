"use client";
import { Menu, Palmtree } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const simulateFetch = async () => {
    const response = await fetch(
      "https://surf-app-411a8.web.app/simulate_fetch",
      // "http://localhost:5000/simulate_fetch",
      {
        method: "GET",
      }
    );
    const jsonData = await response.json();
    console.log(jsonData);
  };

  const router = useRouter();

  return (
    <div className="h-[50px] bg-[#3a3a3c] flex w-full items-center pl-4 pr-4 justify-between">
      <p className="font-bold text-[#8884d8]">"Surfline"</p>
      <div className="flex gap-x-4 font-semibold">
        <p
          onClick={() => router.push("/live")}
          className="cursor-pointer transition hover:text-[#8884d8]"
        >
          Live
        </p>
        <p
          onClick={() => router.push("/forecast")}
          className="cursor-pointer transition hover:text-[#8884d8]"
        >
          Forecast
        </p>
      </div>
      <Button className="h-5" onClick={simulateFetch}>
        Simulate Fetch
      </Button>
      <Palmtree className="text-[#8884d8]" />
    </div>
  );
};
