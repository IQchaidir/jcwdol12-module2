import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import "./globals.css";
import { Providers } from "./provider";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
  title: "Ridho's Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxW="container.lg">
            <Box borderBottom={3} borderColor="gray.200" borderStyle="solid">
              <HStack
                py={{ sm: 10, base: 5 }}
                gap={2}
                flexDirection={{ sm: "row", base: "column" }}
              >
                <Box>
                  <Link href={"/"}>
                    <Image src="/next.svg" height={0} width={160} alt="logo" />
                  </Link>
                </Box>
                <Spacer />
                <Button
                  as="a"
                  href="https://github.com/ridhozhr10"
                  target="_blank"
                  rel="noreferrer"
                  leftIcon={<FaGithub />}
                  backgroundColor="black"
                  color="white"
                  _hover={{
                    backgroundColor: "gray.100",
                    color: "gray.500",
                  }}
                  borderRadius={0}
                  px={10}
                >
                  Github
                </Button>
              </HStack>
              <HStack
                gap={{ base: 2, sm: 5 }}
                pb={{ base: 2, sm: 10 }}
                flexDirection={{ sm: "row", base: "column" }}
              >
                <Image
                  src="/me.jpg"
                  alt="my photo was here"
                  width={75}
                  height={75}
                  id="profilePicture"
                />
                <Box>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text>
                    Morbi ornare volutpat varius. Nunc finibus velit porttitor,
                    finibus leo nec, egestas diam. Donec accumsan, lorem a
                    rhoncus scelerisque, nulla sem cursus mi, hendrerit
                    tristique diam erat eu dolor.
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box mt={5}>{children}</Box>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
