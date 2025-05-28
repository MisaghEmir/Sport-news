import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function PasswordContainer({
  handleCheckEmail,
}: {
  handleCheckEmail: () => void;
}) {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col justify-between bg-white rounded-md p-10 px-20">
      <div className="flex items-center gap-3">
        <span className="pt-1 cursor-pointer" onClick={handleCheckEmail}>
          <FaArrowLeft />
        </span>
        <h1 className="md:text-2xl font-bold">Enter your password</h1>
      </div>
      <div className="mt-12 flex items-center gap-4">
        <div>
          <img  src="/images/tools/zoom-230.png"
                  className="w-16 h-16" alt="" />
        </div>
        <div className="text-sm">
          <b>Misagh.amir@yahoo.com</b>
          <p>Personal Account</p>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-bold">Password</p>
        <Input className="mt-1" type="password" placeholder="Password" />
        <div className="flex justify-end mt-4">
          <Button onClick={() => setLoading(true)}>
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
      <div className="mt-20">
        <hr />
      </div>
      <div className="mt-6 text-blue-500 flex flex-col gap-5 text-sm">
        <span>
          Reset your password
        </span>
        <span>
         Sign in to a different account
        </span>
      </div>
    </div>
  );
}
