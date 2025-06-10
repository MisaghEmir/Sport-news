"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { SlSocialGoogle } from "react-icons/sl";

export default function EmailContainer({
  handleCheckEmail,
}: {
  handleCheckEmail: () => void;
}) {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col justify-between bg-white rounded-md p-[7vh] px-20">
      <div>
        <h1 className="md:text-2xl font-bold">Sign in</h1>
        <p className="text-sm mt-2">
          New user?
          <Link href={"/register"}>
            <span className="text-blue-500"> Create an account</span>
          </Link>
        </p>
      </div>
      <div className="mt-[7vh]">
        <p className="text-xs ">Email address</p>
        <Input className="mt-1  h-8" type="email" placeholder="Email" />
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
      <div className=" relative mt-[4vh] flex justify-center">
        <span className="top-[-13px] px-2 bg-white absolute">Or</span>
      </div>
      <hr />
      <div className="flex flex-col gap-2 mt-6">
        <Button variant={"outline"} className="p-6 rounded-3xl ">
          <img src="/images/logo/google-social-icon-round.svg" alt="" />
          <span className="text-xs mx-1">Continue with google</span>
        </Button>
        <Button variant={"outline"} className="p-6 rounded-3xl ">
          <img src="/images/logo/facebook-social-icon-round.svg" alt="" />
          <span className="text-xs mx-1">Continue with google</span>
        </Button>
        <Button variant={"outline"} className="p-6 rounded-3xl ">
          <img src="/images/logo/microsoft-social-icon-round.svg" alt="" />
          <span className="text-xs mx-1">Continue with google</span>
        </Button>
        <p className="text-center text-sm font-bold text-blue-500 mt-2">
          View more
        </p>
      </div>
      <div className="mt-10">
        <p className="text-blue-500">Get help signing in</p>
      </div>
    </div>
  );
}
