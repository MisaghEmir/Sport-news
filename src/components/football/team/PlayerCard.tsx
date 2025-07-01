import Link from 'next/link';
import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

export default function PlayerCard() {
  return (
    <div className="bg-white rounded-sm flex flex-col border border-color_border_6 pr-3">
      <div className="flex gap-3 flex-1">
        <div className="flex flex-1 items-center">
          <img
            src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/34495_prev_ui.png"
            className="w-24 "
            alt=""
          />
          <Link
            href={"/football/player"}
            className="flex flex-col justify-center p-0 m-0 gap-0"
          >
            <small className="text-[17px] font-AdobeCleanBlack text-color_text_20 m-0 p-0">
              Cristiano
            </small>
            <small className="text-[17px] font-AdobeCleanBlack text-color_text_20 m-0 p-0">
              Ronaldo
            </small>
          </Link>
        </div>
        <div className="flex items-center flex-col justify-between">
          <h3 className="text-5xl font-SourceSansProBold text-orange-500 flex-1 flex items-end">
            5
          </h3>
          <div className="flex flex-col justify-between items-center">
            <p className="text-color_text_18">Gols</p>
            <small className="text-color_text_22">0.75 por partido</small>
          </div>
        </div>
      </div>
      <div className="flex items-center p-1 pl-3 text-color_text_20">
        <Link href={"/football/player"} className={"flex items-center"}>
          <small className="hover:text-color_text_11 cursor-pointer">
            Ver ficha completa
          </small>
          <span className="text-orange-500 text-xl">
            <IoMdArrowDropright />
          </span>
        </Link>
      </div>
    </div>
  );
}
