"use client";
import React from "react";
import { useThemeMode } from "@/context/ThemeMode";
import returnLogo from "@/actions/returnLogo";
import Link from "next/link";

export default function Left() {
  return (
    <div className="items-center flex gap-5 text-sm  ">
      <ul>
        <li>
          <Link href={"/"}>
            <img
              src={"/images/logo/logo_dark.png"}
              className="w-11 h-11 bg-transparent dark:mix-blend-color "
              alt=""
            />
          </Link>
        </li>
      </ul>
      <ul className="flex gap-2">
        <li className="px-2 dark:delay-50">Explore</li>
        <li className="px-2 dark:delay-50">Football</li>
        <li className="px-2 dark:delay-100">Nba</li>
        <li className="border-r px-3 dark:delay-100">Matches</li>
        <li className=" px-3 dark:delay-100">Other</li>
      </ul>
    </div>
  );
}
