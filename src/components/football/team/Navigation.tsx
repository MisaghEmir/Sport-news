"use client";
import { useTeamData } from "@/hooks/football/team/useTeamsData";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound } from "next/navigation";

const Navigation = ({
  title,
  image,
  id,
}: {
  title: string;
  image: string;
  id: string;
}) => {
  const { team, isLoading,isError } = useTeamData(id);
  console.log(team);
  if(isError) notFound()
  return (
    <div>
      <div className="bg-color_bg_00 opacity-70 text-white">
        <div className="flex justify-between pl-7 md:pl-28 border-b border-color_border_70">
          <div className="flex items-end py-5">
            <div>
              {isLoading ? (
                <Skeleton className="h-[4.7rem] w-[4.7rem] bg-zinc-600 rounded-full" />
              ) : (
                <img src={team?.image} className="h-[4.7rem]" alt="" />
              )}
            </div>
            <div>
              {isLoading ? (
                <Skeleton className="h-8 ml-2 w-[250px] bg-zinc-600 rounded-full mb-2" />
              ) : (
                <h1 className=" text-4xl font-bold pl-2">{team?.name}</h1>
              )}

              {isLoading ? (
                <Skeleton className="h-4 ml-2 w-[250px] bg-zinc-600 rounded-full" />
              ) : (
                <p className="pl-2">Spain</p>
              )}
            </div>
          </div>
          <div className="flex justify-end "></div>
        </div>
        <div className="flex justify-between px-10 md:px-28 pt-3">
          <div className="flex  sticky top-0 gap-8 font-bold text-sm">
            <Link
              href="./2/news"
              className=" border-b-4 border-transparent px-2 pb-1 footballnav "
            >
              Latest news
            </Link>
            <Link
              href="./"
              className="border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
            >
              Club info
            </Link>
            <Link
              href="./2/squad"
              className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
            >
              Squad
            </Link>
            <Link
              href="./squad"
              className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
            >
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
