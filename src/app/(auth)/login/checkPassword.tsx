"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Loader } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useLoginMode } from "@/context/LoginContext";

export default function PasswordContainer({
  handleCheckEmail,
}: {
  handleCheckEmail: () => void;
}) {
  const { LoginMode } = useLoginMode();
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-background_body_dark dark:text-color_text_29 rounded-md p-10 px-20">
      <div className="flex items-center gap-3">
        <span className="pt-1 cursor-pointer" onClick={handleCheckEmail}>
          <FaArrowLeft />
        </span>
        <h1 className="md:text-2xl font-bold">Enter your password</h1>
      </div>
      <div className="mt-12 flex items-center gap-4">
        <div>
          <img src="/images/tools/zoom-230.png" className="w-16 h-16" alt="" />
        </div>
        <div className="text-sm">
          <b>Misagh.amir@yahoo.com</b>
          <p>Personal Account</p>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-xs text-color_text_13 dark:text-color_text_26">
          Password
        </p>
        <Input
          className="mt-1 text-color_text_13 dark:text-color_text_26 h-8 focus:border-blue-300 outline-blue-700"
          type="password"
          placeholder="Password"
        />
        <div className="flex justify-end mt-7">
          <Button
            onClick={LoginMode.toggleLoginMode}
            className="bg-blue-500 rounded-full pt-[6px] px-5 text-[14px] dark:text-white hover:bg-blue-700"
          >
            {loading ? (
              <>
                <Loader className=" outline-none animate-spin" />
                Please wait
              </>
            ) : (
              <>Continue</>
            )}
          </Button>
        </div>
      </div>
      <div className="mt-20">
        <hr />
      </div>
      <div className="mt-6 text-blue-500 flex flex-col gap-5 text-sm">
        <span>Reset your password</span>
        <span>Sign in to a different account</span>
      </div>
    </div>
  );
}
