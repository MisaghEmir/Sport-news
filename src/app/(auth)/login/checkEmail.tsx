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
    <div className="flex flex-col justify-between bg-white rounded-md p-10 px-20">
      <div>
        <h1 className="md:text-2xl font-bold">Sign in</h1>
        <p className="text-sm mt-2">
          New user? <span className="text-blue-500">Create an account</span>
        </p>
      </div>
      <div className="mt-12">
        <p className="font-bold">Email address</p>
        <Input className="mt-1" type="email" placeholder="Email" />
        <div className="flex justify-end mt-4">
          <Button onClick={handleCheckEmail}>
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
      <div className=" relative mt-5 ">
        <span className="top-[-13px] px-2 bg-white translate-x-48 absolute">
          Or
        </span>
        <hr />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <Button variant={"outline"} className="p-6 rounded-3xl ">
          <SlSocialGoogle size={"large"} className="text-4xl" />{" "}
          <span className="text-lg font-bold">Continue with google</span>
        </Button>
        <Button variant={"outline"} className="p-6 rounded-3xl ">
          <SlSocialGoogle size={"large"} className="text-4xl" />{" "}
          <span className="text-lg font-bold">Continue with google</span>
        </Button>
        <Button variant={"outline"} className="p-6 rounded-3xl ">
          <SlSocialGoogle size={"large"} className="text-4xl" />{" "}
          <span className="text-lg font-bold">Continue with google</span>
        </Button>
        <p className="text-center text-sm font-bold text-blue-500">View more</p>
      </div>
      <div className="mt-10">
        <p className="text-blue-500">Get help signing in</p>
      </div>
    </div>
  );
}
