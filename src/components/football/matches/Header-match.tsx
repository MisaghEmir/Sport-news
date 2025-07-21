"use client"
import { useTeamData } from "@/hooks/football/team/useTeamsData";
import React from "react";

function Headermatch({match}:{match:Match}) {
  const {team:teamA}:{team:TeamType} = useTeamData(match.teamA)
  const {team:teamB}:{team:TeamType} = useTeamData(match.teamB)
  console.log({teamB})
  return (
    <div className="flex flex-col py-2 gap-2 text-xs w-[155px] px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={teamA?.image}
            alt=""
            className="w-5 h-5"
          />
          <p className="font-bold text-color_text_18 dark:text-color_text_25">BRS</p>
        </div>
        <div>
            <p className="font-bold text-color_text_18 dark:text-color_text_25 pb-1">{match?.goalsA}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
          <img
            src={teamB?.image}
            alt=""
            className="w-5 h-5"
          />
          <p className="font-bold text-color_text_18 dark:text-color_text_25">RMR</p>
        </div>
          <div>
            <p className="font-bold text-color_text_18 dark:text-color_text_25 pb-1">{match?.goalsB}</p>
        </div>
      </div>
    </div>
  );
}

export default Headermatch;
