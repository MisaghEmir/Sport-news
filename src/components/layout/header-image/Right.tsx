"use client";
import React from "react";
import {
  IoSearchOutline,
  IoNotificationsSharp,
} from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useThemeMode } from "@/context/ThemeMode";
import Link from "next/link";

export default function Right() {
   const { ThemeMode } = useThemeMode();
   return (
     <ul className="flex items-center gap-3 text-lg dark:text-gray-50">
       <li className=" cursor-pointer dark:delay-300 ">
         <IoSearchOutline />
       </li>
       <li
         className=" cursor-pointer dark:delay-300"
         onClick={ThemeMode.toggleThemeMode}
       >
         <FaMoon />
       </li>
       <li className=" cursor-pointer dark:delay-300">
         <IoNotificationsSharp />
       </li>
       <li>
         <Link href={"/login"}>
           <Button className="bg-blue-700 rounded-full pt-[5px] px-7 dark:text-white hover:bg-blue-900">
             Start Free Trial
           </Button>
         </Link>
       </li>
       <li>
         <Link href={"/register"}>
           <Button
             variant={"outline"}
             className="bg-white outline-none shadow-none text-black rounded-full pt-[5px] px-7"
           >
             sign in
           </Button>
         </Link>
       </li>
     </ul>
   );
}
