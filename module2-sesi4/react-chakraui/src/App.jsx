import { Box, Heading } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Box bg="yellow.200" py={10} textAlign="center">
        <Heading mb={5} textColor="gray.600">
          Purwadhika
        </Heading>
        <Heading textColor="gray.500">Web Development</Heading>
      </Box>
    </>
  );
}

export default App;
