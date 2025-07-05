"use client";
import { useTeamsData } from "@/hooks/football/team/useTeamsData";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TeamsNavbar() {
  const { teams, isLoading, isError } = useTeamsData();
  if (isError) return <div className="bg-transparent"></div>;
  return (
    <div
      className={`flex justify-between bg-color_bg_28 dark:bg-transparent dark:bg-opacity-0 ${
        !isLoading && "px-28 py-2"
      }`}
    >
      {isLoading ? (
        <Skeleton className="h-12 w-full bg-zinc-400 rounded-none " />
      ) : (
        <>
          {teams?.map((team: TeamType, index: number) => (
            <div key={index} className="">
              <Link href={`/football/team/${team?._id}`}>
                <img src={`${team?.image}`} className="w-8 h-8 " alt="" />
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
        </>
      )}
    </div>
  );
}
