import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import { AppShell } from "@mantine/core";
import TopPlayers from "./pages/TopPlayers";
import UploadGame from "./pages/UploadGame";
import { HeaderMenu } from "./components/HeaderMenu";
import { NotFound } from "./pages/NotFound";
const links = [
  {
    link: "/players",
    label: "Top players",
  },
  {
    link: "/upload",
    label: "Upload Game Session",
  },
  {
    link: "/",
    label: "Game Playthroughs",
  },
];
function App() {
  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        header={<HeaderMenu links={links} />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.white,
          },
        })}
      >
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/players" element={<TopPlayers />} />
          <Route path="/upload" element={<UploadGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
