"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Headermatch from "../football/matches/Header-match";
import Link from "next/link";
import PopoverEl from "../elements/PopoverEl";
import { useMatchesData } from "@/hooks/football/match/useMatchesData";
import { Skeleton } from "../ui/skeleton";

export default function HeaderMatches() {
  const { matches, isLoading }: { matches: Match[]; isLoading: boolean } =
    useMatchesData();

  return (
    <div className="bg-gray-100 dark:bg-opacity-10 px-8   flex gap-5 items-center">
      <div className="">
        <PopoverEl />
      </div>
      <div className="px-10 pr-5    w-full">
        <Carousel className="w-full ">
          <CarouselContent className="">
            {isLoading ? (
              <Skeleton className="w-full h-16" />
            ) : (
              matches?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="border-color_border_50 m-0"
                >
                  <div className="flex pl-0 gap-0">
                    <div className=" w-[150px] flex items-center justify-center relative">
                      <p className="text-xl absolute font-semibold text-color_text_16 dark:text-white z-10">
                        Laliga
                      </p>
                      <img
                        src="/images/test/4.png"
                        className="w-full h-full grayscale  opacity-15 dark:opacity-20 object-cover"
                        alt=""
                      />
                    </div>
                    {matches?.map((item, index) => (
                      <Link href={`/football/match/${item._id}`} key={index}>
                        <Headermatch match={item} />
                      </Link>
                    ))}
                    {/* <Headermatch />
                  <Headermatch />
                  <Headermatch /> */}
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="left-[-20px] border-none border-l rounded-none text-xs p-0 w-5 h-7 bg-blue-700 hover:bg-blue-900 hover:text-white text-white rounded-s-md" />
          <div className="border-l h-full bg-black">
            <CarouselNext
              className="m-0 right-[190px] border-none border-l rounded-none text-xs p-0 w-5 h-7 bg-blue-700 hover:bg-blue-900 hover:text-white text-white rounded-e-md"
              size={"sm"}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
