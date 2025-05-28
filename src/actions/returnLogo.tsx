"use client";
import React from 'react'
import image from '../../public/images/logo/logo.png'
import imageDark from '../../public/images/logo/logo.png'
import { useThemeMode } from "@/context/ThemeMode";

export default function returnLogo() {
     const { ThemeMode } = useThemeMode();
  return ThemeMode ? imageDark.src : image.src
}
