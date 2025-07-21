"use client";
import MatchSingle from "@/components/football/matches/Match-Single";
import { Skeleton } from "@/components/ui/skeleton";
import { useMatchesData } from "@/hooks/football/match/useMatchesData";
import React from "react";

function page() {
  const { matches, isLoading }: { matches: Match[]; isLoading: boolean } =
    useMatchesData();
  return (
    <div className="w-full p-10 px-7">
      <div className="mb-5">
        <h3 className="text-lg font-bold">Laliga</h3>
        <small>22/08/2024 04:29</small>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
          </>
        ) : (
          matches?.map((item, index) => (
            <>
              <div key={index}>
                <MatchSingle match={item} />
              </div>
              <div key={index}>
                <MatchSingle match={item} />
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
}

export default page;
