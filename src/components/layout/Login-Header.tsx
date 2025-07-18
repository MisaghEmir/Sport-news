"use client";
import React from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  IoSearchOutline,
  IoNotificationsSharp,
  IoMoonSharp,
} from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useThemeMode } from "@/context/ThemeMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LoginHeader = () => {
  const { ThemeMode } = useThemeMode();
  return (
    <div>
      <NavigationMenu className="items-center" >
        <NavigationMenuList className="gap-4 mr-4">
          <NavigationMenuItem >
            <Link href={"/search"} className="dark:text-color_text_30">
              <IoSearchOutline />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/football/matches"}>
              <Button
                variant={"outline"}
                className="bg-transparent font-bold rounded-full pt-[5px] px-7 dark:text-white hover:bg-color_bg_28"
              >
                Start frist bet
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="gap-[4px] items-center flex dark:text-color_text_30">
          <NavigationMenuItem>
            <button
              className=" cursor-pointer dark:delay-300"
              onClick={ThemeMode.toggleThemeMode}
            >
              <FaMoon />
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              <li className=" cursor-pointer dark:delay-300">
                <IoNotificationsSharp />
              </li>
            </NavigationMenuTrigger>
               <NavigationMenuContent className="">
              <ul className="grid col-span-1 gap-0 py-2 px-2 md:w-[400px] lg:w-[300px] ">
                <ListItem
                  href="/docs"
                  title="Laliga"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  href="/docs"
                  title="Laliga"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className={` bg-transparent`}>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              <Link href="/football/matches">
                <Avatar className="m-0">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid col-span-1 gap-0 py-2 px-2 md:w-[400px] lg:w-[300px] ">
                <ListItem
                  href="/docs"
                  title="Laliga"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  href="/docs"
                  title="Laliga"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs mt-1 leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default LoginHeader;
