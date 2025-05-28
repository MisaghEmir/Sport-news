"use client";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const frameworks = [
  {
    value: "laliga",
    label: "Laliga",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function HeaderMatches() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(frameworks[0].value);
  return (
    <div className="bg-gray-100 dark:bg-opacity-10 px-8   flex gap-5 items-center">
      <div className="">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between "
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDown className="opacity-50 dark:bg-black" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0 dark:bg-black">
            <Command className="dark:bg-black">
              <CommandInput
                placeholder="Search framework..."
                className="h-9 dark:bg-black"
              />
              <CommandList className="dark:bg-black">
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup className="dark:bg-black">
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                      className={cn(
                        "ml-auto dark:bg-black dark:hover:bg-black ",
                        value === framework.value
                          ? "opacity-100 dark:bg-black hover:dark:bg-black"
                          : "opacity-100 dark:bg-black"
                      )}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          "ml-auto dark:bg-black",
                          value === framework.value
                            ? "opacity-100 bg-black"
                            : "opacity-0 bg-black"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="px-10 pr-5    w-full" >
        <Carousel className="w-full ">
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="border-color_border_50 m-0">
                <Card className="h-16 bg-transparent border-t-0 border-b-0 m-0 rounded-none shadow-none border-l w-full">
                  <CardContent className="flex aspect-square items-center justify-center h-full">
                    <span className=" font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-20px] border-none border-l rounded-none text-xs p-0 w-5 h-7 bg-blue-700 hover:bg-blue-900 hover:text-white text-white rounded-s-md" />
          <div className="border-l h-full bg-black">
            <CarouselNext className="m-0 right-[-20px] border-none border-l rounded-none text-xs p-0 w-5 h-7 bg-blue-700 hover:bg-blue-900 hover:text-white text-white rounded-e-md" size={'sm'} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
