import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";


function Navigation({title, image}: { title: string; image: string}) {
  
  return (
    <div className="bg-color_bg_00 opacity-70 text-white">
      <div className="flex justify-between pl-32 border-b border-color_border_70">
        <div className="flex items-end pb-2">
          <h1 className=" text-4xl font-bold pl-2">{title}</h1>
        </div>
        <div className="flex justify-end ">
          <img
            src={image}
            className="h-20"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between px-32 pr-24 pt-3">
        <div className="flex  sticky top-0 gap-8 font-bold">
          <Link
            href="./"
            className="border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            News
          </Link>
          <Link
            href="./table"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
          >
            Table
          </Link>
          <Link
            href="./"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
          >
            Matches
          </Link>
          <Link
            href="./"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
          >
            UEFA Europa League
          </Link>
        </div>
        <div className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pt-2 pb-1">
        </div>
      </div>
    </div>
  );
}

export default Navigation;
