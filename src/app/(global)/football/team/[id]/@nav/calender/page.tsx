import PopoverEl from "@/components/elements/PopoverEl";
import MatchCalender from "@/components/football/matches/Match-Calender";
import TitrLabel from "@/components/ui/TitrLabel";
import React from "react";

export default function page() {
  return (
    <div className="px-28 pt-20">
      <div className="flex gap-4 flex-col">
        <div>
          <TitrLabel label="Calender" />
        </div>
        <div>
          <PopoverEl />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <MatchCalender />
        <MatchCalender />
        <MatchCalender />
        <MatchCalender />
      </div>
    </div>
  );
}
