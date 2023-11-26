/** @format */

import { Flex, Box, Button, Link, Switch, Center } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "../App";
import { useSelector } from "react-redux";

function NavbarComponent() {
  const darkTheme = useContext(ThemeContext); //use context artinya menarik value dari context tertentu(context yang membungkus component 'navbar')
  const counterSelector = useSelector((state) => state.counter.value);
  const counterSelector2 = useSelector((state) => state.counter2.value);

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
  };
  return (
    <Flex
      padding={"10px"}
      justifyContent={"center"}
      w="100%"
      style={themeStyle}
    >
      <Flex maxW={"1200px"} justifyContent={"space-between"} w="100%">
        <Link href="/" textDecoration={"none"}>
          <Box fontWeight={"800"} fontSize={"1.5rem"}>
            Navbar. {counterSelector} {counterSelector2}
          </Box>
        </Link>

        <Flex gap={"10px"}>
          <Button>Login</Button>
          <Button>Register</Button>
          <DarkModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
}

function DarkModeSwitcher() {
  const setDarkTheme = useContext(ThemeUpdateContext);

  return (
    <Center>
      <Switch onChange={(e) => setDarkTheme(e.target.checked)} />
    </Center>
  );
}

export default NavbarComponent;

//HOC Provider
