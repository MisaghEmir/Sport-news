"use client";
import React from "react";
import { useThemeMode } from "@/context/ThemeMode";
import returnLogo from "@/actions/returnLogo";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Left() {
  return (
    <div className="items-center flex gap-5 text-sm  ">
      <ul>
        <li>
          <Link href={"/"}>
            <img
              src={"/images/logo/logo_dark.png"}
              className="w-11 h-11 bg-transparent dark:mix-blend-color "
              alt=""
            />
          </Link>
        </li>
      </ul>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link className="" href="/exploer">
              <NavigationMenuTrigger className="bg-transparent px-3 ">
                Explore
              </NavigationMenuTrigger>
            </Link>
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
          <NavigationMenuItem>
            <Link className="" href="/football">
              <NavigationMenuTrigger className="bg-transparent px-3">
                Football
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent className="">
              <ul className="grid gap-0 py-2 px-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 rounded-sm hover:bg-color_bg_29  dark:hover:bg-color_bg_10 ">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-3 no-underline outline-hidden select-none focus:shadow-md"
                      href="/football"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        All Football
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
            <NavigationMenuTrigger className="bg-transparent">
              Nba
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
          <NavigationMenuItem
            asChild
            className={`${navigationMenuTriggerStyle()} bg-transparent`}
          >
            <Link href="/football/matches">Matches</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-l">
            <NavigationMenuTrigger className="bg-transparent  ml-1">
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
}

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
