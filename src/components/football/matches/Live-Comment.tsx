import React from "react";

interface Props {
  type: string;
  minute: string;
  title: string;
  match: string;
}
const LiveComment = ({ type, minute, title, match }: Props) => {
  return (
    <div className="flex items-start text-[17px] bg-white rounded-lg px-14 py-6 shadow-md gap-3">
      <span className="font-bold text-red-600 text-[15px]">
        {minute}
        {minute ? "`" : ""}
      </span>
      <div className="flex flex-col w-full">
        <p>
          <span className="font-bold text-red-600">{type} </span>
          {title}
        </p>
        {type === "Goal" && (
          <div className="bg-background_body w-full flex flex-col gap-4 shadow-sm mt-4 p-4 px-6">
            <div className="flex justify-between">
              <div className="w-9 h-9 z-10">
                <img
                  src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Barcelona.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div>
                <span className="font-bold text-xl">0</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-9 h-9 z-10">
                <img
                  src="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-red-600">1</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveComment;
