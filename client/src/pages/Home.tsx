import React from "react";
import { Center, VStack, Text, Button, Divider, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Center>
      <Box mt={"20"}>
        <VStack>
          <Text as={"b"} fontSize={"6xl"}>
            Hangman
          </Text>
          <Text fontSize={"xl"}>
            play solo or with friends! (in the future)
          </Text>
        </VStack>
        <VStack mt={"40px"} spacing={"15px"}>
          <Link to="/multiplayer">
            <Button
              colorScheme={"purple"}
              size={"md"}
              variant={"solid"}
              w={"400px"}
            >
              Play with friends
            </Button>
          </Link>
          <Link to="/singleplayer">
            <Button
              colorScheme={"purple"}
              size={"md"}
              variant={"outline"}
              w={"400px"}
            >
              Play solo
            </Button>
          </Link>
        </VStack>
      </Box>
    </Center>
  );
};

export default Home;
