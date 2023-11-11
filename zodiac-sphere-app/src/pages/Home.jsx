import React from "react";
import { ChakraProvider, Box, Heading, Image, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Heading> Homeee </Heading>
      <Heading> Homeee </Heading>
      <Heading> Homeee </Heading>
      <Heading> Homeee </Heading>
      <Heading> Homeee </Heading>

      <Flex justifyContent="space-around">
        <Image
          src="/images/signs/scorpio.png"
          alt="Logo"
          h="200px"
          _hover={{
            transform: "scale(20) translateY(200px) translateX(300px) rotate(600deg)",
            transition: "transform 10s",
          }}
        />
        <Image
          src="/images/signs/leo.png"
          alt="Logo"
          h="200px"
          _hover={{
            transform: "scale(10)",
            transition: "transform 2s",
          }}
        />
      </Flex>
    </Box>
  );
};

export default Home;
