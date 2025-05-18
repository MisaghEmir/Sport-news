"use client"
import React from "react";
import {
  IoSearchOutline,
  IoNotificationsSharp,
  IoMoonSharp,
} from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useThemeMode } from "@/context/ThemeMode";

const RightHeader = () => {
   const {ThemeMode} = useThemeMode()
  return (
    <ul className="flex items-center gap-3 text-lg dark:text-gray-50">
      <li className=" cursor-pointer dark:delay-300 ">
        <IoSearchOutline />
      </li>
      <li className=" cursor-pointer dark:delay-300" onClick={ThemeMode.toggleThemeMode}>
        <FaMoon />
      </li>
      <li className=" cursor-pointer dark:delay-300">
        <IoNotificationsSharp />
      </li>
      <li>
        <Button variant={"outline"} className="bg-white outline-none shadow-none text-black rounded-full pt-1 px-7">sign up</Button>
      </li>
      <li>
        <Button className="bg-blue-700 rounded-full pt-1 px-7 dark:text-white">sigin in</Button>
      </li>
    </ul>
  );
};

export default RightHeader;
