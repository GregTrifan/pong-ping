export const gameObj = {
  score1: 5,
  score2: 4,
  player1: "Jonathan",
  player2: "Alex",
};
export interface Game {
  id: string;
  score1: number;
  score2: number;
  player1: string;
  player2: string;
}
export interface Player {
  name: string;
  wins: number;
  losses: number;
}
export const url = process.env.URL_ENDPOINT || "http://localhost:4000/dev/api";
