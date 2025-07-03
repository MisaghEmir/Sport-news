interface TeamType {
  _id: String;
  name: String;
  nickname: String;
  image: String;
  sport: String;
  country: String;
  league: String;
  coach: String;
  stadium: String;
  address: String;
  foundation: String;
  web: String;
  date: Date;
}

interface GoalPlayer {
  player: string;
  all: number;
  penalti: number;
}

interface CardTeam {
  yellow: number;
  red: number;
}

interface TeamHistory {
  teamId: String;
  LeagueId: String;
  game: Number;
  Year: String;
  goal: GoalPlayer;
  goalPlayer: GoalPlayer[];
  assist: Object;
  assistPlayer: GoalPlayer[];
  shot: Object;
  shotPlayer: GoalPlayer[];
  card: Object;
  cardPlayer: CardTeam[];
  foul: Object;
  foulPlayer: GoalPlayer[];
  date: Date;
}
