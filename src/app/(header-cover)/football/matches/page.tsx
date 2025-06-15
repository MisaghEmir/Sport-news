import React from "react";

function page() {
  return (
    <div>
      <div className=" relative w-full h-[291px] top-0">
        <img
          src="/images/random/random1.jpg "
          alt=""
          className="w-full h-full absolute top-0 left-0 object-cover"
        />
         <div className=" absolute w-full h-full top-0 left-0 z-10 bg-black opacity-45 flex justify-center items-center"></div>
         <div className=" absolute w-full h-full top-0 left-0 z-20 flex flex-col justify-center items-center">
          <p className="text-white text-7xl opacity-100 font-bold mt-10">
            Browse Matches
          </p>
          <p className=" text-[27px] mt-3 text-color_text_27 opacity-100 font-bold">
            Find the perfect asset for your next project
          </p>
        </div>
      </div>
      <div className="my-96">amir</div>
      <div className="my-96">amir</div>
      <div className="my-96">amir</div>
    </div>
  );
}

export default page;
