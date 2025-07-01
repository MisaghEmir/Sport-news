"use client";
import { useTeamsData } from "@/hooks/football/team/useTeamsData";
import Link from "next/link";
import React from "react";

export default function TeamsNavbar() {
  const { teams, isLoading, isError } = useTeamsData();
  if (isLoading) return <div className="bg-transparent"></div>;
  if (isError) return <div className="bg-transparent"></div>;
  return (
    <div className="flex justify-between bg-color_bg_28 dark:bg-transparent dark:bg-opacity-0 px-28 py-2">
      {teams?.map((team: TeamType, index: number) => (
        <div key={index} className="">
          <Link href={"/football/team/2"}>
            <img  src={`${team?.image}`} className="w-8 h-8 " alt="" />
          </Link>
        </div>
      ))}
      {teams?.map((team: TeamType | undefined, index: number) => (
        <div key={index}>
          <img src={`${team?.image}`} className="w-8 h-8" alt="" />
        </div>
      ))}
      {teams?.map((team: TeamType | undefined, index: number) => (
        <div key={index}>
          <img src={`${team?.image}`} className="w-8 h-8" alt="" />
        </div>
      ))}
      {teams?.map((team: TeamType | undefined, index: number) => (
        <div key={index}>
          <img src={`${team?.image}`} className="w-8 h-8" alt="" />
        </div>
      ))}
      {teams?.map((team: TeamType | undefined, index: number) => (
        <div key={index}>
          <img src={`${team?.image}`} className="w-8 h-8" alt="" />
        </div>
      ))}
    </div>
  );
}
