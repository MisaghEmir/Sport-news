"use client";
import React, { useEffect, useState } from "react";
import LeftHeader from "./Left-Header";
import RightHeader from "./Right-Header";
import { useSelector } from "react-redux";
import { useLoginMode } from "@/context/LoginContext";
import LoginHeader from "./Login-Header";

export default function Header() {
  const scroll = useSelector(
    (state: { toolsReducer: { scroll: number } }) => state.toolsReducer.scroll
  );

  const { login } = useLoginMode();

  useEffect(() => {
    console.warn({ scroll });
  }, [scroll]);

  return (
    <header
      className={`  shadow-lg flex justify-between ${
        scroll > 62
          ? "fixed bg-background_body dark:bg-background_body_dark"
          : "sticky dark:bg-opacity-5"
      } w-full z-50 top-0 min-h-6 max-h-56 items-center px-6 py-1`}
    >
      <LeftHeader />
      {login ? <LoginHeader /> :  <RightHeader />}
     
    </header>
  );
}
