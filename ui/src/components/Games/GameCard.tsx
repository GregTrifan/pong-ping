import type { Game } from "../../types/Game";
import { Badge, Text } from "@mantine/core";
import PlayerOverview from "../Players/PlayerOverview";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  const winner =
    game.score1 > game.score2 ? (
      <Badge color="blue" fullWidth>
        {game.player1}
      </Badge>
    ) : (
      <Badge color="red" fullWidth>
        {game.player2}
      </Badge>
    );
  return (
    <tr>
      <td>
        <PlayerOverview name={game.player1} />
      </td>

      <td>
        <PlayerOverview name={game.player2} />
      </td>
      <td>
        <Text size="md" weight={500}>
          {game.score1}
        </Text>
      </td>
      <td>
        <Text size="md" weight={500}>
          {game.score2}
        </Text>
      </td>
      <td>
        <Text size="md" weight={500}>
          {game.score1 === game.score2 ? (
            <Badge color="gray" fullWidth>
              No Winner
            </Badge>
          ) : (
            winner
          )}
        </Text>
      </td>
    </tr>
  );
};

export default GameCard;
