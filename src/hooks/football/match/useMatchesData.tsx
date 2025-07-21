import { fetchMatches, fetchMatch } from "@/config/Api";
import { useQuery } from "@tanstack/react-query";

export const useMatchesData = (onSuccess?: () => void, onError?: () => void) => {
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ["matches"],
      queryFn: fetchMatches,
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
  return { matches: data?.data, isLoading, isError, error };
};

export const useMatchData = (
  id: string,
  onSuccess?: () => void,
  onError?: () => void
) => {
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ["match-", id],
      queryFn: () => fetchMatch(id),
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
  return { match: data?.data, isLoading, isError, error };
};


