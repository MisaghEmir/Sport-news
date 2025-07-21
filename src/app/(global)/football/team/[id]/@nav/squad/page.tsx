import Label from "@/components/news/Label";
import React from "react";

export default function page() {
  return (
    <div className="mt-20 px-28   ">
      <div className="flex">
        <div>
          <Label title="Squad" rounded />
        </div>
        <div className="flex  relative justify-between flex-1 w-full h-[30rem] border">
          <div className="flex items-center justify-start relative">
            <div className="border border-l-0 w-40 h-[20rem] flex items-center justify-start">
              <div className="border border-l-0 w-20 h-[10rem] flex items-center justify-start">
                <div>
                  <img
                    className="w-16 h-16 opacity-50 hover:opacity-100"
                    src="/images/tools/player.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly right-[-50px] h-full absolute">
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="w-64 h-64 border rounded-full"> </div>
            <div className="border-l-0 h-full border rounded-full absolute"></div>
            <div className="flex flex-col justify-evenly  h-full absolute">
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end relative">
            <div className="border border-r-0 w-40 h-[20rem] flex items-center justify-end ">
              <div className="border border-r-0 w-20 h-[10rem]"></div>
            </div>
            <div className="flex flex-col justify-evenly left-[-50px] h-full absolute">
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-16 h-16 opacity-50 hover:opacity-100"
                  src="/images/tools/player.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" absolute right-3 top-3 bg-blue-500 text-white p-1 px-10 rounded-md">
                4 - 3 - 3
          </div>
        </div>
      </div>
    </div>
  );
}
