"use client";
import { uniqByKeepFirst } from "@/actions/TeamHistoryHandle";
import SelectEl from "@/components/elements/SelectEl";
import { useLeaguesData } from "@/hooks/football/league/useLeaguesData";
import { useTeamHistoryData } from "@/hooks/football/team/useTeamsData";
import React, { useCallback, useEffect, useState } from "react";
import HistoryData from "./tables/historyData";

export default function History() {
  const [teamData, setTeamsData] = useState([]);
  const [league, setLeague] = useState("");
  const [year, setYear] = useState("");
  const [years, setYears] = useState([]);
  const [game, setGame] = useState(0);
  const [focusData, setFocusData] = useState<TeamHistory | null>(null);

  const { teams, Leagues, Years, isLoading, isError } = useTeamHistoryData(
    "671bf3c7233ef514fd833f9f"
  );
  const { leagues } = useLeaguesData();

  const getTeamHistory = useCallback(async () => {
    const Fitem = teams[0];
    setFocusData(Fitem);
    setTimeout(() => {
      let yearPlayer = teams.filter((item: TeamHistory) => {
        if (item.LeagueId === Fitem.LeagueId) return item;
      });
      yearPlayer = yearPlayer.map((item: TeamHistory) => item?.Year);
      yearPlayer = uniqByKeepFirst(yearPlayer, (it) => it);
      console.log(focusData);
      setYears(yearPlayer);
      setLeague(Fitem?.LeagueId);
      setYear(Fitem?.Year);
      setGame(Fitem?.game);
    }, 500);
  }, [teams]);

  useEffect(() => {
    getTeamHistory();
  }, [getTeamHistory]);

  const leagueCombobox = (value: string) => {
    console.log({ teams });
    const data = teams.filter((item: TeamHistory) => {
      if (item.LeagueId === value) return item;
    });
    console.log("data", data);
    const yearPlayer = data.map((item: TeamHistory) => {
      console.log(item);
      return item.Year;
    });
    console.log({ Year: yearPlayer });
    setYear(yearPlayer[0]);
    setYears(yearPlayer);
    setGame(data[0].game);
    setLeague(value);
    setFocusData(data[0]);
  };

  const yearCombobox = (value: string) => {
    console.log({ teams });
    const data = teams.filter((item: TeamHistory) => {
      if (item.LeagueId === league && item.Year === value) return item;
    });
    setFocusData(data[0]);
    setYears(years);
    setYear(value);
    setGame(data.game);
    console.log({ data: data[0] });
  };

  // const leagueCombobox = (value) => {
  //   const data = teamHistory.filter((item) => {
  //     if (item.LeagueId === value._id) return item;
  //   });
  //   console.log("data", data);
  //   const yearPlayer = data.map((item) => {
  //     console.log(item);
  //     return item.Year;
  //   });
  //   setYear(yearPlayer[0]);
  //   setYears(yearPlayer);
  //   setGame(data[0].game);
  //   setLeague(value._id);
  // };

  console.log(Leagues);
  return (
    <div>
      <div className="pt-4 flex gap-10">
        <div>
          <SelectEl
            label=""
            arr={Leagues?.map((item: string) => {
              return {
                value: item,
                label: leagues.map((league: League) => {
                  if (league._id === item) return league.name;
                }),
              };
            })}
            selectHandle={(value: string) => leagueCombobox(value)}
          />
        </div>
        <div>
          <SelectEl
            label=""
            arr={years?.map((item: string) => {
              return { value: item, label: item };
            })}
            selectHandle={(value: string) => yearCombobox(value)}
          />
        </div>
      </div>
      <HistoryData data={focusData} />
    </div>
  );
}
