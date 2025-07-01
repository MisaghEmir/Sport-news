import RechartsPie from "@/components/ui/rechartPie";
import React from "react";
const Streak = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className=" relative">
          <RechartsPie />
          <img
            src={"https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"}
            className="w-16 h-16 absolute top-[47px] left-[50px]"
            alt=""
          />
        </div>
        <div>
          <p className=" font-AdobeCleanLight">
            Results of the last 10 matches:
          </p>
          <div className="flex gap-10 text-4xl font-bold mt-4">
            <div className="flex flex-col justify-center gap-1">
              <span className="border-[2px] border-orange-500 rounded-full py-[7px] pt-1 px-[17px]">
                5
              </span>
              <small className="text-sm font-light text-center">
                Victorias
              </small>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className="border-[2px] border-gray-500 rounded-full py-[7px] pt-1 px-[17px]">
                3
              </span>
              <small className="text-sm font-light text-center">
                Victorias
              </small>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className="border-[2px] border-red-500 rounded-full py-[7px] pt-1 px-[17px]">
                2
              </span>
              <small className="text-sm font-light text-center">
                Victorias
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="mt-3">Streak of the last 10 matches:</p>
        <div className="hidden md:flex gap-1 mt-1 text-lg font-bold w-full overflow-hidden">
          <div className="col-span-1 py-3 px-[1.1rem] text-orange-500 bg-white dark:bg-black">
            V
          </div>
          <div className="col-span-1 py-3 px-[1.1rem] text-orange-500 bg-white dark:bg-black">
            V
          </div>
          <div className="col-span-1 py-3 px-[1.1rem] text-orange-500 bg-white dark:bg-black">
            V
          </div>
          <div className="col-span-1 py-3 px-[1.1rem] text-gray-500 bg-white dark:bg-black">
            E
          </div>
          <div className="col-span-1 px-[1.1rem] py-3 text-orange-500 bg-white dark:bg-black">
            V
          </div>
          <div className="col-span-1 px-[1.1rem] py-3 text-gray-500 bg-white dark:bg-black">
            E
          </div>
          <div className="col-span-1 px-[1.1rem] py-3 text-red-500 bg-white dark:bg-black">
            D
          </div>
          <div className="col-span-1 px-[1.1rem] py-3 text-gray-500 bg-white dark:bg-black">
            E
          </div>
          <div className="col-span-1 px-[1.1rem] py-3 text-orange-500 bg-white dark:bg-black">
            V
          </div>
          <div className="col-span-1 px-[1.1rem] py-3 text-red-500 bg-white dark:bg-black">
            D
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streak;
