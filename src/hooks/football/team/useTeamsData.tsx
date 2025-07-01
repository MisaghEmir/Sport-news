import { useQuery } from "react-query";
import axios from "axios";

const fetchTeams = async () => {
  const response = await axios.get("http://localhost:8080/teams", {
    headers: {
      user: "EmirMisagh",
      password: "09025941001a",
    },
  });
  return response.data;
};

export const useTeamsData = (onSuccess?: () => void, onError?: () => void) => {
  const { data,isLoading, isError, error } = useQuery(
    "all-teams",
    fetchTeams,
    {
      // cacheTime: 5000,
      // staleTime: 30000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true // صفحه تغیر کند داده ها بروز میشن
      // refetchInterval: 10000,
      // refetchIntervalInBackground: true, // توی اون صفحه هم نباشی رفرش میشه
      // enabled: false
      onSuccess,
      onError,
      //   select: (data) => {
      //     const superHeroName = data.data.map((hero) => hero.name);
      //     return superHeroName;
      //   },
    } // cache time default is 5min
  );
  return { teams: data?.data,isLoading, isError, error };
};
