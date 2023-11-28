import { Container, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const resp = await axiosInstance.get("/users");
    setUsers(resp.data);
  };

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
