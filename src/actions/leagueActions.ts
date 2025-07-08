export  const returnLeagueName = (id: string,leagues:League[]) => {
    const leagueSelect = leagues?.find((item: any) => item._id === id);
    return leagueSelect?.name;
  };