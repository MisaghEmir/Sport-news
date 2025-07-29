"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Inbox,
  Search,
  Settings,
  Wallet,
  CalendarIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/dashbourd",
    icon: Home,
  },
  {
    title: "Bet",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Wallet",
    url: "/dashbourd/wallet",
    icon: Wallet,
  },
  {
    title: "Your Games",
    url: "/dashbourd/games",
    icon: Wallet,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/dashbourd/setting",
    icon: Settings,
  },
];

export default function SidebarDashbourd() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [openDate, setOpenDate] = useState(false);

  function formatDate(date: Date | undefined) {
    if (!date) {
      return "";
    }
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <div>
      <Sidebar collapsible="icon" className="h-6/7 top-14 mt-0 py-4" >
        <SidebarContent>
          <SidebarGroup>
            <div className="flex justify-between items-center pr-1">
              <SidebarGroupLabel>Application</SidebarGroupLabel>
             
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        {open ? (
                          <item.icon />
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <item.icon />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
