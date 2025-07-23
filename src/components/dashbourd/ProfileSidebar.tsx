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
  ArrowLeftFromLine,
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

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function SidebarProfile() {
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
      <Sidebar
        collapsible="icon"
        side="right"
        className="h-6/7 w-56 top-14 mt-0 py-4 px-6"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="flex justify-center">
                  <div className="w-32 h-32 relative mt-4 cursor-pointer rounded-full overflow-hidden border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <img src="https://github.com/shadcn.png" alt="" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Change your avatar</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </SidebarMenuItem>
                <SidebarMenuItem className="mt-4">
                  <p className="text-xl font-bold">Amir Misagh</p>
                  <span>Misagh</span>
                </SidebarMenuItem>
                <SidebarMenuItem className="mt-10">
                 <Button variant={'outline'} className="w-full py-0 p-0">Edit Profile</Button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
