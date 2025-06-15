"use client";
import React from "react";
import { useThemeMode } from "@/context/ThemeMode";
import returnLogo from "@/actions/returnLogo";
import Link from "next/link";

const LeftHeader = () => {
  return (
    <div className="items-center flex gap-5 text-sm text-color_text_12 dark:text-white">
      <ul>
        <li>
          <Link href={"/"}>
            <img
              src={"/images/logo/logo.png"}
              className="w-11 h-11 bg-transparent dark:mix-blend-color text-white"
              alt=""
            />
          </Link>
        </li>
      </ul>
      <ul className="flex gap-2">
        <li className="px-2 dark:delay-50">
           <Link href={"/exploer"}>
          Explore
           </Link>
          </li>
        <li className="px-2 dark:delay-50">
          <Link href={"/football"}>Football</Link>
        </li>
        <li className="px-2 dark:delay-100">Nba</li>
        <li className="border-r px-3 dark:delay-100">
          <Link href={"/football/matches"}>Matches</Link>
        </li>
        <li className=" px-3 dark:delay-100">Other</li>
      </ul>
    </div>
  );
};

export default LeftHeader;
