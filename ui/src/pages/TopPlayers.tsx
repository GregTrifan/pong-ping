import { Title } from "@mantine/core";
import EmptyRes from "../components/EmptyRes";
import ListSkeletons from "../components/ListSkeletons";
import PlayersContainer from "../components/Players/PlayersContainer";
import { useListTopPlayersQuery } from "../services/pong";
const TopPlayers = () => {
  const { data: playersData, isLoading } = useListTopPlayersQuery();
  if (isLoading) return <ListSkeletons n={20} />;
  if (playersData)
    return (
      <div>
        <Title align="center" mb={40}>
          Top 100 Players
        </Title>
        <PlayersContainer players={playersData.items} />
      </div>
    );

  return <EmptyRes />;
};

export default TopPlayers;
