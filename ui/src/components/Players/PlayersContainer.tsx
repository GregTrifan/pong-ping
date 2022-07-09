import { Table } from "@mantine/core";
import { Player } from "../../types/Player";
import PlayerCard from "./PlayerCard";
interface PlayerContainerProps {
  players: Player[];
}
const playersContainer = ({ players }: PlayerContainerProps) => {
  const rows = players.map((player, i) => (
    <PlayerCard player={player} key={i} n={i + 1} />
  ));
  return (
    <Table mt={40} verticalSpacing="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Player Name</th>
          <th>Wins</th>
          <th>Losses</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default playersContainer;
