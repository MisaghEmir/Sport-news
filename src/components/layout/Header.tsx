"use client";
import React, { useEffect, useState } from "react";
import LeftHeader from "./Left-Header";
import RightHeader from "./Right-Header";
import { useSelector } from "react-redux";

export default function Header() {
  const [sticky, setSticky] = useState(false);
   const scroll = useSelector(
     (state: { toolsReducer: { scroll: number } }) => state.toolsReducer.scroll
   );

  useEffect(() => {

    console.warn({ scroll });
  },[scroll])
  

  return (
    <header
      className={`bg-white dark:bg-opacity-5 shadow-lg flex justify-between ${
        scroll > 62 ? "fixed dark:bg-background_body_dark" : "sticky"
      } w-full z-50 top-0 min-h-6 max-h-56 items-center px-6 py-1`}
    >
      <LeftHeader />
      <RightHeader />
    </header>
  );
}
