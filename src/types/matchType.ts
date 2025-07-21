interface Match {
  _id: string;
  teamA: string;
  teamB: string;
  goalsA: number;
  goalsB: number;
  goalPlayersA: Object;
  goalPlayersB: Object;
  assistPlayersA: Object;
  assistPlayersB: Object;
  image: string;
  league: string;
  livecomment: string[];
  detailsA: Object;
  detailsB: Object;
  clock: string;
  end: boolean;
  date: Date;
}
