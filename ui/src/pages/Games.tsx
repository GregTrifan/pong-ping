import { Button, Center, Text, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { ArrowBigDown } from "tabler-icons-react";
import EmptyRes from "../components/EmptyRes";
import GamesContainer from "../components/Games/GamesContainer";
import ListSkeletons from "../components/ListSkeletons";
import { useLazyListGamesQuery } from "../services/pong";
import { Game } from "../types/Game";

const Games = () => {
  const shouldReset = useRef(true);
  const [results, setResults] = useState<Array<Game>>([]);
  const [trigger, result] = useLazyListGamesQuery();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    trigger("1").then(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!result.isSuccess) return;
    if (shouldReset.current) {
      shouldReset.current = false;
      setResults(result.data.items);
    } else {
      setResults([...results, ...result.data.items]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.data]);
  if (isLoading) return <ListSkeletons n={40} />;
  if (results.length !== 0)
    return (
      <div>
        <Title align="center">Previous Matches</Title>
        <GamesContainer games={results} />
        <Center my={20}>
          <Button
            onClick={() => {
              if (result.data) {
                trigger(result.data.lastItem);
              }
            }}
            loading={result.isLoading}
            disabled={result.isError}
            radius="lg"
            mx={10}
          >
            <Text mx={2}>Load More</Text> <ArrowBigDown />
          </Button>
        </Center>
      </div>
    );
  return <EmptyRes />;
};

export default Games;
