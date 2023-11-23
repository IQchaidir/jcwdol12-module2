/* eslint-disable react/prop-types */
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

const UserContext = createContext({ name: "", age: 0 });

export default function DeepComponent() {
  const [user, setUser] = useState({ name: "ridho", age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Container mt={5}>
        <Component1 />
      </Container>
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <Box>
      <Heading>Data User:</Heading>
      <Component2 />
    </Box>
  );
}

function Component2() {
  const { user, setUser } = useContext(UserContext);

  const handleClearUser = () => {
    setUser({ name: "", age: 0 });
  };

  return (
    <Box>
      <Text>{user.name}</Text>
      <Text>{user.age}</Text>

      <Button onClick={handleClearUser}>Clear User</Button>
    </Box>
  );
}
