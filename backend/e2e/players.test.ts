import axios from "axios";

const gameObj = {
  score1: 5,
  score2: 4,
  player1: "Jonathan",
  player2: "Alex",
};
let gameId: string;
const url = process.env.URL_ENDPOINT || "http://localhost:4000/dev/api";
describe("add Game Session", () => {
  test("Should reply success", async () => {
    const res = await axios.post(`${url}/game`, gameObj);
    expect(res.status).toEqual(200);
    expect(res.data.message).toMatch(/Game uploaded successfully!/);
    expect(res.data.id).toBeDefined();
    gameId = res.data.id;
  });
});
describe("Game Session should be avalaible in the list", () => {
  test("List Games", async () => {
    const res = await axios.get(`${url}/game/${gameId}`);
    expect(res.status).toEqual(200);
    expect(res.data.Item).toMatchObject({ ...gameObj, id: gameId });
  });
});
