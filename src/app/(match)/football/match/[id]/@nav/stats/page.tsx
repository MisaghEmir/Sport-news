"use client";
import * as React from "react"
import { Progress } from "@/components/ui/progress";

export default function page() {
  const [progress, setProgress] = React.useState(13)

   React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

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
          <div className="overflow-hidden flex-1 flex justify-center text-white">
            STATS
          </div>
          <div className="overflow-hidden flex-1 relative h-12">
            <img
              src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
              alt=""
              className=" h-20 absolute right-0 top-[-8px]"
            />
          </div>
        </div>
        <div className="bg-color_bg_26 flex items-center justify-center p-[14px] ">
          <div className="overflow-hidden flex-1 flex justify-center items-end text-[14px] text-black">
            POSESION
          </div>
        </div>
        <div className=" flex items-center justify-center ">
          <div className="overflow-hidden flex-1 grid grid-cols-12 justify-center  text-white">
            <div className="col-span-7 bg-red-700 px-5 p-4 font-bold text-xl">
              60%
            </div>
            <div className="col-span-5 bg-orange-400 px-5 p-4 font-bold text-xl flex justify-end">
              40%
            </div>
          </div>
        </div>
        <div className="flex h-5 w-full bg-color_bg_26"></div>
        <div>
            <div className="flex justify-center">
              <small>
                Disparos recibidos
              </small>
            </div>
            <div className="flex justify-center gap-7">
              <span>8</span>
              <span>23</span>
            </div>
            <div className="flex justify-center gap-7">
              <span>
                <Progress value={33} color="red" className="w-[20%] h-20 bg-red-500" />
              </span>
              <span>
                <Progress value={progress} className="w-[60%]" />
              </span>
            </div>
        </div>
      </div>
    </div>
  );
}
