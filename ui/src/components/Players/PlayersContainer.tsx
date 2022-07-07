import { ScrollArea, Table } from "@mantine/core";
import React from "react";
import { Player } from "../../types/Player";
import PlayerCard from "./PlayerCard";
interface PlayerContainerProps {
  players: Player[];
}
const playersContainer = ({ players }: PlayerContainerProps) => {
  const rows = players.map((player, i) => (
    <React.Fragment key={i}>
      <PlayerCard player={player} />
    </React.Fragment>
  ));
  return (
    <ScrollArea>
      <Table mt={40} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};

export default playersContainer;
