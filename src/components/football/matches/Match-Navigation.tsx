import Link from "next/link";
import React from "react";

export default function MatchNavigation() {
  return (
    <div className="bg-color_bg_00 opacity-70 text-white px-5 md:px-36 pt-5">
      <div className="flex justify-between">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10">
          <div className="md:w-24 w-14 md:h-24 h-14">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Barcelona.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className=" text-center flex items-center text-2xl font-bold">
            Barcelona
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <small>20/09/2024</small>
          <p className=" md:text-5xl text-2xl font-bold ml-5">
            20:30
            <small className="text-xs">Sun</small>
          </p>
        </div>
        <div className="flex md:justify-between flex-col-reverse md:flex-row items-center gap-10">
          <div className=" text-center flex justify-center items-center text-2xl font-bold">
            <Link href={"/football/team/gvg"}>Real Madrid</Link>
          </div>
          <div className="w-24 h-24">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 pr-24 pt-3">
        <div className="flex  sticky top-0 gap-8 font-bold">
          <Link
            href="/football"
            className="border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            All
          </Link>
          <Link
            href="./Champions"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            UEFA Champions League
          </Link>
          <Link
            href="./laliga"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            Laliga
          </Link>
          <Link
            href="./"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
          >
            Premier League
          </Link>
        </div>
      </div>
    </div>
  );
}
