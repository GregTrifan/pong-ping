import { Popover, Title, Group, Text } from "@mantine/core";
import { useState } from "react";
import { useGetPlayerByNameQuery } from "../../services/pong";
import ListSkeletons from "../ListSkeletons";

interface PlayerOverviewProps {
  name: string;
}
const PlayerOverview = ({ name }: PlayerOverviewProps) => {
  const [opened, setOpened] = useState(false);
  const { data: playerData } = useGetPlayerByNameQuery(name);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="center"
      trapFocus={false}
      closeOnEscape={false}
      transition="pop-top-left"
      width={260}
      styles={{ body: { pointerEvents: "none" } }}
      target={
        <Text
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
          size="md"
          weight={500}
        >
          {name}
        </Text>
      }
    >
      <div style={{ textAlign: "center" }}>
        <Title order={4} mb={4}>
          User Stats
        </Title>
        {playerData ? (
          <Group grow>
            <Text>
              <b>{playerData?.wins}</b> wins
            </Text>
            <Text>
              <b>{playerData?.losses}</b> losses
            </Text>
          </Group>
        ) : (
          <ListSkeletons n={3} />
        )}
      </div>
    </Popover>
  );
};

export default PlayerOverview;
