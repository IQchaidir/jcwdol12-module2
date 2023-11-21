import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Box minH="100vh" bgColor="gray.800" color="gray.100" py={10}>
        <Heading as="h1" textAlign="center" fontWeight="600" fontSize="3xl">
          Chores ToDo List
        </Heading>
        <Container pb={3} maxW="2xl">
          <HStack pt={3}>
            <Checkbox colorScheme="green" borderColor="green" />
            <Text width="full">item 1</Text>
            <Button variant="outline" colorScheme="red" p={1}>
              <DeleteIcon />
            </Button>
          </HStack>
          <HStack pt={3}>
            <Checkbox colorScheme="green" borderColor="green" />
            <Text width="full">item 1</Text>
            <Button variant="outline" colorScheme="red" p={1}>
              <DeleteIcon />
            </Button>
          </HStack>
        </Container>
        <Box borderColor="gray.600" borderStyle="solid" borderTopWidth={1} />
        <Container maxW="2xl">
          <Heading
            as="h2"
            textAlign="center"
            fontWeight="600"
            fontSize="3xl"
            mt={3}
            mb={5}
          >
            Done: 0
          </Heading>
          <FormControl>
            <FormLabel>Add Todo</FormLabel>
            <Input />
          </FormControl>
          <Button colorScheme="blue" variant="solid" mt={2}>
            ADD TASK
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default App;
