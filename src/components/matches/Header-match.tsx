import React from "react";

function Headermatch() {
  return (
    <div className="flex flex-col py-2 gap-2 text-xs w-32">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Barcelona.png"
            alt=""
            className="w-5 h-5"
          />
          <p className="font-bold text-color_text_18 dark:text-color_text_25">BRS</p>
        </div>
        <div>
            <p className="font-bold text-color_text_18 dark:text-color_text_25 pb-1">0</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
          <img
            src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
            alt=""
            className="w-5 h-5"
          />
          <p className="font-bold text-color_text_18 dark:text-color_text_25">RMR</p>
        </div>
          <div>
            <p className="font-bold text-color_text_18 dark:text-color_text_25 pb-1">0</p>
        </div>
      </div>
    </div>
  );
}

export default Headermatch;
