"use client";
import MatchSingle from "@/components/football/matches/Match-Single";
import { Skeleton } from "@/components/ui/skeleton";
import { useMatchesData } from "@/hooks/football/match/useMatchesData";
import React from "react";

export default function page() {
  const { matches, isLoading }: { matches: Match[]; isLoading: boolean } =
    useMatchesData();
  return (
    <div>
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
