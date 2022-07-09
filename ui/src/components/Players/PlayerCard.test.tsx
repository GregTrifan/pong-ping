import { cleanup, render, screen } from "@testing-library/react";
import { Player } from "../../types/Player";
import PlayerCard from "./PlayerCard";

afterEach(cleanup);
it("Render PlayerCard accordingly", () => {
  const player: Player = {
    name: "Jonathan",
    wins: 10,
    losses: 4,
  };
  render(
    <table>
      <tbody>
        <PlayerCard n={1} player={player} />
      </tbody>
    </table>
  );

  expect(screen.getByText(player.name)).toBeTruthy();
  expect(screen.getByText(1)).toBeTruthy();
});
