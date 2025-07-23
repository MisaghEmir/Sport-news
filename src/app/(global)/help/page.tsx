"use client";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default function page() {
  const [value, setValue] = useState("account");
  const [verifier, setVerifier] = useState(false);
  const [notification, setNotification] = useState(true);
  const [picture, setPicture] = useState(false);
  const [progress, setProgress] = useState(1);

  const skipHandle = () => {
    switch (progress) {
      case 1:
        setValue("password");
        break;
      case 2:
        setValue("profile");
        break;
      case 3:
        redirect("/dashbourd");
        break;

      default:
        break;
    }
    setProgress(progress + 1);
  };

  const backHandle = () => {
    switch (progress) {
      case 2:
        setValue("account");
        break;
      case 3:
        setValue("password");
        break;
      case 4:
        setValue("profile");
        break;

      default:
        break;
    }
    if (progress > 1) {
      setProgress(progress - 1);
    }
  };

  return (
    <div className="px-24 mt-10 w-full">
      <div>
        <h3 className="text-2xl font-bold">Welcome!</h3>
        <p className="text-sm mt-1">
          Your account has been created successfully.
        </p>
        <p className="font-bold mt-14 flex items-center gap-2">
          <span className="mt-[2px] cursor-pointer" onClick={backHandle}>
            <LiaLongArrowAltLeftSolid />
          </span>
          Complete Your Account Setup
        </p>
      </div>
      <div className=" w-full grid grid-cols-3 gap-3 gap-y-2 mt-3">
        <div
          className={`w-full h-2 rounded-lg ${
            progress === 1
              ? verifier
                ? "bg-blue-500"
                : "bg-yellow-500"
              : verifier
              ? "bg-blue-500"
              : "bg-red-500"
          }`}
        ></div>
        <div
          className={`w-full h-2 rounded-lg ${
            progress === 2
              ? notification
                ? "bg-blue-500"
                : "bg-yellow-500"
              : progress > 2
              ? notification
                ? "bg-blue-500"
                : "bg-red-500"
              : "bg-transparent"
          }`}
        ></div>
        <div
          className={`w-full h-2 rounded-lg ${
            progress === 3
              ? verifier
                ? "bg-blue-600"
                : "bg-yellow-600"
              : progress > 3
              ? verifier
                ? "bg-blue-600"
                : "bg-red-600"
              : "bg-transparent"
          }`}
        ></div>
        <div className="flex justify-center">
          <p className={`text-center text-xs ${progress < 1 && "hidden"}`}>
            Verify Email
          </p>
        </div>
        <div className="flex justify-center">
          <p className={`text-center text-xs ${progress < 2 && "hidden"}`}>
            Notification
          </p>
        </div>
        <div className="flex justify-center">
          <p className={`text-center text-xs ${progress < 3 && "hidden"}`}>
            Choose Picture
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 mt-10">
        <Tabs value={value}>
          <TabsContent value="account" className="mt-0 w-full ">
            <EmailVerifier
              handleSkip={skipHandle}
              handleVerifier={() => setVerifier(true)}
            />
          </TabsContent>
          <TabsContent value="password">
            <AcceptNotifications
              handleSkip={skipHandle}
              handleVerifier={() => setVerifier(true)}
            />
          </TabsContent>
          <TabsContent value="profile">
            <EditProfile
              handleSkip={skipHandle}
              handleVerifier={() => setVerifier(true)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const EmailVerifier = ({
  handleSkip,
  handleVerifier,
}: {
  handleSkip: () => void;
  handleVerifier: () => void;
}) => {
  return (
    <div className="flex justify-center w-full px-80">
      <div className="flex flex-col items-center border shadow-sm p-10 py-12 bg-white rounded-lg">
        <div>
          <h1 className="text-xl font-bold">Verify Email</h1>
          <p className="mt-4 text-sm">
            We’ve sent a confirmation link to your email. <br /> Please check
            your inbox (and spam folder) and click the link to verify your
            email. After verification, you’ll have full access to all features.
          </p>
          <Button variant={"ghost"} className="hover:bg-transparent px-0">
            Resend
          </Button>
        </div>
        <div className="mt-14">
          <label htmlFor="" className="text-xs font-bold mb-1">
            One-Time Password
          </label>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <label htmlFor="" className="text-xs mt-0 pt-0">
            Please enter the one-time password sent to your phone.
          </label>
        </div>
        <div className="flex justify-end gap-1 mt-7  w-full">
          <Button
            onClick={() => {
              handleSkip(), handleVerifier();
            }}
          >
            Verify
          </Button>
          <Button
            onClick={handleSkip}
            variant={"ghost"}
            className="hover:underline"
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

const AcceptNotifications = ({
  handleSkip,
  handleVerifier,
}: {
  handleSkip: () => void;
  handleVerifier: () => void;
}) => {
  return (
    <div className="w-full px-72">
      <div className="flex flex-col gap-6  border shadow-sm p-10 py-12 bg-white rounded-lg">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <p className="text-muted-foreground text-sm">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="toggle" disabled />
          <Label htmlFor="toggle">Enable notifications</Label>
        </div>
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            defaultChecked
            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">
              Enable notifications
            </p>
            <p className="text-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>
        <div className="flex justify-end gap-1 mt-7  w-full">
          <Button
            onClick={() => {
              handleSkip(), handleVerifier();
            }}
          >
            Verify
          </Button>
          <Button
            onClick={handleSkip}
            variant={"ghost"}
            className="hover:underline"
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

const EditProfile = ({
  handleSkip,
  handleVerifier,
}: {
  handleSkip: () => void;
  handleVerifier: () => void;
}) => {
  return (
    <div className="flex justify-center w-full px-80">
      <div className="flex flex-col items-center border shadow-sm p-10 py-12 bg-white rounded-lg">
        <div>
          <h1 className="text-xl font-bold">Choose Avatar</h1>
          <p className="mt-0 text-xs">
            We’ve sent a confirmation link to your email. 
          
          </p>
          <div className="flex justify-center items-center my-3">
            <div className="w-24 h-24 relative mt-4 rounded-full overflow-hidden border">
              <img src="https://github.com/shadcn.png" alt="" />
              <span className="w-full h-full cursor-pointer absolute top-0 left-0 flex justify-center items-center bg-black/40 hover:bg-black/70 transition-all delay-75 text-white">
                Choose
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm">
            We’ve sent a confirmation link to your email. <br /> Please check
            your inbox (and spam folder).
          </p>
        </div>
        <div className="flex justify-end gap-1 mt-7  w-full">
          <Button
            onClick={() => {
              handleSkip(), handleVerifier();
            }}
          >
            Verify
          </Button>
          <Button
            onClick={handleSkip}
            variant={"ghost"}
            className="hover:underline"
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};
