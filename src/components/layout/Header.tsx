"use client";
import React, { useState } from "react";
import LeftHeader from "./Left-Header";
import RightHeader from "./Right-Header";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  window.onscroll = function () {
    if (window.pageYOffset > 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <header className={`bg-white dark:bg-opacity-5 shadow-lg flex justify-between ${sticky ? "fixed dark:bg-background_body_dark" : "sticky"} w-full z-50 top-0 min-h-6 max-h-56 items-center px-6 py-1`}>
      <LeftHeader />
      <RightHeader />
    </header>
  );
}
