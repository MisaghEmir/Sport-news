import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Loader } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const PasswordContainer = ({
  handleCheckEmail,
}: {
  handleCheckEmail: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-background_body_dark dark:text-color_text_29 rounded-md p-10 pb-16 px-20">
      <div>
        <p className="text-xs text-color_text_13 dark:text-color_text_26">Step 2 of 2</p>
        <div className="flex items-center gap-3">
          <span className="pt-3   cursor-pointer" onClick={handleCheckEmail}>
            <FaArrowLeft />
          </span>
          <h1 className="md:text-3xl font-bold mt-2">Create an account</h1>
        </div>
        <p className="mt-2 text-[15px] text-color_text_13 dark:text-color_text_26">
          Alerady have an account?
          <Link href={"/login"}>
            <span className="text-blue-500"> Sign in</span>
          </Link>
        </p>
      </div>
      <div className="flex flex-col text-color_text_13 dark:text-color_text_26">
        <div className="flex gap-5 mt-7">
          <div className="flex-1">
            <p className="text-xs">First name</p>
            <Input
            readOnly
              className="mt-1 focus:border-blue-300 outline-blue-700 h-8"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex-1">
            <p className="text-xs">Last name</p>
            <Input
            readOnly
              className="mt-1 focus:border-blue-300 outline-blue-700  h-8"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <label htmlFor="" className="mt-7 text-xs">
          Date of birth
        </label>
        <div className="flex gap-5 mt-7">
          <div className="flex-1">
            <p className="text-xs">Month</p>
            <Input
            readOnly
              className="mt-1 focus:border-blue-300 outline-blue-700 h-8"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex-1">
            <p className="text-xs">Year</p>
            <Input
            readOnly
              className="mt-1 focus:border-blue-300 outline-blue-700  h-8"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nesciunt
          architecto consequatur doloremque, fugit ducimus nulla vitae officia
          ab, modi pariatur unde optio dignissimos odit eius, est adipisci
          sapiente? Beatae.
        </p>
        <p className="text-xs my-3">
          Lorem ipsum dolor sit amet 
        </p>
         <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nesciunt
          architecto consequatur doloremque.
         
        </p>
      </div>
      <div className="flex justify-end mt-7">
        <Button
          onClick={handleCheckEmail}
          className="bg-blue-500 pt-[6px] text-[14px] rounded-full  px-5 dark:text-white hover:bg-blue-700"
        >
          {loading ? (
            <>
              <Loader className=" outline-none animate-spin" />
              Please wait
            </>
          ) : (
            <>Create account</>
          )}
        </Button>
      </div>
    
    </div>
  );
};

export default PasswordContainer;
