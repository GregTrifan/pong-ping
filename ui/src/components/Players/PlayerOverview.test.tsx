import { act, cleanup, fireEvent, screen } from "@testing-library/react";
import { defaultPlayer } from "../../test/constants";
import PlayerOverview from "./PlayerOverview";
import { renderWithProviders } from "../../test/testUtils";
afterEach(cleanup);

it("Show PlayerOverview stats", async () => {
  renderWithProviders(<PlayerOverview name={defaultPlayer.name} />);
  expect(screen.getByText(defaultPlayer.name)).toBeTruthy();
  fireEvent.mouseEnter(screen.getByText(defaultPlayer.name));
  await act(async () => {
    //Wait to fetch data
    await new Promise((r) => setTimeout(r, 100));
  });

  expect(screen.getByText(defaultPlayer.wins)).toBeTruthy();
});
