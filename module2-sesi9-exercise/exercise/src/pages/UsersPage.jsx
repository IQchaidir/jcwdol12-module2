import { Container, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function UsersPage() {
  const users = useSelector((state) => state.user.data);

  return (
    <Container maxW="container.lg">
      <Table colorScheme="teal" size="lg" variant="striped">
        <Thead>
          <Tr>
            <Th>Nama</Th>
            <Th>Email</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.password}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
