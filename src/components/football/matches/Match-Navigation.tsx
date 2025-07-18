import Link from "next/link";
import React from "react";

export default function MatchNavigation() {
  return (
    <div className=" text-white ">
      <div className="flex justify-between border-b   text-color_text_12">
        <div className="flex flex-col md:flex-row flex-1 py-4  pt-5 relative overflow-hidden pl-5 md:pl-36 items-center gap-4">
          <div className="md:w-24 w-14 md:h-24 h-14 z-10">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Barcelona.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="md:w-52 absolute z-[-0] left-0 w-52 md:h-72 h-14 ">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Barcelona.png"
              alt=""
              className="w-full h-full skew-x-12 -skew-y-12 grayscale   opacity-15 dark:opacity-10 object-cover"
            />
          </div>
          <div className=" text-center flex items-center  text-2xl font-bold">
            <div className="pt-3">
              <h1>Barcelona</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 items-center ">
          <small>20/09/2024</small>
          <p className=" md:text-5xl text-2xl font-bold ml-5">
            20:30
            <small className="text-xs">Sun</small>
          </p>
        </div>
        <div className="flex flex-1 relative overflow-hidden pr-5 md:pr-36 items-center justify-end gap-4 flex-col-reverse md:flex-row">
          <div className=" text-center flex justify-center items-center text-2xl font-bold">
            <div className="pt-7">
              <Link href={"/football/team/gvg"}>Real Madrid</Link>
              <p className="text-xs text-color_text_18">
                Taha Ali 54', 88', Jansson 59'
              </p>
            </div>
          </div>
          <div className="w-24 h-24">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="md:w-52 absolute z-[-0] right-0 w-72 md:h-72 h-14 ">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
              alt=""
              className="w-full h-full -skew-x-12 skew-y-12 grayscale opacity-15 dark:opacity-10 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-0 py-0 px-5 md:px-36 text-color_text_17 border-b pr-24 pt-3">
        <div className="flex  sticky top-0 gap-8 text-sm font-semibold">
          <Link
            href="/football"
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
            href="./3/stats"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            STATS
          </Link>
        </div>
      </div>
    </div>
  );
}
