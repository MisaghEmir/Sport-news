"use client";
import FilterSidbar from "@/components/layout/search/FilterSidebar";
import React, { useEffect } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import HeaderSearch from "@/components/layout/search/HeaderSearch";

export default function page() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  useEffect(() => {
    return () => setOpen(false);
  }, []);
  return (
    <div className="w-full">
      <HeaderSearch />
      <div>
       
      </div>
    </div>
  );
}
