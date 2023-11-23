import "./App.css";
import AutoFocusInput from "./AutoFocusInput";
import Counter from "./Counter";
import CounterActionable from "./CounterActionable";
import DeepComponent from "./DeepComponent";
import DisplayOddEvenNumber from "./DisplayOddEvenNumber";
import TitleChanger from "./TitleChanger";
import Todos from "./Todos";
import { Button, HStack, Text } from "@chakra-ui/react";
import useCounter from "./useCounter";

function App() {
  const { counter, increment, decrement } = useCounter(5);

  return (
    <>
      <HStack my={2}>
        <Button onClick={decrement}>-</Button>
        <Text>{counter}</Text>
        <Button onClick={increment}>+</Button>
      </HStack>

      <Counter />
      <TitleChanger />
      <AutoFocusInput />
      <DisplayOddEvenNumber />
      <DeepComponent />
      <CounterActionable />
      <Todos />
    </>
  );
}

export default App;
