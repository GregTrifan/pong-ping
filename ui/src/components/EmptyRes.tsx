import { Container, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const EmptyRes = () => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Title>Hmm, looks like there are no items on there</Title>
      <Title order={3}>
        Maybe try <Link to="/upload">adding some game matches</Link>?
      </Title>
    </Container>
  );
};

export default EmptyRes;
