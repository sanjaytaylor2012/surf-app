"use client";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const simulateFetch = async () => {
    const response = await fetch("http://localhost:5000/simulate_fetch", {
      method: "GET",
    });
    const jsonData = await response.json();
    console.log(jsonData);
  };

  const router = useRouter();

  return (
    <div className="h-[50px] bg-[#3a3a3c] flex w-full items-center pl-4 pr-4 justify-between">
      <div className="flex gap-x-8 font-semibold">
        <p onClick={() => router.push("/live")} className="cursor-pointer">
          Live
        </p>
        <p onClick={() => router.push("/forecast")} className="cursor-pointer">
          Forecast
        </p>
      </div>

      <Button className="h-5" onClick={simulateFetch}>
        Simulate Fetch
      </Button>
    </div>
  );
};
