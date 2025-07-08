"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useLeaguesData } from "@/hooks/football/league/useLeaguesData";

export default function Header() {
  const { leagues }: { leagues: League[] } = useLeaguesData();
  return (
    <div className="bg-color_bg_00 opacity-70 text-white">
      <div className="flex justify-between pl-28 border-b border-color_border_70">
        <div className="flex items-end pb-2">
          <h1 className=" text-4xl font-bold pl-2">Football</h1>
        </div>
        <div className="flex justify-end ">
          <img
            src={"http://localhost:8080/image/football/football.png"}
            className="h-20"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between px-28  pt-3">
        <div className="flex  sticky top-0 gap-8 text-sm font-bold">
          <Link
            href="/football"
            className="border-theme_border_100 border-b-4  px-2 pb-1 footballnav"
          >
            All
          </Link>
          {leagues?.map((league, index) => (
            <Link
              key={index}
              href={`/football/league/${league._id}`}
              className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
            >
              {league?.name}
            </Link>
          ))}
        </div>
        <div className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pt-2 pb-1">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
