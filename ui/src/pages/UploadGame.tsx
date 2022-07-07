import {
  Divider,
  NumberInput,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
const UploadGame = () => {
  return (
    <Paper radius="md" p="xl" sx={{ maxWidth: 1200 }} mx="auto" withBorder>
      <Text size="lg" weight={500}>
        Upload Game
      </Text>
      <Divider my="lg" />
      <form>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput required label="Player 1" placeholder="John Doe" />
          <NumberInput
            required
            defaultValue={0}
            label="Score 1"
            placeholder="5"
          />
        </SimpleGrid>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput required label="Player 2" placeholder="Alex Doe" />
          <NumberInput
            required
            defaultValue={0}
            label="Score 2"
            placeholder="5"
          />
        </SimpleGrid>
      </form>
    </Paper>
  );
};

export default UploadGame;
