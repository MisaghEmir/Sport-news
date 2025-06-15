"use client";
import React, { useState, useEffect, useCallback } from "react";
import LeftHeader from "../Left-Header";
import RightHeader from "../Right-Header";
import Left from "./Left";
import Right from "./Right";

export default function HeaderImage() {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className={`${scrollY ? 'bg-background text-color_text_10 dark:text-color_text_30' : 'bg-none text-color_text_30'} delay-100 border-b z-50 fixed w-full dark:bg-opacity-5 flex justify-between items-center px-6 py-1`}>
      <Left />
      <Right />
    </div>
  );
}
