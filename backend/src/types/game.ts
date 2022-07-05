export type Game = {
  player1: string;
  player2: string;
  score1: number;
  score2: number;
};
export type GameDocument = Game & {
  id: string;
};
