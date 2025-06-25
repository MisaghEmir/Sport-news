"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { SlSocialGoogle } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";


const EmailContainer = ({
  handleCheckEmail,
}: {
  handleCheckEmail: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-background_body_dark dark:text-color_text_29 rounded-md p-12 pb-16 px-20">
      <div>
        <p className="text-xs text-color_text_13 dark:text-color_text_26">Step 1 of 2</p>
        <h1 className="md:text-3xl font-bold mt-2">Create an account</h1>
      </div>
      <div className="flex justify-start items-center  gap-2 mt-[4vh]">
        <Button
          variant={"outline"}
          className="p-[13px] py-[26px] dark:bg-color_bg_13 text-4xl rounded-full"
        >
          {/* <FcGoogle  /> */}
          <img src="/images/logo/google-social-icon-round.svg" alt="" />
        </Button>
        <Button
          variant={"outline"}
          className="p-[13px] py-[26px] dark:bg-color_bg_13 text-4xl rounded-full"
        >
          <img src="/images/logo/facebook-social-icon-round.svg" alt="" />
        </Button>
        <Button
          variant={"outline"}
          className="p-[13px] py-[26px] dark:bg-color_bg_13 text-4xl rounded-full"
        >
          <img src="/images/logo/apple-social-icon-round.svg" alt="" />
        </Button>
       <Button
          variant={"outline"}
          className="p-[13px] py-[26px] dark:bg-color_bg_13 text-4xl rounded-full"
        >
          <img src="/images/logo/microsoft-social-icon-round.svg" alt="" />
        </Button>
       
      </div>
      <div className=" relative mt-[4vh] flex justify-center">
        <span className="top-[-13px] px-2 bg-white dark:bg-background_body_dark absolute">Or</span>
      </div>
      <hr />
      <div className="mt-9 text-sm">
        <b>Sign up with email</b>
        <p className="text-color_text_13 dark:text-color_text_26">
          Alerady have an account?
          <Link href={"/login"}>
            <span className="text-blue-500"> Sign in</span>
          </Link>
        </p>
      </div>
      <div className="mt-[4vh]">
        <div className="mt-4">
          <p className="text-xs text-color_text_13 dark:text-color_text_26">Email address</p>
          <Input className="mt-1 text-color_text_13 dark:text-color_text_26 h-8" type="email" placeholder="Email" />
        </div>
        <div className="mt-4">
          <p className="text-xs text-color_text_13 dark:text-color_text_26">Password</p>
          <Input className="mt-1 text-color_text_13 dark:text-color_text_26 h-8" type="password" placeholder="Password" />
        </div>
        <div className="flex justify-end mt-[4vh]">
          <Button
            onClick={handleCheckEmail}
            className="bg-blue-500 rounded-full pt-[6px] px-5 text-[14px] dark:text-white hover:bg-blue-700"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin outline-none" />
                Please wait
              </>
            ) : (
              <>Continue</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailContainer;
