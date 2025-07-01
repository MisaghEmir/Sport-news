import React from 'react'
import { GoDotFill } from "react-icons/go";
import TitrLabel from '@/components/ui/TitrLabel';

export default function Result() {
 return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div className="col-span-1">
        <TitrLabel label={"Club"} />
        <ul className="text-sm  mt-5 gap-[0.4rem] flex flex-col">
          <li className="flex items-center gap-1">
            <span className="text-orange-600">
              <GoDotFill color="" />
            </span>
            Country : <b className="font-SourceSansProBold ml-2">Spain</b>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-orange-600">
              <GoDotFill color="" />
            </span>
            Foundation :{" "}
            <b className="font-SourceSansProBold ml-2">{"team.foundation"}</b>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-orange-600">
              <GoDotFill color="" />
            </span>
            President :{" "}
            <b className="font-SourceSansProBold ml-2">Enrique Cerezo</b>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-orange-600">
              <GoDotFill color="" />
            </span>
            Coach : <b className="font-SourceSansProBold ml-2">{"team.coach"}</b>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-orange-600">
              <GoDotFill color="" />
            </span>
            Web : <b className="font-SourceSansProBold ml-2">{"team.web"}</b>
          </li>
        </ul>
      </div>
      <div className="col-span-1 flex-1">
        <TitrLabel label={"Stadium"} />
        <ul className="text-sm font-SourceSansPro mt-5 gap-[0.4rem] flex flex-col">
          <li className="flex items-center gap-1">
            <span className="text-orange-600">
              <GoDotFill color="" />
            </span>
            Headquarters :{" "}
            <b className="font-SourceSansProBold ml-2">{"stadium?.name"}</b>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-orange-600">
              <GoDotFill color="" />
            </span>
            Capacity :{" "}
            <b className="font-SourceSansProBold ml-2">{"stadium?.capacity"}</b>
          </li>
          <li className="flex items-start gap-1">
            <span className="text-orange-600 mt-1">
              <GoDotFill color="" />
            </span>
            <p>
              Direction:
              <b className="font-SourceSansProBold ml-2">{"team.address"}</b>
            </p>
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <img
          className="border border-color_border_90 rounded-md h-full w-full"
          src={"stadium?.image"}
          alt=""
        />
      </div>
    </div>
  );
}
