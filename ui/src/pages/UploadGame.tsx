import {
  Button,
  Divider,
  Group,
  NumberInput,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { GameForm } from "../types/Game";
import { uploadGame } from "../services/uploadGame";
const UploadGame = () => {
  const form = useForm({
    initialValues: {
      player1: "",
      player2: "",
      score1: 0,
      score2: 0,
    },
    validationRules: {
      player1: (val) => val.length >= 3,
      player2: (val) => val.length >= 3,
      score1: (val) => val >= 0,
      score2: (val) => val >= 0,
    },
  });
  return (
    <Paper radius="md" p="xl" sx={{ maxWidth: 900 }} mx="auto" withBorder>
      <Text size="lg" weight={500}>
        Upload Game
      </Text>
      <Divider my="lg" />
      <form
        onSubmit={form.onSubmit((submission: GameForm) => {
          uploadGame(submission);
        })}
      >
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput
            value={form.values.player1}
            required
            label="Player 1"
            onChange={(e) =>
              form.setFieldValue("player1", e.currentTarget.value)
            }
            error={
              form.errors.player1 &&
              "Player name should have at least 3 characters"
            }
            placeholder="John Doe"
          />
          <NumberInput
            required
            value={form.values.score1}
            onChange={(e) => form.setFieldValue("score1", e ?? 0)}
            label="Score 1"
            error={form.errors.score1 && "Value should be at least 0"}
            placeholder="5"
          />
        </SimpleGrid>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput
            required
            value={form.values.player2}
            label="Player 2"
            onChange={(e) =>
              form.setFieldValue("player2", e.currentTarget.value)
            }
            error={
              form.errors.player2 &&
              "Player name should have at least 3 characters"
            }
            placeholder="Alex Doe"
          />
          <NumberInput
            required
            value={form.values.score2}
            onChange={(e) => form.setFieldValue("score2", e ?? 0)}
            error={form.errors.score2 && "Value should be at least 0"}
            label="Score 2"
            placeholder="5"
          />
        </SimpleGrid>
        <Group position="right" mt="md">
          <Button color="teal" radius="lg" type="submit">
            Upload Game Match
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default UploadGame;
