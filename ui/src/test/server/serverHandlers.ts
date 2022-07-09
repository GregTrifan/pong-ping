import { rest } from "msw";
import { ApiEndpoint } from "../../constants";
import { defaultPlayer, defaultPlayers, defaultGames } from "../constants";

const handlers = [
  rest.get(`${ApiEndpoint}/player/${defaultPlayer.name}`, (req, res, ctx) => {
    return res(ctx.json(defaultPlayer));
  }),
  rest.get(
    `${ApiEndpoint}/player/${defaultPlayers[1].name}`,
    (req, res, ctx) => {
      return res(ctx.json(defaultPlayers[1]));
    }
  ),
  rest.get(`${ApiEndpoint}/players`, (req, res, ctx) => {
    return res(ctx.json({ items: defaultPlayers }));
  }),
  rest.get(`${ApiEndpoint}/losers`, (req, res, ctx) => {
    return res(ctx.json({ items: defaultPlayers.reverse() }));
  }),
  rest.post(`${ApiEndpoint}/game`, (req, res, ctx) => {
    return res(ctx.json({ message: "Game uploaded successfully!" }));
  }),
  rest.get(`${ApiEndpoint}/games/1`, (req, res, ctx) => {
    return res(ctx.json(defaultGames));
  }),
];
export { handlers };
