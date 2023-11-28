import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box bg="teal.500" py={5} mb={5}>
      <Container maxW="container.xl">
        <HStack>
          <Heading bg="white" color="gray.800" pr={2} borderRadius="md">
            Network Call Practice
          </Heading>
          <Spacer />
          <Button as={Link} to="/" variant="ghost" color="white">
            Users
          </Button>
          <Button as={Link} to="/register" variant="ghost" color="white">
            Register
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
