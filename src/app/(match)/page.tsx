"use client";
import { Button } from "@/components/ui/button";
import {
  DM_Serif_Display,
  Barlow_Condensed,
} from "next/font/google";
import "../globals.css";
import "../env.css";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeLabel from "@/components/ui/homeLabel";
import { gsap } from "gsap/gsap-core";

const roboto = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
   useEffect(() => {
      gsap.to(".right", 0.0, { opacity: 0 });
      gsap.to(".right", 0.4, { x: 60 });
      gsap.to(".left", 0.0, { opacity: 0 });
      gsap.to(".left", 0.4, { x: -60 });
      gsap.to(".title", 0.0, { opacity: 0 });
      gsap.to(".title", 0.4, { y: 60 });
  
      setTimeout(() => {
        gsap.to(".right", 0.4, { x: 0, opacity: 1 });
        gsap.to(".left", 0.4, { x: 0, opacity: 1 });
        gsap.to(".title", 0.4, { y: 0, opacity: 1 });
      }, 200);
    }, []);

  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex left flex-col relative h-full">
          <div className=" absolute left-[-80px] top-28 w-44 h-36 rounded-none ">
            <img
              src="/images/random/random4.webp"
              className="w-full h-full rounded-none opacity-50"
              alt=""
            />
          </div>
          <div className=" absolute left-[-30px] top-72 w-44 h-44 rounded-none">
            <img
              src="/images/random/random3.webp"
              className="w-full h-full rounded-none opacity-50"
              alt=""
            />
          </div>
        </div>
        <div className="px-52 py-16 pt-12 title">
          <h1
            className={`text-8xl font-bold text-center dark:delay-300 text-color_text_11 dark:text-color_text_29 ${roboto.className}`}
          >
            <span>Live the Game</span>
            <br />
            <span className="text-blue-700">Bet Smart</span>
            <br />
            <span>Stay Ahead</span>
          </h1>
          <p
            className={`text-center text-xl px-32 mt-12 text-color_text_20  ${barlow.className}`}
          >
            A comprehensive platform to help hirers and creators navigate the
            creative world from discovering inspiration, to connecting with one
            another
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Link href={"/login"}>
              <Button className="bg-blue-700 rounded-full px-7 pt-[6px] dark:text-white hover:bg-blue-900">
                Start Betting
              </Button>
            </Link>
            <Link href={"/matches"}>
              <Button
                variant={"outline"}
                className="dark:text-white bg-none outline-none shadow-none text-black rounded-full pt-[6px] px-7"
              >
                View Matches
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col right relative h-full">
          <div className=" absolute right-[-30px] top-28 w-44 h-28 rounded-none ">
            <img
              src="/images/random/random4.webp"
              className="w-full h-full rounded-none opacity-50"
              alt=""
            />
          </div>

          <div className=" absolute right-[-60px] top-72 w-44 h-44 rounded-none">
            <img
              src="/images/random/random3.webp"
              className="w-full h-full rounded-none opacity-50"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col relative h-full">
          <div className=" absolute left-[-80px] top-28 w-44 h-36 rounded-none ">
            <img
              src="/images/random/random4.webp"
              className="w-full h-full rounded-none opacity-70"
              alt=""
            />
          </div>
          <div className=" absolute left-[-30px] top-72 w-44 h-44 rounded-none">
            <img
              src="/images/random/random3.webp"
              className="w-full h-full rounded-none opacity-70"
              alt=""
            />
          </div>
        </div>
        <div className="px-52 py-16 pt-12">
          <h1
            className={`text-8xl font-bold text-center dark:delay-300 text-color_text_11 dark:text-color_text_29 ${roboto.className}`}
          >
            <span>Live the Game</span>
            <br />
            <span className="text-blue-700">Bet Smart</span>
            <br />
            <span>Stay Ahead</span>
          </h1>
          <p
            className={`text-center text-xl px-32 mt-12 text-color_text_20  ${barlow.className}`}
          >
            A comprehensive platform to help hirers and creators navigate the
            creative world from discovering inspiration, to connecting with one
            another
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Link href={"/login"}>
              <Button className="bg-blue-700 rounded-full px-7 pt-[6px] dark:text-white hover:bg-blue-900">
                Start Betting
              </Button>
            </Link>
            <Link href={"/matches"}>
              <Button
                variant={"outline"}
                className="dark:text-white bg-none outline-none shadow-none text-black rounded-full pt-[6px] px-7"
              >
                View Matches
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col relative h-full">
          <div className=" absolute right-[-30px] top-28 w-44 h-28 rounded-none ">
            <img
              src="/images/random/random4.webp"
              className="w-full h-full rounded-none opacity-70"
              alt=""
            />
          </div>

          <div className=" absolute right-[-60px] top-72 w-44 h-44 rounded-none">
            <img
              src="/images/random/random3.webp"
              className="w-full h-full rounded-none opacity-70"
              alt=""
            />
          </div>
        </div>
      </div>
      <HomeLabel />
    </div>
  );
}
