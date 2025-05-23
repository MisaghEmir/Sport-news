import React from "react";

const LeftHeader = () => {
  return (
    <div className="items-center flex gap-5 text-sm text-color_text_12 dark:text-white">
      <ul>
        <li>
          <img
            src="/images/logo/logo.png"
            className="w-11 h-11 bg-transparent"
            alt=""
          />
        </li>
      </ul>
      <ul className="flex gap-2">
        <li className="px-2 dark:delay-50">Explore</li>
        <li className="px-2 dark:delay-50">Football</li>
        <li className="px-2 dark:delay-100">Nba</li>
        <li className="border-r px-3 dark:delay-100">Matches</li>
        <li className=" px-3 dark:delay-100">Other</li>
      </ul>
    </div>
  );
};

export default LeftHeader;
