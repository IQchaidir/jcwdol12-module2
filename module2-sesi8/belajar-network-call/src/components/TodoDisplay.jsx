import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TodoDisplay() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/4")
      .then((res) => res.json())
      .then((json) => {
        setTodo(json);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <Box>
      <Text display="block">Title: {todo.title}</Text>
      <Text>{todo.completed ? "Completed" : "In Progress"}</Text>
    </Box>
  );
}
