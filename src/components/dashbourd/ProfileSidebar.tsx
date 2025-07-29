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
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Brain,
  Bolt,
  Pencil,
  Bitcoin,
  WalletMinimal,
  Eye,
  Copy,
} from "lucide-react";

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
        className="h-6/7 w-56 top-14 mt-0 py-4 px-6 dark:bg-background_body_dark overflow-x-hidden"
      >
        <SidebarContent color="transparent" className="justify-between dark:bg-none flex flex-col pb-5 overflow-x-hidden transition-all delay-100">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="flex justify-center bg-none">
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
                <SidebarMenuItem className="mt-10 flex items-center gap-2">
                  <Mail size={16} />{" "}
                  <span className="text-[16px] font-semibold">
                    Misagh.amir@...
                  </span>
                </SidebarMenuItem>
                <SidebarMenuItem className="mt-3 flex items-center gap-2">
                  <Bitcoin size={16} />{" "}
                  <span className="text-[16px] font-semibold">20</span>
                </SidebarMenuItem>
                <SidebarMenuItem className="mt-2 flex items-center gap-2">
                  <WalletMinimal size={16} />{" "}
                  <span className="text-[16px] w-full flex justify-between items-center mt-1 font-semibold">
                    <small>********</small>
                    <small className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Copy className="cursor-pointer" size={13} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Eye className="cursor-pointer" size={13} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Show</p>
                        </TooltipContent>
                      </Tooltip>
                    </small>
                  </span>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="flex justify-center">
                <SidebarMenuItem className="flex justify-center">
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="p-1 px-2">
                          <Pencil />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input
                              id="name-1"
                              name="name"
                              defaultValue="Pedro Duarte"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input
                              id="username-1"
                              name="username"
                              defaultValue="@peduarte"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="p-1 px-2">
                          <Mail className="text-blue-700" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input
                              id="name-1"
                              name="name"
                              defaultValue="Pedro Duarte"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input
                              id="username-1"
                              name="username"
                              defaultValue="@peduarte"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                  <Link href={"/dashbourd/setting"}>
                    <Button variant="ghost" className="p-1 px-2">
                      <Bolt />
                    </Button>
                  </Link>
                  <Link href={"/matches"}>
                    <Button variant="ghost" className="p-1 px-2">
                      <Brain />
                    </Button>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem className="flex justify-center">
                  <Button
                    variant={"outline"}
                    className="w-full py-0 p-0 text-red-600 border-red-600"
                  >
                    Logout
                  </Button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
