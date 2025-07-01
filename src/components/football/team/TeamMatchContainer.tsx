import React from "react";

const TeamMatchContainer = () => {
  return (
    <div className="flex-col  gap-6 md:flex-row flex mt-4  text-sm">
      <div className="border bg-white flex flex-col items-center py-7 md:py-3 gap-2 px-9 font-AdobeCleanUXBold font-bold">
        <img
          src="http://localhost:8080/image/teams/Real Madrid.png"
          className="w-20 h-20"
          alt=""
        />
        <p>Real Madrid</p>
      </div>
      <div className="border bg-white flex flex-col items-center py-7 md:py-3 gap-2 px-9 font-AdobeCleanUXBold font-bold">
        <img
          src="http://localhost:8080/image/teams/Real Madrid.png"
          className="w-20 h-20"
          alt=""
        />
        <p>Real Madrid</p>
      </div>
      <div className="border bg-white flex flex-col items-center py-7 md:py-3 gap-2 px-9 font-AdobeCleanUXBold font-bold">
        <img
          src="http://localhost:8080/image/teams/Real Madrid.png"
          className="w-20 h-20"
          alt=""
        />
        <p>Real Madrid</p>
      </div>
    </div>
  );
};

export default TeamMatchContainer;
