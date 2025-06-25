import React from "react";
import NewsLg from "@/components/news/NewsLg";
import NewsSm from "./NewsSm";

export default function NewsContainer() {
  return (
    <div>
      {grid_1_1()}
    </div>
  );
}

export function grid_1_1() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className=" col-span-8">
        <NewsLg />
      </div>
      <div className=" col-span-4">
        <NewsSm />
      </div>
    </div>
  );
}
