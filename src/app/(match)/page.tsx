"use client";
import { Button } from "@/components/ui/button";
import {
  DM_Serif_Display,
  Bebas_Neue,
  Poetsen_One,
  Alfa_Slab_One,
  Lilita_One,
  Barlow_Condensed,
} from "next/font/google";
import "../globals.css";
import "../env.css"
import Link from "next/link";


const roboto = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div>
        
      </div>
      <div className="px-52 py-16">
        <h1
          className={`text-8xl font-bold text-center text-color_text_11 dark:delay-300 dark:text-gray-100 ${roboto.className}`}
        >
          <span>Live the Game</span>
          <br />
          <span className="text-blue-700">Bet Smart</span>
          <br />
          <span>Stay Ahead</span>
        </h1>
        <p className={`text-center text-xl px-32 mt-12 text-gray-900 dark:text-slate-600 bg-color_bg_14 ${barlow.className}`}>
          A comprehensive platform to help hirers and creators navigate the
          creative world from discovering inspiration, to connecting with one
          another
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <Link href={'/login'}>
          <Button className="bg-blue-700 rounded-full px-7 pt-[6px] dark:text-white hover:bg-blue-900">
            Start Betting
          </Button>
          </Link>
          <Button
            variant={"outline"}
            className="dark:text-white bg-none outline-none shadow-none text-black rounded-full pt-[6px] px-7"
          >
            View Matches
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
