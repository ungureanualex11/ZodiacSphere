import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ChakraProvider,
  Flex,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const [navigationVisibility, setNavigationVisibility] = useState(false);
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const toggleNavigation = () => {
    setNavigationVisibility(!navigationVisibility);
  };

  return (
    <ChakraProvider>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-around"
        bg="#141d39"
        p="6px"
        top="0px"
        position="sticky"
        width="100%"
        borderBottom="2px solid #a3abc9"
        zIndex="1000"
      >
        <Flex direction="row" justifyContent="space-around" align="center">
          <Link to="/" onClick={toggleNavigation}>
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

          <Button
            onClick={toggleNavigation}
            display={{ base: "block", lg: "none" }}
            bgColor="#141D39"
            m="5px"
            mt="10px"
            fontSize="xl"
            borderWidth="2px"
            borderColor="#a3abc9"
            borderRadius="2xl"
            color="#e6ebff"
            _hover={{
              bgColor: "#141d50",
              transform: "scale(1.1)",
              transition: "transform 0.4s",
            }}
          >
            {navigationVisibility ? "Hide Navigation" : "Show Navigation"}
          </Button>
        </Flex>

        <Flex align="center"  direction={{ base: "column", lg: "row" }}  justifyContent="space-between" >
        {(navigationVisibility || isLargeScreen) && (
          <>
            <Link to="/" onClick={toggleNavigation}>
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
                Home
              </Box>
            </Link>

            <Link to="/find-your-sign" onClick={toggleNavigation}>
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

            <Link to="/about-your-sign" onClick={toggleNavigation}>
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

            <Link to="/compatibility" onClick={toggleNavigation}>
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
          </>
        )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
