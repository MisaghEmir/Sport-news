"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { SlSocialGoogle } from "react-icons/sl";
import EmailContainer from "./checkEmail";
import PasswordContainer from "./checkPassword";

export default function page() {
  const [emailCheck, setEmailCheck] = useState(false);

  useEffect(() => {
    gsap.to(".email", 0.0, { opacity: 0 });
    gsap.to(".email", 0.4, { x: 60 });
    gsap.to(".logo", 0.0, { opacity: 0 });
    gsap.to(".logo", 0.4, { y: 60 });

    setTimeout(() => {
      gsap.to(".email", 0.4, { x: 0, opacity: 1 });
      gsap.to(".logo", 0.4, { y: 0, opacity: 1 });
    }, 200);
  }, []);

  const handleCheckEmail = () => {
    if (emailCheck) {
      gsap.to(".password", 0.4, { x: -30, opacity: 0 });
      gsap.to(".email", 0.4, { x: 60 });
      setTimeout(() => {
        setEmailCheck(false);
        gsap.to(".email", 0.4, { x: 0, opacity: 1 });
      }, 180);
    } else {
      gsap.to(".password", 0.4, { x: 60 });
      gsap.to(".email", 0.4, { x: -30, opacity: 0 });
      setTimeout(() => {
        setEmailCheck(true);
        gsap.to(".password", 0.4, { x: 0, opacity: 1 });
      }, 180);
    }
  };

  return (
    <div className=" relative">
      <div className="fixed top-0 left-0 w-full h-full">
        <img
          src="/images/random/random1.jpg"
          alt=""
          className="w-full h-full "
        />
      </div>
      <div className="z-[0] flex bg-black opacity-50 fixed w-full h-full overflow-hidden"></div>
      <div className="z-[0] flex  fixed w-full h-full overflow-hidden">
        <div className="flex-1 items-center justify-center hidden md:flex">
          <Link href="/">
            <h1 className=" logo text-gray-200 mr-52 mt-24 text-4xl flex font-bold items-center font-SourceSansPro ">
              <span className="p-[2px] mr-3 bg-black px-2  rounded-lg text-2xl">
                VC
              </span>
              Victory City
            </h1>
          </Link>
        </div>
        <div className="flex-1">
          <div
            className={`${
              emailCheck && "hidden"
            } email flex flex-col justify-center pr-[15vh] h-full  p-[4%] md:pl-0`}
          >
            <EmailContainer handleCheckEmail={handleCheckEmail} />
          </div>
          <div
            className={`${
              !emailCheck && "hidden"
            } password flex flex-col justify-center  h-full   pr-[20vh]  p-[4%] md:pl-0`}
          >
            <PasswordContainer handleCheckEmail={handleCheckEmail} />
          </div>
        </div>
      </div>
    </div>
  );
}
