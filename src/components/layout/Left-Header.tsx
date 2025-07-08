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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const LeftHeader = () => {
  return (
    <div className="items-center flex gap-3 text-sm text-color_text_12 dark:text-white">
       <ul>
        <li>
          <Link href={"/"}>
            <img
              src={"/images/logo/logo.png"}
              className="w-11 h-11 bg-transparent dark:mix-blend-color text-white"
              alt=""
            />
          </Link>
        </li>
      </ul>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent px-3">Explore</NavigationMenuTrigger>
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
                <ListItem href="/docs" title="Laliga" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Seri A" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent px-3">Explore</NavigationMenuTrigger>
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
                <ListItem href="/docs" title="Laliga" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Seri A" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">Football</NavigationMenuTrigger>
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
                <ListItem href="/docs" title="Laliga" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Seri A" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography" className="hover:bg-color_bg_29  dark:hover:bg-color_bg_10 p-3">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
     
      <ul className="flex gap-2">
        <li className="px-2 dark:delay-50">
          <Link href={"/exploer"}>Explore</Link>
        </li>
        <li className="px-2 dark:delay-50">
          <Link href={"/football"}>Football</Link>
        </li>
        <li className="px-2 dark:delay-100">Nba</li>
        <li className="border-r px-3 dark:delay-100">
          <Link href={"/football/matches"}>Matches</Link>
        </li>
        <li className=" px-3 dark:delay-100">Other</li>
      </ul>
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

export default LeftHeader;
