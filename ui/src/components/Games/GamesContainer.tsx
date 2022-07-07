import { ScrollArea, Table } from "@mantine/core";
import React from "react";
import { Game } from "../../types/Game";
import GameCard from "./GameCard";
interface GameContainerProps {
  games: Game[];
}
const GamesContainer = ({ games }: GameContainerProps) => {
  const rows = games.map((game, i) => (
    <React.Fragment key={i}>
      <GameCard game={game} />
    </React.Fragment>
  ));
  return (
    <ScrollArea>
      <Table mt={40} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Player 1 Score</th>
            <th>Player 2 Score</th>
            <th>Game Winner</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};

export default GamesContainer;
