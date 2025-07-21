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
import { cn } from "@/lib/utils";


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

const PopoverEl = () => {
     const [open, setOpen] = React.useState(false);
      const [value, setValue] = React.useState(frameworks[0].value);
  return (
    <div>
         <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between dark:text-color_text_30"
                    >
                      {value
                        ? frameworks.find((framework) => framework.value === value)
                            ?.label
                        : "Select framework..."}
                      <ChevronsUpDown className="opacity-50 " />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0 dark:bg-black">
                    <Command className="dark:bg-black">
                      <CommandInput
                        placeholder="Search framework..."
                        className="h-9 dark:bg-black dark:text-w\"
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
                                  "ml-auto ",
                                  value === framework.value
                                    ? "opacity-100 "
                                    : "opacity-0 "
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
  )
}

export default PopoverEl