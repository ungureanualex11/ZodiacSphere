import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ChakraProvider,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const [navigationVisibility, setNavigationVisibility] = useState(false);
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const toggleNavigation = () => {
    setNavigationVisibility(!navigationVisibility);
  };
  const closeNavigation = () => {
    setNavigationVisibility(false);
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
        <Flex direction="row" justifyContent="space-between" align="center" > 
          <Link to="/" onClick={closeNavigation}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              h={{ base: "50px", sm: "60px", md: "70px", lg: "80px" }}
              style={{ filter: "invert(1)" }}
              _hover={{
                transform: "scale(1.14) rotate(360deg)",
                transition: "transform 0.6s",
              }}
              
            />
          </Link>


          <Image
            src={
              navigationVisibility
                ? "/images/hamburger_icon_close.png"
                : "/images/hamburger_icon_open.png"
            }
            alt="Menu icon"
            h={{ base: "30px",  sm: "50px"}}
            onClick={toggleNavigation}
            display={{ base: "block", lg: "none" }}
            m="5px"
            mt="10px"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.4s",
              cursor: "pointer",
            }}
          />
        </Flex>

        <Flex
          align="center"
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
        >
          {(navigationVisibility || isLargeScreen) && (
            <>
              <Link to="/" onClick={closeNavigation}>
                <Box
                  m="5px"
                  fontSize={{ base: "xs", sm: "md", md: "lg" ,lg:"xl"}}
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
                    transition: "transform 0.2s",
                  }}
                >
                  Home
                </Box>
              </Link>

              <Link to="/find-your-sign" onClick={closeNavigation}>
                <Box
                  m="5px"
                  fontSize={{ base: "xs", sm: "md", md: "lg" ,lg:"xl"}}
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
                    transition: "transform 0.2s",
                  }}
                >
                  Find your sign
                </Box>
              </Link>

              <Link to="/about-your-sign" onClick={closeNavigation}>
                <Box
                  m="5px"
                  fontSize={{ base: "xs", sm: "md", md: "lg" ,lg:"xl"}}
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
                    transition: "transform 0.2s",
                  }}
                >
                  About your sign
                </Box>
              </Link>

              <Link to="/compatibility" onClick={closeNavigation}>
                <Box
                  m="5px"
                  fontSize={{ base: "xs", sm: "md", md: "lg" ,lg:"xl"}}
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
                    transition: "transform 0.2s",
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
