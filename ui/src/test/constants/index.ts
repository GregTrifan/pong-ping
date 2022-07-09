import { Game } from "../../types/Game";
import { Player } from "../../types/Player";

export const defaultPlayer: Player = {
  name: "Jonathan",
  wins: 1,
  losses: 2,
};
export const defaultPlayers: Player[] = [
  {
    name: "Jonathan",
    wins: 1,
    losses: 2,
  },
  {
    name: "Alex",
    wins: 1,
    losses: 2,
  },
];
interface GameRes {
  lastItem: string;
  items: Game[];
}
export const defaultGames: GameRes = {
  lastItem: "11704149080839952",
  items: [
    {
      id: "11704149003050008",
      score1: 5,
      score2: 4,
      player1: "Jonathan",
      player2: "Alex",
    },
    {
      id: "11704149156394452",
      score1: 1,
      score2: 4,
      player1: "Jonathan",
      player2: "Alex",
    },
    {
      id: "11704149080839952",
      score1: 4,
      score2: 6,
      player1: "Jonathan",
      player2: "Alex",
    },
  ],
};
