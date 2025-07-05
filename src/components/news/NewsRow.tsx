import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function NewsRow() {
  return (
    <div className=" grid grid-cols-9 mt-2 hover:bg-color_bg_29 p-1 cursor-pointer rounded-md">
       {/* <Skeleton className="h-[6rem] w-[6.5rem] bg-zinc-600 rounded-md" /> */}
      <div className="col-span-3">
        <img
          src="/images/test/1.avif"
          className="w-full h-24 object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="col-span-6 flex flex-col justify-between pl-2 pr-1">
        <small className="text-color_text_23 text-[8px]">SAUDI ARABIA</small>
        <h3 className=" font-bold dark:text-color_text_25">
          All that glitters in the
        </h3>
        <p className="text-color_text_16 mt-0 text-[12px]">
          Lorem ipsum dolor sit amet consectetur fugiat! Lorem ipsum...
        </p>
        <div className="flex mt-1">
          <small className="text-color_text_23 text-[10px] w-full">22/08/2024</small>
        </div>
      </div>
    </div>
  );
}
