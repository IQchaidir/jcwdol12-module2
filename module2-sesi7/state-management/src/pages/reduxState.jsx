/** @format */
import { Center, Button, Heading, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../constant/constant";
import { actionDecrement, actionIncrement } from "../redux/slices/counterSlice";

function ReduxState() {
  const counterSelector = useSelector((state) => state.counter.value);
  const counterSelector2 = useSelector((state) => state.counter2);

  const dispatch = useDispatch();

  const fDecrement = () => dispatch({ type: decrement });
  const fIncrement = () => dispatch({ type: increment });

  const fDecrement2 = () => dispatch(actionDecrement());
  const fIncrement2 = () => dispatch(actionIncrement());

  return (
    <>
      <Center w={"100%"} h={"100vh"}>
        <Center
          h="100%"
          maxW={"500px"}
          w="100%"
          gap={"10px"}
          flexDir={"column"}
        >
          <Heading style={{ textAlign: "center" }}>redux reducer</Heading>
          <Flex gap={"10px"}>
            <Button onClick={fDecrement}>decrement</Button>
            <b>{counterSelector}</b>
            <Button onClick={fIncrement}>increment</Button>
          </Flex>
        </Center>

        <Center
          h="100%"
          maxW={"500px"}
          w="100%"
          gap={"10px"}
          flexDir={"column"}
        >
          <Heading style={{ textAlign: "center" }}>redux slice</Heading>
          <Flex gap={"10px"}>
            <Button onClick={fDecrement2}>decrement</Button>
            <b>{counterSelector2?.value}</b>
            <Button onClick={fIncrement2}>increment</Button>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
export default ReduxState;
