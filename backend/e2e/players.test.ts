import axios from "axios";
import { gameObj, url, Player } from "./utils";
describe("Find a player", () => {
  test("Player should be avalaible", async () => {
    const res = await axios.get(`${url}/player/${gameObj.player1}`);
    expect(res.status).toEqual(200);
    expect(res.data.name).toEqual(gameObj.player1);
  });
});
describe("Player can be found in the list", () => {
  test("List Players", async () => {
    const res = await axios.get(`${url}/players`);
    expect(res.status).toEqual(200);
    const isHere = res.data.items.filter(
      (x: Player) => x.name === gameObj.player1
    );
    expect(isHere).toBeTruthy();
  });
});
