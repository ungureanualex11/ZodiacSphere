import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ChakraProvider,
  Container,
  Center,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const sidebarRef = useRef(null); //used later in sidebar Flex to reffer

  const toggleSidebar = () => {
    setSidebarVisibility(!sidebarVisibility);
  };
  const closeSidebar = () => {
    setSidebarVisibility(false);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setSidebarVisibility(false);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Clicked outside the sidebar
        setSidebarVisibility(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ChakraProvider>
      {!sidebarVisibility && (
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
          {/* Top menu content */}
          <Flex direction="row" justifyContent="space-between" align="center">
            <Link to="/" onClick={closeSidebar}>
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
              src="/images/hamburger_icon_open.png"
              alt="Menu icon"
              h={{ base: "30px", sm: "50px" }}
              onClick={toggleSidebar}
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

          <Flex align="center" justifyContent="space-between">
            {isLargeScreen && (
              <>
                <Link to="/" onClick={closeSidebar}>
                  <Box
                    m="5px"
                    fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
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

                <Link to="/find-your-sign" onClick={closeSidebar}>
                  <Box
                    m="5px"
                    fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
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

                <Link to="/about-your-sign" onClick={closeSidebar}>
                  <Box
                    m="5px"
                    fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
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

                <Link to="/compatibility" onClick={closeSidebar}>
                  <Box
                    m="5px"
                    fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
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
      )}
      {sidebarVisibility && (
        <Flex
          paddingTop="17%"
          paddingRight="5%"
          paddingLeft="5%"
          paddingBottom="20%"
          borderRight="2px solid #a3abc9"
          ref={sidebarRef}
          direction="column"
          justifyContent="space-between"
          bg="#141d39"
          width="75%"
          height="100vh"
          position="fixed"
          top="0"
          left="0"
          zIndex="999"
        >
          {/* Sidebar content */}
          <Box>
          <Link to="/" onClick={closeSidebar}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop="3%"
              m="5px"
              fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
              borderWidth="2px"
              borderColor="#a3abc9"
              borderRadius="2xl"
              color="#e6ebff"
              p="8px"
              _hover={{
                bgColor: "#141d50",
                transform: "scale(1.1)",
                transition: "transform 0.2s",
              }}
            >
              Home
            </Box>
          </Link>

          <Link to="/find-your-sign" onClick={closeSidebar}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              m="5px"
              marginTop="3%"
              fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
              borderWidth="2px"
              borderColor="#a3abc9"
              borderRadius="2xl"
              color="#e6ebff"
              p="8px"
              _hover={{
                bgColor: "#141d50",
                transform: "scale(1.1)",
                transition: "transform 0.2s",
              }}
            >
              Find your sign
            </Box>
          </Link>

          <Link to="/about-your-sign" onClick={closeSidebar}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              m="5px"
              marginTop="3%"
              fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
              borderWidth="2px"
              borderColor="#a3abc9"
              borderRadius="2xl"
              color="#e6ebff"
              p="8px"
              _hover={{
                bgColor: "#141d50",
                transform: "scale(1.1)",
                transition: "transform 0.2s",
              }}
            >
              About your sign
            </Box>
          </Link>

          <Link to="/compatibility" onClick={closeSidebar}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              m="5px"
              marginTop="3%"
              fontSize={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
              borderWidth="2px"
              borderColor="#a3abc9"
              borderRadius="2xl"
              color="#e6ebff"
              p="8px"
              _hover={{
                bgColor: "#141d50",
                transform: "scale(1.1)",
                transition: "transform 0.2s",
              }}
            >
              Compatibility
            </Box>
          </Link>
          </Box>
          <Image
            src="/images/logo.png"
            alt="Logo"
            h="15%"
            style={{ filter: "invert(1)" }}
            objectFit="contain"
            _hover={{
              transform: "scale(1.14) rotate(360deg)",
              transition: "transform 0.6s",
            }}
          />
        </Flex>
      )}
    </ChakraProvider>
  );
};

export default Navbar;
