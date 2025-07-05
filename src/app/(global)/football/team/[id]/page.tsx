import Navigation from "@/components/football/team/Navigation";
import { useTeamData } from "@/hooks/football/team/useTeamsData";
import React, { useEffect } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // console.log({id})

  // console.log(teams)
  return (
    <div>
      <Navigation
        id={id}
        title="Real Madrid"
        image="https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/team/Real%20Madrid.png"
      />
    </div>
  );
}
