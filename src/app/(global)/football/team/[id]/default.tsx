import React from "react";
import Navigation from "@/components/football/team/Navigation";

export default async function defaultTeam({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
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
