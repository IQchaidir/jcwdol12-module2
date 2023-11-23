/* eslint-disable react/prop-types */
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";

function TodosDisplay(props) {
  console.log("render on todos display");
  return (
    <Box>
      {props.todoList.map((todo, index) => {
        return (
          <Box key={`todo-${index}`}>
            {index + 1}. {todo}
          </Box>
        );
      })}
      <Button onClick={props.addTodo}>Add Todo</Button>
    </Box>
  );
}

const TodosDisplayComponent = memo(TodosDisplay);

function Pulu() {
  console.log("pulu re rendered");
  return <Box>Helo</Box>;
}

const PuluComponent = memo(Pulu);

export default function Todos() {
  const [todoList, setTodoList] = useState(["nyuci", "strika"]);
  const [counter, setCounter] = useState(2);

  const handleAddTodo = useCallback(() => {
    setTodoList([...todoList, "new Todo"]);
  }, [todoList]);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <Container mt={5}>
      <Heading onClick={handleAddCounter}>Todo: {counter}</Heading>
      <TodosDisplayComponent todoList={todoList} addTodo={handleAddTodo} />
      <PuluComponent />
    </Container>
  );
}
