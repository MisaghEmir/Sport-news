"use client";
import { useCookies } from "next-client-cookies";
import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  const cookies = useCookies();
  const login = cookies.get("login");
  if (login === "false") redirect("/");
  return <div className="w-full"></div>;
}
