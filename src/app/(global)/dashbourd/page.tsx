import Chart from "@/components/dashbourd/Chart";
import {
  ChartBarHorizontal,
  ChartRadialStacked,
} from "@/components/dashbourd/PieChart";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className="flex justify-end w-full">
        <div className="w-full ">
          <Chart />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-5">
        <div>
          <ChartBarHorizontal />
        </div>
        <div>
          <ChartRadialStacked />
        </div>
      </div>
    </div>
  );
}
