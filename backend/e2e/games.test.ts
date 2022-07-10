import axios from "axios";
import { gameObj, Game, url } from "./utils";
let gameId: string;
describe("add Game Session", () => {
  test("Should reply success", async () => {
    const res = await axios.post(`${url}/game`, gameObj);
    expect(res.status).toEqual(200);
    expect(res.data.message).toMatch(/Game uploaded successfully!/);
    expect(res.data.id).toBeDefined();
    gameId = res.data.id;
  });
});
describe("Game Session should be avalaible ", () => {
  test("Search Game", async () => {
    const res = await axios.get(`${url}/game/${gameId}`);
    expect(res.status).toEqual(200);
    expect(res.data.Item).toMatchObject({ ...gameObj, id: gameId });
  });
});
describe("Game session can be found in the list", () => {
  test("List Games", async () => {
    const res = await axios.get(`${url}/games/1`);
    expect(res.status).toEqual(200);
    const isHere = res.data.items.filter((x: Game) => x.id === gameId);
    expect(isHere).toBeTruthy();
  });
});
