export type Game = GameForm & {
  id: string;
};
export type GameForm = {
  player1: string;
  player2: string;
  score1: number;
  score2: number;
};
