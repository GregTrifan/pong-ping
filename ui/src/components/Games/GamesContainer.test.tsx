import { cleanup, screen } from "@testing-library/react";
import { defaultGames } from "../../test/constants";
import { renderWithProviders } from "../../test/testUtils";
import GamesContainer from "./GamesContainer";

afterEach(cleanup);
it("Render GamesContainer accordingly", () => {
  renderWithProviders(<GamesContainer games={defaultGames.items} />);
  defaultGames.items.forEach((val) => {
    expect(screen.getAllByText(val.player1)).toBeTruthy();
    expect(screen.getAllByText(val.player2)).toBeTruthy();
  });
});
