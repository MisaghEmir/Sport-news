interface TeamType {
  _id: String;
  name: String;
  nickname: String;
  image: string;
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

interface Assist {
  attempted: number;
  accurate: number;
  unsuccessful: number;
}

interface Shot {
  atGoal: number;
  onGoal: number;
  outGoal: number;
}



interface TeamHistory {
  teamId: String;
  LeagueId: String;
  game: Number;
  Year: String;
  goal: GoalPlayer;
  goalPlayer: GoalPlayer[];
  assist: Assist;
  assistPlayer: GoalPlayer[];
  shot: Shot;
  shotPlayer: GoalPlayer[];
  card: CardTeam;
  cardPlayer: CardTeam[];
  foul: Object;
  foulPlayer: GoalPlayer[];
  date: Date;
}
