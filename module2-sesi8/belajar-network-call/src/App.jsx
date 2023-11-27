import "./App.css";
import { Container, Heading } from "@chakra-ui/react";
import TodoDisplay from "./components/TodoDisplay";
import HeroesDisplay from "./components/HeroesDisplay";

function App() {
  return (
    <>
      <Container>
        <Heading>Network Call</Heading>

        <TodoDisplay />

        <HeroesDisplay />
      </Container>
    </>
  );
}

export default App;
