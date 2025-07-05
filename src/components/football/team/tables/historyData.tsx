import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HistoryData({ data }: { data: TeamHistory | null }) {
  return (
    <div className="mt-9">
      <Tabs defaultValue="account">
        <TabsList className="bg-gray-100 dark:bg-gray-900">
          <TabsTrigger className="px-7" value="account">
            Goal
          </TabsTrigger>
          <TabsTrigger className="px-7" value="password">
            Pass
          </TabsTrigger>
          <TabsTrigger className="px-7" value="shot">
            Shot
          </TabsTrigger>
          <TabsTrigger className="px-7" value="card">
            Card
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {data ? (
            <Goal data={data?.goal} />
          ) : (
            <Skeleton className="h-72 w-full bg-zinc-600 rounded-sm" />
          )}
        </TabsContent>
        <TabsContent value="password">
          <Pass data={data?.goal} />
        </TabsContent>
        <TabsContent value="password">
          <Pass data={data?.goal} />
        </TabsContent>
        <TabsContent value="card">
          <Card data={data?.card} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const Goal = ({ data }: { data: GoalPlayer | undefined }) => {
  return (
    <div className="text-[12px] font-serif border ">
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Tipo</div>
        <div className=" col-span-2 text-center">Total</div>
        <div className=" col-span-2 text-center">Media</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Goal</div>
        <div className=" col-span-2 text-center">{data?.all}</div>
        <div className=" col-span-2 text-center">0.6</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Penalti</div>
        <div className=" col-span-2 text-center">{data?.penalti}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Head</div>
        <div className=" col-span-2 text-center">{data?.all}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Free Kick</div>
        <div className=" col-span-2 text-center">{data?.penalti}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
    </div>
  );
};

const Pass = ({ data }: { data: GoalPlayer | undefined }) => {
  return (
    <div className="text-[12px] font-serif border">
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Tipo</div>
        <div className=" col-span-2 text-center">Total</div>
        <div className=" col-span-2 text-center">Media</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Goal</div>
        <div className=" col-span-2 text-center">{data?.all}</div>
        <div className=" col-span-2 text-center">0.6</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Penalti</div>
        <div className=" col-span-2 text-center">{data?.penalti}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Head</div>
        <div className=" col-span-2 text-center">{data?.all}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Free Kick</div>
        <div className=" col-span-2 text-center">{data?.penalti}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
    </div>
  );
};

const Card = ({ data }: { data: CardTeam | undefined }) => {
  return (
    <div className="text-[12px] font-serif border">
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Tipo</div>
        <div className=" col-span-2 text-center">Total</div>
        <div className=" col-span-2 text-center">Media</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Yellow</div>
        <div className=" col-span-2 text-center">{data?.yellow}</div>
        <div className=" col-span-2 text-center">0.6</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Red</div>
        <div className=" col-span-2 text-center">{data?.red}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
    </div>
  );
};
