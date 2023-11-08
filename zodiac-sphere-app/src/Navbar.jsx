import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="#141d39" p={1.5} color="white" mb="5" position="fixed" width="100%">
      <Flex>
      <Box ml="10">
      <Link to="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          h="20"
          style={{ filter: "invert(1)" }}
        />
        </Link>
      </Box>
      <Flex  align="center" justifyContent="space-around" flex="1" mr="10">
        <Link to="/" fontSize="xl">
          Home
        </Link>
        <Link to="/find-your-sign" fontSize="xl">
          Find your sign
        </Link>
        <Link to="/about-your-sign" fontSize="xl">
          About your sign
        </Link>
        <Link to="/compatibility" fontSize="xl">
          Compatibility
        </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
