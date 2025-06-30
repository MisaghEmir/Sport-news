"use client"
import React from "react";
import store from "./Store";
import { Provider } from "react-redux";

export default function ProviderRedux({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return <Provider store={store}>{children}</Provider>;
}
