import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiEndpoint } from "../constants";
import { Game } from "../types/Game";
import { Player } from "../types/Player";

type GamesResponse = {
  lastItem: string;
  items: Game[];
};
type PlayersResponse = {
  items: Player[];
};
export const pongApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: ApiEndpoint }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPlayerByName: builder.query<Player, string>({
      query: (name: string) => `/player/${name}`,
    }),
    listGames: builder.query<GamesResponse, string>({
      query: (id = "0") => `/games/${id}`,
    }),
    listTopPlayers: builder.query<PlayersResponse, void>({
      query: () => `/players`,
    }),
    listLosers: builder.query<PlayersResponse, void>({
      query: () => `/losers`,
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
