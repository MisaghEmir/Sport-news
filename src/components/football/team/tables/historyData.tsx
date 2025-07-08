import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HistoryData({ data }: { data: TeamHistory | null }) {
  return (
    <div className="mt-9">
      <Tabs defaultValue="goal">
        <TabsList className="bg-gray-100 dark:bg-gray-900">
          <TabsTrigger className="px-7" value="goal">
            Goal
          </TabsTrigger>
          <TabsTrigger className="px-7" value="pass">
            Pass
          </TabsTrigger>
          <TabsTrigger className="px-7" value="shot">
            Shot
          </TabsTrigger>
          <TabsTrigger className="px-7" value="card">
            Card
          </TabsTrigger>
        </TabsList>
        <TabsContent value="goal">
          {data ? (
            <Goal data={data.goal} />
          ) : (
            <Skeleton className="h-72 w-full bg-zinc-600 rounded-sm" />
          )}
        </TabsContent>
        <TabsContent value="pass">
          {data ? (
            <Pass data={data.assist} />
          ) : (
            <Skeleton className="h-72 w-full bg-zinc-600 rounded-sm" />
          )}
        </TabsContent>
        <TabsContent value="shot">
          {data ? (
            <Shot data={data.shot} />
          ) : (
            <Skeleton className="h-72 w-full bg-zinc-600 rounded-sm" />
          )}
        </TabsContent>
        <TabsContent value="card">
          {data ? (
            <Card data={data.card} />
          ) : (
            <Skeleton className="h-72 w-full bg-zinc-600 rounded-sm" />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

const Goal = ({ data }: { data: GoalPlayer }) => {
  return (
    <div className="text-[12px] font-serif border ">
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Tipo</div>
        <div className=" col-span-2 text-center">Total</div>
        <div className=" col-span-2 text-center">Media</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Goal</div>
        <div className=" col-span-2 text-center">{data.all}</div>
        <div className=" col-span-2 text-center">0.6</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Penalti</div>
        <div className=" col-span-2 text-center">{data.penalti}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Head</div>
        <div className=" col-span-2 text-center">{data.all}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Free Kick</div>
        <div className=" col-span-2 text-center">{data.penalti}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
    </div>
  );
};

const Pass = ({ data }: { data: Assist }) => {
  return (
    <div className="text-[12px] font-serif border">
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Tipo</div>
        <div className=" col-span-2 text-center">Total</div>
        <div className=" col-span-2 text-center">Media</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Goal</div>
        <div className=" col-span-2 text-center">{data.accurate}</div>
        <div className=" col-span-2 text-center">0.6</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Penalti</div>
        <div className=" col-span-2 text-center">{data.attempted}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Head</div>
        <div className=" col-span-2 text-center">{data.unsuccessful}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
    </div>
  );
};

const Shot = ({ data }: { data: Shot | undefined }) => {
  return (
    <div className="text-[12px] font-serif border">
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Tipo</div>
        <div className=" col-span-2 text-center">Total</div>
        <div className=" col-span-2 text-center">Media</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Goal</div>
        <div className=" col-span-2 text-center">{data?.atGoal}</div>
        <div className=" col-span-2 text-center">0.6</div>
      </div>
      <div className="p-2 grid grid-cols-11">
        <div className=" col-span-7">Penalti</div>
        <div className=" col-span-2 text-center">{data?.onGoal}</div>
        <div className=" col-span-2 text-center">0.27</div>
      </div>
      <div className="p-2 grid grid-cols-11 bg-color_bg_30">
        <div className=" col-span-7">Head</div>
        <div className=" col-span-2 text-center">{data?.outGoal}</div>
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
