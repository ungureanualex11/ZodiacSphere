import React from "react";
import { Link } from "react-router-dom";
import { Box, ChakraProvider, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <ChakraProvider>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justifyContent="space-around"
        bg="#141d39"
        p="6px"
        position={{base:"absolute",lg:"fixed"}}
        width="100%"
        zIndex="1"
      >
        <Link to="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            h="80px"
            style={{ filter: "invert(1)" }}
            _hover={{
              transform: "scale(1.14) rotate(360deg)",
              transition: "transform 0.7s",
            }}
          />
        </Link>

        <Link to="/">
          <Box
            m="5px"
            mt="10px"
            fontSize="xl"
            borderWidth="2px"
            borderColor="#a3abc9"
            borderRadius="2xl"
            color="#e6ebff"
            p="12px"
            pl="25px"
            pr="25px"
            _hover={{
              bgColor: "#141d50",
              transform: "scale(1.1)",
              transition: "transform 0.4s",
            }}
          >
            Home
          </Box>
        </Link>

        <Link to="/find-your-sign">
          <Box
          m="5px"
            fontSize="xl"
            borderWidth="2px"
            borderColor="#a3abc9"
            borderRadius="2xl"
            color="#e6ebff"
            p="12px"
            pl="25px"
            pr="25px"
            _hover={{
              bgColor: "#141d50",
              transform: "scale(1.1)",
              transition: "transform 0.4s",
            }}
          >
            Find your sign
          </Box>
        </Link>

        <Link to="/about-your-sign">
          <Box
          m="5px"
            fontSize="xl"
            borderWidth="2px"
            borderColor="#a3abc9"
            borderRadius="2xl"
            color="#e6ebff"
            p="12px"
            pl="25px"
            pr="25px"
            _hover={{
              bgColor: "#141d50",
              transform: "scale(1.1)",
              transition: "transform 0.4s",
            }}
          >
            About your sign
          </Box>
        </Link>

        <Link to="/compatibility">
          <Box
          m="5px"
            fontSize="xl"
            borderWidth="2px"
            borderColor="#a3abc9"
            borderRadius="2xl"
            color="#e6ebff"
            p="12px"
            pl="25px"
            pr="25px"
            _hover={{
              bgColor: "#141d50",
              transform: "scale(1.1)",
              transition: "transform 0.4s",
            }}
          >
            Compatibility
          </Box>
        </Link>
      </Flex>

      <Box
        height={{ base: "370px", lg: "94px" }}
        bgColor="#a3abc9"
        width="100%"
        position={{base:"absolute",lg:"fixed"}}
        zIndex="0"
      ></Box>
    </ChakraProvider>
  );
};

export default Navbar;
