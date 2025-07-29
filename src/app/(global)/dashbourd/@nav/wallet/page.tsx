import React from "react";
import Chart from "@/components/dashbourd/Chart";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <h1 className="text-2xl">Wallet</h1>
      <div className="grid grid-cols-3 gap-5 mt-7">
        <BoxItem />
        <BoxItem />
        <BoxItem />
      </div>
      <div className="mt-16">
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-6 py-7 has-[[aria-checked=true]]:border-gray-600 has-[[aria-checked=true]]:bg-gray-100 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            defaultChecked
            className="data-[state=checked]:border-blue-600 hidden data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal w-full">
            <p className="text-2xl leading-none font-medium">
              Enable notifications
            </p>
            <p className="font-semibold text-sm mt-1">
              Wallet: dsdkmffro4345_kjn
            </p>
            <p className="font-semibold text-sm mt-1">
              Wallet: 20B
            </p>
            <div className="flex justify-end w-full mt-2 gap-3">
                <div>
                    <Button>
                        Add
                    </Button>
                </div>
                <div>
                    <Button>
                        Min
                    </Button>
                </div>
            </div>
          </div>
        </Label>
      </div>
      <div className="mt-6">
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-6 py-7 has-[[aria-checked=true]]:border-gray-600 has-[[aria-checked=true]]:bg-gray-100 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            defaultChecked
            className="data-[state=checked]:border-blue-600 hidden data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal w-full">
            <p className="text-2xl leading-none font-medium">
              Enable notifications
            </p>
            <p className="font-semibold text-sm mt-1">
              Wallet: dsdkmffro4345_kjn
            </p>
            <p className="font-semibold text-sm mt-1">
              Wallet: 20B
            </p>
            <div className="flex justify-end w-full mt-2 gap-3">
                <div>
                    <Button>
                        Add
                    </Button>
                </div>
                <div>
                    <Button>
                        Min
                    </Button>
                </div>
            </div>
          </div>
        </Label>
      </div>
    </div>
  );
}

const BoxItem = () => {
  return (
    <div className="p-5 rounded-lg shadow-md border flex justify-between">
      <div>
        <p>In Month</p>
      </div>
      <div>$30</div>
    </div>
  );
};
