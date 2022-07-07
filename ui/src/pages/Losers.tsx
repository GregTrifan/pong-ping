import { Title } from "@mantine/core";
import ListSkeletons from "../components/ListSkeletons";
import PlayersContainer from "../components/Players/PlayersContainer";
import { useListLosersQuery } from "../services/pong";
const Losers = () => {
  const { data: playersData } = useListLosersQuery();
  if (playersData)
    return (
      <div>
        <Title align="center" mb={40}>
          Top 100 Losers
        </Title>
        <PlayersContainer players={playersData.items} />
      </div>
    );

  return <ListSkeletons n={10} />;
};

export default Losers;
