import React from "react";
import NewsLg from "@/components/news/NewsLg";
import NewsSm from "./NewsSm";
import Label from "./Label";
import NewsRow from "./NewsRow";

export default function NewsContainer() {
  return <div className="">{grid_1_1()}</div>;
}

export function grid_1_1() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className=" col-span-8 flex">
        <div>
          <Label title="Football" rounded />
        </div>
        <div className="flex-1">
          <div className="border-b pb-5 border-gray-400">
            <NewsLg />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="grid grid-cols-2 gap-5 border-b pb-5 border-gray-400">
              <NewsSm />
              <NewsSm />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <NewsSm />
              <NewsSm />
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-4">
        <NewsSm />
        <NewsRow />
        <NewsRow />
      </div>
    </div>
  );
}

export function grid_1_1_reverse() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className=" col-span-4 flex">
        <div className="">
          <Label title="Football" rounded />
        </div>
        <div className="flex-1">
          <div>
            <NewsSm />
          </div>
          <div>
            <NewsRow />
          </div>
        </div>
      </div>
      <div className=" col-span-8 flex">
        <div className="flex-1">
          <NewsLg />
          <div className="flex gap-5 mt-5">
            <NewsSm />
            <NewsSm />
          </div>
        </div>
      </div>
    </div>
  );
}
