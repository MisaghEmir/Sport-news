"use client";
import { Button } from "@/components/ui/button";
import { BsFilterLeft } from "react-icons/bs";
import React from "react";
import { SlidersHorizontal, Search, ListFilter,ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";

export default function HeaderSearch() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <div className="p-7 px-10 w-full sticky top-0">
      <div className="flex w-full items-center justify-between gap-3 sticky top-20  ">
        <Button
          onClick={(open) => setOpen(true)}
          className={`bg-transparent shadow-none hover:bg-color_bg_28 text-color_text_00 flex items-center border rounded-3xl px-6 h-[44px] ${
            open && "hidden"
          }`}
        >
          <span className="text-2xl">
            <SlidersHorizontal size={30} />
          </span>
          <p className="text-[15px] font-semibold">Filter</p>
        </Button>
        <div className="h-[46px] flex-1 w-full rounded-3xl flex items-center bg-gray-200 px-6 gap-3">
          <span className="text-color_text_20">
            <Search className="text-color_text_20" color="#191919" size={17} />
          </span>
          <div>
            <Input
              className="border-none outline-none font-semibold shadow-none  p-0 pb-[1px]  text-[16px] focus:outline-transparent focus:border-transparent text-color_text_12   "
              size={40}
              placeholder="Search Game..."
            />
          </div>
        </div>
        <div>
          <Button
            className={`bg-transparent shadow-none hover:bg-transparent8 text-color_text_00 flex items-center  px-1 h-[44px] `}
          >
            <span className="text-2xl">
              <ListFilter size={30} />
            </span>
            <p className="text-[15px] font-semibold"><ChevronDown /></p>
          </Button>
        </div>
      </div>
    </div>
  );
}
