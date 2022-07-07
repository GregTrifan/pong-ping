import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../types/Game";
import { Player } from "../types/Player";

const endpoint =
  process.env.REACT_APP_BACKEND_ENDPOINT ?? "http://localhost:4000/dev/api/";
type GamesResponse = {
  lastItem: string;
  items: Game[];
};
type PlayersResponse = {
  items: Player[];
};
export const pongApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: endpoint }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPlayerByName: builder.query<Player, string>({
      query: (name: string) => `player/${name}`,
    }),
    listGames: builder.query<GamesResponse, string>({
      query: (id = "0") => `games/${id}`,
    }),
    listTopPlayers: builder.query<PlayersResponse, void>({
      query: () => `players`,
    }),
    listLosers: builder.query<PlayersResponse, void>({
      query: () => `losers`,
    }),
  }),
});
export const {
  useGetPlayerByNameQuery,
  useListGamesQuery,
  useListTopPlayersQuery,
  useListLosersQuery,
  useLazyListGamesQuery,
} = pongApi;
