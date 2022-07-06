import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const endpoint =
  process.env.REACT_APP_BACKEND_ENDPOINT ?? "http://localhost:4000/dev/api/";
export const pongApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: endpoint }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPlayerByName: builder.query({
      query: (name: string) => `player/${name}`,
    }),
  }),
});
export const { useGetPlayerByNameQuery } = pongApi;
