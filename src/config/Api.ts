import axios from "axios";

export const fetchLeagues = async () => {
  const response = await axios.get(`http://localhost:8080/leagues`, {
    headers: {
      user: "EmirMisagh",
      password: "09025941001a",
    },
  });
  return response.data;
};

export const fetchTeams = async () => {
  const response = await axios.get(`http://localhost:8080/teams`, {
    headers: {
      user: "EmirMisagh",
      password: "09025941001a",
    },
  });
  return response.data;
};

export const fetchTeam = async (id: string) => {
  const response = await axios.get(`http://localhost:8080/teams/${id}`, {
    headers: {
      user: "EmirMisagh",
      password: "09025941001a",
    },
  });
  return response.data;
};

export const fetchTeamHistory = async (id: string) => {
  const response = await axios.get(`http://localhost:8080/teamhistory/${id}`, {
    headers: {
      user: "EmirMisagh",
      password: "09025941001a",
    },
  });
  return response.data;
};


export const fetchMatches = async () => {
  const response = await axios.get(`http://localhost:8080/matches`, {
    headers: {
      user: "EmirMisagh",
      password: "09025941001a",
    },
  });
  return response.data;
};

export const fetchMatch = async (id: string) => {
  const response = await axios.get(`http://localhost:8080/matches/${id}`, {
    headers: {
      user: "EmirMisagh",
      password: "09025941001a",
    },
  });
  return response.data;
};