"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useMatchData } from "@/hooks/football/match/useMatchesData";
import { useTeamData } from "@/hooks/football/team/useTeamsData";
import Link from "next/link";
import React from "react";

export default function MatchNavigation({ id }: { id: string }) {
  const {
    match,
    isLoading: isLoadingMatch,
  }: { match: Match; isLoading: boolean } = useMatchData(id);
  console.log({ match });
  const { team: teamA }: { team: TeamType } = useTeamData(match?.teamA);
  const { team: teamB }: { team: TeamType } = useTeamData(match?.teamB);
  return (
    <div className=" text-white ">
      <div className="flex justify-between border-b   text-color_text_12">
        <div className="flex flex-col md:flex-row flex-1 py-4  pt-5 relative overflow-hidden pl-5 md:pl-36 items-center gap-4">
          <div className="md:w-24 w-14 md:h-24 h-14 z-10">
            <img src={teamA?.image} alt="" className="w-full h-full" />
          </div>
          <div className="md:w-52 absolute z-[-0] left-0 w-52 md:h-72 h-14 ">
            <img
              src={teamA?.image}
              alt=""
              className="w-full h-full skew-x-12 -skew-y-12 grayscale   opacity-15 dark:opacity-10 object-cover"
            />
          </div>
          <div className=" text-center flex items-center  text-2xl font-bold">
            <div className="pt-3">
              <h1>{teamA?.name}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 items-center ">
          {isLoadingMatch ? (
            <Skeleton />
          ) : match?.end ? (
            <div className="flex items-center gap-3">
              <p className=" md:text-5xl text-2xl font-bold ">
                {match?.goalsA}
              </p>
              <span className="md:text-5xl text-2xl font-bold ">-</span>
              <p className=" md:text-5xl text-2xl font-bold ">
                {match?.goalsB}
              </p>
            </div>
          ) : (
            <div>
              <small>20/09/2024</small>
              <p className=" md:text-5xl text-2xl font-bold ml-5">
                20:30
                <small className="text-xs">Sun</small>
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-1 relative overflow-hidden pr-5 md:pr-36 items-center justify-end gap-4 flex-col-reverse md:flex-row">
          <div className=" text-center flex justify-center items-center text-2xl font-bold">
            <div className="pt-7">
              <Link href={"/football/team/671bf0d4233ef514fd833f9e"}>
                {teamB?.name}
              </Link>
              <p className="text-xs text-color_text_18">
                Taha Ali 54', 88', Jansson 59'
              </p>
            </div>
          </div>
          <div className="w-24 h-24">
            <img src={teamB?.image} alt="" className="w-full h-full" />
          </div>
          <div className="md:w-52 absolute z-[-0] right-0 w-72 md:h-72 h-14 ">
            <img
              src={teamB?.image}
              alt=""
              className="w-full h-full -skew-x-12 skew-y-12 grayscale opacity-15 dark:opacity-10 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-0 py-0 px-5 md:px-36 text-color_text_17 border-b pr-24 pt-3">
        <div className="flex  sticky top-0 gap-8 text-sm font-semibold">
          <Link
            href="/football/match/3"
            className=" border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            INFO
          </Link>
          <Link
            href={`/football/match/${match?._id}`}
            className=" border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            LIVE
          </Link>
          <Link
            href="./Champions"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            LINE-UPS
          </Link>
          <Link
           href={`./${match?._id}/stats`}
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            STATS
          </Link>
          {match?.end ? (
            <button
              className="hover:border-theme_border_100 cursor-not-allowed pb-1 border-b-4 border-transparent  footballnav"
              disabled
            >
              BET
            </button>
          ) : (
            <Link href={`./${match?._id}/bet`} className="px-2 ">
              BET
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
