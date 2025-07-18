import React from "react";

export default function page() {
  return (
    <div>
      <div className="bg-white shadow-md flex flex-col rounded-md overflow-hidden">
        <div className="bg-blue-500 flex items-center justify-between px-5 ">
          <div className="overflow-hidden flex-1 h-12 relative">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Barcelona.png"
              alt=""
              className="w-fluu h-20 absolute left-0 top-[-8px]"
            />
          </div>
          <div className="overflow-hidden flex-1 flex justify-center text-white">STATS</div>
          <div className="overflow-hidden flex-1 relative h-12">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
              alt=""
              className=" h-20 absolute right-0 top-[-8px]"
            />
          </div>
        </div>
        <div className="bg-color_bg_26 flex items-center justify-center p-[14px] ">
      
          <div className="overflow-hidden flex-1 flex justify-center text-black">STREAK</div>
      
        </div>
        <div className=" flex items-center justify-center p-[14px] ">
      
          <div className="overflow-hidden flex-1 flex justify-center text-black">STREAK</div>
      
        </div>
      </div>
    </div>
  );
}
