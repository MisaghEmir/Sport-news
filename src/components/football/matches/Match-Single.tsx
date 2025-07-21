"use client";
import React from "react";
import { useTeamData } from "@/hooks/football/team/useTeamsData";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";

export default function MatchSingle({ match }: { match: Match }) {
  const { team: teamA }: { team: TeamType } = useTeamData(match?.teamA);
  const { team: teamB }: { team: TeamType } = useTeamData(match?.teamB);
  return (
    <div className="border rounded-lg hover:bg-color_bg_28 transition-all delay-75 cursor-pointer">
      <Link href={`/football/match/${match?._id}`}>
        <div className="flex border-b overflow-hidden justify-between">
          <div className=" relative p-5 py-3 flex justify-start items-center">
            <div className=" w-20 h-20 z-10">
              <img src={teamA?.image} alt="" className="w-full h-full" />
            </div>
            <div className="w-32 absolute z-[-0] left-[-45px]  top-[-30px] h-32 ">
              <img
                src={teamA?.image}
                alt=""
                className="w-full h-full skew-x-12 -skew-y-12 grayscale   opacity-15 dark:opacity-10 object-cover"
              />
            </div>
          </div>
          <div className="text-center gap-0 flex flex-col justify-center">
            <small className="text-xs  mb-0">20/09/2024</small>
            <p className=" mt-0 p-0 text-xl font-bold ml-[10px]">
              20:30
              <small className="text-xs">Sun</small>
            </p>
            <small className="text-xs  mb-0">Laliga</small>
          </div>
          <div className=" relative p-5 py-3 flex justify-end items-center">
            <div className=" w-20 h-20 z-10">
              <img src={teamB?.image} alt="" className="w-full h-full" />
            </div>
            <div className="w-32 absolute z-[-0] right-[-45px]  top-[-30px] h-32 ">
              <img
                src={teamB?.image}
                alt=""
                className="w-full h-full -skew-x-12 skew-y-12 grayscale   opacity-15 dark:opacity-10 object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href={`/football/match/${match?._id}/bet`}>
        <div className="px-3 p-1 group flex items-center gap-0">
          <small className="text-xs font-semibold">
            See the conditions and place a bet.{" "}
          </small>
          <span className="pt-[3px] ml-1 group-hover:ml-3 transition-all delay-100">
            <LiaLongArrowAltRightSolid />
          </span>
        </div>
      </Link>
    </div>
  );
}
