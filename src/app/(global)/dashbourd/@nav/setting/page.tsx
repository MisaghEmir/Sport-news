import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

function page() {
  return (
    <div>
      <div className="pb-6 border-b">
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold py-3 border-b">
            Notifications stopped telling jokes
          </h4>
        </div>
        <div className="pl-7 mt-2 hover:bg-accent/50  rounded-lg p-3 ">
          <div>
            <div className="flex items-start gap-3 mt-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-7">
            <Checkbox id="terms-2" defaultChecked />
            <div className="grid gap-2">
              <Label htmlFor="terms-2">Accept terms and conditions</Label>
              <p className="text-muted-foreground text-sm">
                By clicking this checkbox, you agree to the terms and
                conditions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-7">
            <Checkbox id="toggle" disabled />
            <Label htmlFor="toggle">Enable notifications</Label>
          </div>
          <div className="flex items-start gap-3 mt-7">
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                defaultChecked
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm leading-none font-medium">
                  Enable notifications
                </p>
                <p className="text-muted-foreground text-sm">
                  You can enable or disable notifications at any time.
                </p>
              </div>
            </Label>
          </div>
          <div className="flex justify-end mt-7">
            <Button className="px-9">
              Save
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Notifications stopped telling jokes
          </h4>
        </div>
        <div className="pl-5 mt-2 hover:bg-accent/50  rounded-lg border p-3 border-black/15 bg-gray-100 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <div>
            <div className="flex items-start gap-3 mt-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-10">
            <Checkbox id="terms-2" defaultChecked />
            <div className="grid gap-2">
              <Label htmlFor="terms-2">Accept terms and conditions</Label>
              <p className="text-muted-foreground text-sm">
                By clicking this checkbox, you agree to the terms and
                conditions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-10">
            <Checkbox id="toggle" disabled />
            <Label htmlFor="toggle">Enable notifications</Label>
          </div>
          <div className="flex items-start gap-3 mt-10">
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                defaultChecked
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm leading-none font-medium">
                  Enable notifications
                </p>
                <p className="text-muted-foreground text-sm">
                  You can enable or disable notifications at any time.
                </p>
              </div>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
