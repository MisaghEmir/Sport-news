"use client";
import React, { useEffect, useState } from "react";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectEl from "@/components/elements/SelectEl";
import { useSelector } from "react-redux";

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

export default function FilterSidebar() {
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
   const scroll = useSelector(
    (state: { toolsReducer: { scroll: number } }) => state.toolsReducer.scroll
  );


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
    <div className="sticky top-0 px-5 border-r w-[450px]">
      <div className={`mt-0   pb-32 ${scroll > 230 ? 'fixed top-4 pt-12' : 'pt-3'}`}>
        <SidebarContent className="  top-0 ">
          <SidebarGroup>
            <div className="flex justify-between items-center pr-1">
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <span
                className=" cursor-pointer"
                onClick={(open) => setOpen(false)}
              ></span>
            </div>
            <SidebarGroupContent>
              <SidebarMenu className="gap-7">
                <SidebarMenuItem>
                  <div className="">
                    <p className="m-1">Sport</p>
                    <div className="">
                      <SelectEl
                        label={"League"}
                        arr={[{ value: "Laliga", label: "Laliga" }]}
                        selectHandle={() => {}}
                      />
                    </div>
                  </div>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <div className="">
                    <p className="m-1">League</p>
                    <div className="">
                      <SelectEl
                        label={"League"}
                        arr={[{ value: "Laliga", label: "Laliga" }]}
                        selectHandle={() => {}}
                      />
                    </div>
                  </div>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <div className="">
                    <p className="m-1">Schedule Date</p>
                    <div className="relative flex gap-2">
                      <Input
                        id="date"
                        value={formatDate(date)}
                        placeholder="Tomorrow or next week"
                        className="bg-background pr-10 text-sm font-semibold"
                      />
                      <Popover open={openDate} onOpenChange={setOpenDate}>
                        <PopoverTrigger asChild>
                          <Button
                            id="date-picker"
                            variant="ghost"
                            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                          >
                            <CalendarIcon className="size-3.5" />
                            <span className="sr-only">Select date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0 border-gray-800"
                          align="end"
                        >
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date) => {
                              setDate(date);
                              setOpenDate(false);
                            }}
                            className="rounded-md border border-gray-800 shadow-sm "
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="text-muted-foreground px-1 text-xs">
                      Your post will be published on{" "}
                      <span className="font-medium">{formatDate(date)}</span>.
                    </div>
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </div>
  );
}
