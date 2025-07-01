import MatchContainer from "@/components/football/matches/MatchContainer";
import PlayerCard from "@/components/football/team/PlayerCard";
import Result from "@/components/football/team/Result";
import Streak from "@/components/football/team/Streak";
import TeamMatchContainer from "@/components/football/team/TeamMatchContainer";
import TitrLabel from "@/components/ui/TitrLabel";
import React from "react";

export default function page() {
  return (
    <div className="px-6 md:px-28 ">
      <Result />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className=" col-span-1">
          <MatchContainer />
        </div>
        <div>
          <MatchContainer />
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-7 relative">
        <div className=" col-span-1">
          <TitrLabel label={"Streak"} />
          <Streak />
        </div>
        <div className=" col-span-1">
          <TitrLabel label={"Compare with upcoming rivals"} />
          <TeamMatchContainer />
        </div>
      </div>
       <div className="mt-8">
        <TitrLabel label={"Team leaders in Serie A"} />
        <div className="grid grid-cols-3 mt-3 gap-4">
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    </div>
  );
}
