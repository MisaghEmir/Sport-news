"use client";
import { useThemeMode } from "@/context/ThemeMode";
import React from "react";

export default function Theme() {
  const { theme } = useThemeMode();
  return <div className={` fixed h-[100vh] top-0 left-0 z-[-1] theme ${theme ? 'open' : 'close'}`}></div>;
}
