import { Text } from "@mantine/core";
import { Player } from "../../types/Player";

interface PlayerCardProps {
  player: Player;
}
const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <tr>
      <td>
        <Text size="md" weight={500}>
          {player.name}
        </Text>
      </td>
      <td>
        <Text size="md" weight={500}>
          {player.wins}
        </Text>
      </td>
      <td>
        <Text size="md" weight={500}>
          {player.losses}
        </Text>
      </td>
    </tr>
  );
};

export default PlayerCard;
