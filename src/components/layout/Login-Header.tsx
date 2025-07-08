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

const LoginHeader = () => {
   const { ThemeMode } = useThemeMode();
  return (
    <div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/search"}>
              <IoSearchOutline />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <li
              className=" cursor-pointer dark:delay-300"
              onClick={ThemeMode.toggleThemeMode}
            >
              <FaMoon />
            </li>
            <NavigationMenuContent className="">
              <ul className="grid gap-0 py-2 px-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 rounded-sm hover:bg-color_bg_29  dark:hover:bg-color_bg_10 ">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-3 no-underline outline-hidden select-none focus:shadow-md"
                      href="/football"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/docs"
                  title="Laliga"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Seri A"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Typography"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
           <li className=" cursor-pointer dark:delay-300">
                   <IoNotificationsSharp />
                 </li>
            <NavigationMenuContent className="">
              <ul className="grid gap-0 py-6 px-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 hover:bg-color_bg_29  dark:hover:bg-color_bg_10 ">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-3 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/docs"
                  title="Laliga"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Seri A"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Typography"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem
            asChild
            className={`${navigationMenuTriggerStyle()} bg-transparent`}
          >
            <Link href="/football/matches">Matches</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent border-l">
              Other
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid gap-0 py-6 px-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 hover:bg-color_bg_29  dark:hover:bg-color_bg_10 ">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-3 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/docs"
                  title="Laliga"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Seri A"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Typography"
                  className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3"
                >
                  Styles for headings, paragraphs, lists...etc
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
