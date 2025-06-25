"use client"
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosMore } from "react-icons/io";
import { gsap } from "gsap";


type ListItem =
  | undefined
  | {
      name?: string;
    };

function ExploreSwiper() {
  const [list, setList] = useState<ListItem[]>([
    {
      name: "Football",
    },
    {
      name: "Laliga",
    },
    {
      name: "Judo",
    },
    {
      name: "Tennis",
    },
    {
      name: "Bastekball",
    },
    {
      name: "Tekvando",
    },
    {
      name: "Karate",
    },
    {
      name: "Nba",
    },
    {
      name: "Matches",
    },
    {
      name: "Seri A",
    },
    {
      name: "Premier",
    },
    {
      name: "Champion",
    },
    {
      name: "Bondesliga",
    },
    {
      name: "Valiball",
    },
    {
      name: "Shena",
    },
  ]);

  const nextSlide = () => {
    const arr = list;
    gsap.to(".k3", 0.4, { opacity: 0.75, backgroundColor: "#000" });
    setTimeout(() => {
      gsap.to(".k3", 0.4, { backgroundColor: "rgb(0, 87, 255)", opacity: 1 });
    }, 200);
    setTimeout(() => {
      const index: ListItem = arr.shift();
      arr.push(index);
      setList([...arr]);
    }, 300);
  };

  const prevSlide = () => {
    let arr = list;
    console.log(arr);
    gsap.to(".k3", 0.4, { opacity: 0.75, backgroundColor: "#000" });
    setTimeout(() => {
      gsap.to(".k3", 0.4, { backgroundColor: "rgb(0, 87, 255)", opacity: 1 });
    }, 200);
    setTimeout(() => {
      const index = arr[arr.length - 1];
      arr.pop();
      arr = [index, ...arr];
      console.log(arr);
      setList([...arr]);
    }, 300);
  };

  const clickSlide = (index: number) => {
    console.log(index);
    let bot = null;
    let arr = list;
    if (index >= 3) {
      bot = index - 3;
      for (let i = 0; i < bot; i++) {
        gsap.to(".k3", 0.4, { opacity: 0.75, backgroundColor: "#000" });
        setTimeout(() => {
          gsap.to(".k3", 0.4, {
            backgroundColor: "rgb(0, 87, 255)",
            opacity: 1,
          });
        }, 200);
        setTimeout(() => {
          const index = arr.shift();
          arr.push(index);
          setList([...arr]);
        }, 300);
      }
    } else {
      bot = 3 - index;
      for (let i = 0; i < bot; i++) {
        gsap.to(".k3", 0.4, { opacity: 0.75, backgroundColor: "#000" });
        setTimeout(() => {
          gsap.to(".k3", 0.4, {
            backgroundColor: "rgb(0, 87, 255)",
            opacity: 1,
          });
        }, 200);
        setTimeout(() => {
          const index = arr[arr.length - 1];
          arr.pop();
          arr = [index, ...arr];
          console.log(arr);
          setList([...arr]);
        }, 300);
      }
    }

    console.log(bot);
  };

  return (
    <div className="py-3 relative">
      <div className="flex overflow-hidden delay-1000">
        <div className="flex w-[300%] gap-3 left-[-50px] ml-[-110px]">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => clickSlide(index)}
              className={` w-[200px] cursor-pointer h-[80px] rounded-sm overflow-hidden relative`}
            >
              <div className="w-full h-full">
                <img
                  src="http://localhost:8080/image/football/football.png"
                  className="w-full object-cover h-full"
                  alt=""
                />
              </div>
              <div
                className={`w-full h-full ${
                  index === 3
                    ? "bg-blue-600 opacity-100"
                    : " bg-black dark:bg-white opacity-75"
                }
                 z-10 k${index} top-0 left-0 absolute text-white dark:text-black font-SourceSansProBold font-bold flex items-center justify-center text-3xl`}
              >
                {item?.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-32 absolute left-0 cursor-pointer top-0 flex items-center h-full z-10 bg-gradient-to-l from-transparent to-white dark:to-black">
        <span
          className="text-2xl font-bold ml-5 text-black bg-white dark:text-white hover:bg-blue-600 hover:text-color_text_30 delay-200 transition-all dark:bg-black rounded-full p-2 shadow-2xl shadow-black"
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </span>
      </div>
      <div className="w-40 absolute right-0 cursor-pointer top-0 flex items-center justify-end bg-gradient-to-r from-transparent to-white dark:to-black h-full z-10">
        <span
          className="text-2xl font-bold text- mr-3 opacity-100 bg-white hover:bg-blue-600 hover:text-color_text_30 delay-200 transition-all dark:text-white dark:bg-black rounded-full p-2 shadow-2xl shadow-black"
          onClick={nextSlide}
        >
          <IoIosArrowForward />
        </span>
        <span
          className="text-3xl delay-75 transition-all hover:bg-theme_200 hover:text-white dark:text-white dark:bg-black font-bold text-black mr-5 opacity-100 bg-white rounded-md p-2 shadow-2xl shadow-black"
          onClick={nextSlide}
        >
          <IoIosMore />
        </span>
      </div>
    </div>
  );
}

export default ExploreSwiper;
