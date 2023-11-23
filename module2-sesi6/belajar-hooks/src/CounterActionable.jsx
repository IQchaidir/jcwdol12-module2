import { Button, Container, HStack, Text } from "@chakra-ui/react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { ...state, counter: 0 };
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "addAmount":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
}

export default function CounterActionable() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const handleIncrement = () => dispatch({ type: "increment" });

  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleReset = () => dispatch({ type: "reset" });

  const handleAdd5 = () => dispatch({ type: "addAmount", payload: 5 });

  return (
    <Container mt={5}>
      <HStack>
        <Button onClick={handleDecrement} colorScheme="red">
          -
        </Button>
        <Text w="full" textAlign="center">
          {state.counter}
        </Text>
        <Button onClick={handleIncrement} colorScheme="green">
          +
        </Button>
        <Button onClick={handleAdd5} colorScheme="green">
          +5
        </Button>
      </HStack>
      <Button onClick={handleReset} w="full">
        Reset
      </Button>
    </Container>
  );
}
