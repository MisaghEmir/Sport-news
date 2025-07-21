import Link from "next/link";
import React from "react";

export default function MatchCalender() {
  return (
    <Link href="/football/match/3">
      <div className="flex flex-col bg-color_bg_30 border">
        <div className="flex items-center gap-3 py-2 bg-background_body px-5 font-bold">
          <p>
            2025/04/14
            <span className="px-1">21:00</span>
          </p>
          <small className="text-color_text_17">Laliga 2025/2026</small>
        </div>
        <div className="flex pl-52">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <small>Real Madrid</small>
              <img
                className="w-6 h-6"
                src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
                alt=""
              />
            </div>
            <div className="bg-black py-2 px-5 text-white font-bold">2 - 0</div>
            <div className="flex items-center gap-1">
              <img
                className="w-6 h-6"
                src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Barcelona.png"
                alt=""
              />
              <small>Barcelona</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
