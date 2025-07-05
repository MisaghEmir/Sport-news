import { uniqByKeepFirst } from "@/actions/TeamHistoryHandle";
import { fetchTeam, fetchTeamHistory, fetchTeams } from "@/config/Api";
import { useQuery } from "@tanstack/react-query";

export const useTeamsData = (onSuccess?: () => void, onError?: () => void) => {
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ["teams"],
      queryFn: fetchTeams,
      // staleTime: 1000 * 60 * 5,
    }
    // {
    //   // cacheTime: 5000,
    //   // staleTime: 30000,
    //   // refetchOnMount: true,
    //   // refetchOnWindowFocus: true // صفحه تغیر کند داده ها بروز میشن
    //   // refetchInterval: 10000,
    //   // refetchIntervalInBackground: true, // توی اون صفحه هم نباشی رفرش میشه
    //   // enabled: false
    //   onSuccess,
    //   onError,
    //   //   select: (data) => {
    //   //     const superHeroName = data.data.map((hero) => hero.name);
    //   //     return superHeroName;
    //   //   },
    // } // cache time default is 5min
  );
  return { teams: data?.data, isLoading, isError, error };
};

export const useTeamData = (
  id: string,
  onSuccess?: () => void,
  onError?: () => void
) => {
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ["team-", id],
      queryFn: () => fetchTeam(id),
      // staleTime: 1000 * 60 * 5,
    }
    // {
    //   // cacheTime: 5000,
    //   // staleTime: 30000,
    //   // refetchOnMount: true,
    //   // refetchOnWindowFocus: true // صفحه تغیر کند داده ها بروز میشن
    //   // refetchInterval: 10000,
    //   // refetchIntervalInBackground: true, // توی اون صفحه هم نباشی رفرش میشه
    //   // enabled: false
    //   onSuccess,
    //   onError,
    //   //   select: (data) => {
    //   //     const superHeroName = data.data.map((hero) => hero.name);
    //   //     return superHeroName;
    //   //   },
    // } // cache time default is 5min
  );
  return { team: data?.data, isLoading, isError, error };
};

export const useTeamHistoryData = (
  id: string,
  onSuccess?: () => void,
  onError?: () => void
) => {
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ["team-history", id],
      queryFn: () => fetchTeamHistory(id),
      // staleTime: 1000 * 60 * 5,
      //     initialData: () => {
      //   const hero = queryClient
      //     .getQueryData("super-hero")
      //     ?.data?.find((hero) => hero.id === parseInt(heroId));

      //   if (hero) return { data: hero };
      //   else return undefined;
      // },
    }
    // {
    //   // cacheTime: 5000,
    //   // staleTime: 30000,
    //   // refetchOnMount: true,
    //   // refetchOnWindowFocus: true // صفحه تغیر کند داده ها بروز میشن
    //   // refetchInterval: 10000,
    //   // refetchIntervalInBackground: true, // توی اون صفحه هم نباشی رفرش میشه
    //   // enabled: false
    //   onSuccess,
    //   onError,
    //   //   select: (data) => {
    //   //     const superHeroName = data.data.map((hero) => hero.name);
    //   //     return superHeroName;
    //   //   },
    // } // cache time default is 5min
  );
 
  let Leagues = data?.data?.map((value: TeamHistory) => value.LeagueId);
  Leagues = uniqByKeepFirst(Leagues, (it) => it);
  let Years = data?.data?.map((value: TeamHistory) => value.Year);
  Years = uniqByKeepFirst(Years, (it) => it);
  return {
    teams: data?.data,
    Leagues,
    Years,
    isLoading,
    isError,
    error,
  };
};
