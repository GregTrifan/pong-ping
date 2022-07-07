import { Title } from "@mantine/core";
import ListSkeletons from "../components/ListSkeletons";
import PlayersContainer from "../components/Players/PlayersContainer";
import { useListTopPlayersQuery } from "../services/pong";
const TopPlayers = () => {
  const { data: playersData } = useListTopPlayersQuery();
  if (playersData)
    return (
      <div>
        <Title align="center" mb={40}>
          Top 100 Players
        </Title>
        <PlayersContainer players={playersData.items} />
      </div>
    );

  return <ListSkeletons n={10} />;
};

export default TopPlayers;
