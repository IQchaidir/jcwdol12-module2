/** @format */

import { Center, Button, Heading, Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ThemeUpdateContext } from "../App";

function HomePage() {
  const [counter, setCounter] = useState(0); //kalau berubah otomatis re-render
  let counter2 = 1000; // ga akan otomatis re-render
  //gimana caranya passing value antar component ?
  const change = useContext(ThemeUpdateContext);

  //   const [a, setA] = useState("abc");
  //   setA((prev) => {
  //     return (prev += "d");
  //   });
  return (
    <Center h={"100vh"} w={"100%"} flexDir={"column"} gap={"20px"}>
      <Button
        onClick={() =>
          change((darkTheme) => {
            return !darkTheme;
          })
        }
      >
        Change Theme
      </Button>
      <Flex gap={"10px"} w="100%" justifyContent={"center"}>
        <Center
          h="100%"
          maxW={"500px"}
          w="100%"
          gap={"10px"}
          flexDir={"column"}
        >
          <Heading>ini menggunakan state</Heading>
          <Flex gap={"10px"}>
            <Button onClick={() => setCounter(counter - 1)}>decrement</Button>
            <b>{counter}</b>
            <Button onClick={() => setCounter(counter + 1)}>increment</Button>
          </Flex>
        </Center>
        <Center
          h="100%"
          maxW={"500px"}
          w="100%"
          gap={"10px"}
          flexDir={"column"}
        >
          <Heading>tidak menggunakan state</Heading>
          <Flex gap={"10px"}>
            <Button
              onClick={() => {
                counter2--;
                console.log(counter2);
              }}
            >
              decrement
            </Button>
            <b>{counter2}</b>
            <Button
              onClick={() => {
                counter2++;
                console.log(counter2);
              }}
            >
              increment
            </Button>
          </Flex>
        </Center>
      </Flex>
    </Center>
  );
}
export default HomePage;
