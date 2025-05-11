import React from "react";

const LeftHeader = () => {
  return (
    <div className="items-center flex gap-5 text-sm text-color_text_25 ">
      <ul>
        <li>
          <img
            src="/images/logo/logo.png"
            className="w-11 h-11 bg-transparent"
            alt=""
          />
        </li>
      </ul>
      <ul className="flex gap-2 border-r">
        <li className="px-2">Explore</li>
        <li className="px-2">Football</li>
        <li className="px-2">Nba</li>
        <li className="border-r px-3">Matches</li>
        <li className=" px-3">Other</li>
      </ul>
    </div>
  );
};

export default LeftHeader;
