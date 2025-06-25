"use client";
import React from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import Link from "next/link";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"


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
]

const LeftHeader = () => {
  return (
    <div className="items-center flex gap-5 text-sm text-color_text_12 dark:text-white">
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
      <ul className="flex gap-2">
        <li className="px-2 dark:delay-50">
           <Link href={"/exploer"}>
          Explore
           </Link>
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

export default LeftHeader;
