/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Text, ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AboutYourSign = () => {
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  const calculateTranslationValue = () => {
    if (window.innerWidth > 850) {
      return Math.min(
        (40 * window.innerWidth) / 100,
        (35 * window.innerHeight) / 100
      );
    } else {
      return (
        Math.min(
          (40 * window.innerWidth) / 100,
          (35 * window.innerHeight) / 100
        ) - 35
      );
    }
  };

  const [translationValue, setTranslationValue] = useState(
    calculateTranslationValue
  );

  const handleResize = () => setTranslationValue(calculateTranslationValue);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ChakraProvider>
    <Flex align="center" justify="center" h="100vh">
      <Flex align="center" justify="center" h="100vh">
        <Text
        fontFamily="Optima"
        fontSize={{
          base: "10px",
          sm: "25px",
          md: "30px",
          lg: "35px",
          xl: "40px",
        }}
        >
          Select your sign
          </Text>
      </Flex>
      {signs.map((sign, index) => (
        <Box
          key={index}
          position="absolute"
          transform={`rotate(${
            30 * index
          }deg) translate(${translationValue}px) rotate(${-30 * index}deg) `}
        >
          <Link to={`/${sign}`}>
            <Image
              height={{
                base: "40px",
                sm: "50px",
                md: "80px",
                lg: "100px",
                xl: "130px",
              }}
              src={`/images/signs/${sign}.png`}
              alt={`Image ${index}`}
              _hover={{
                transform: "scale(1.5)",
                transition: "transform 0.2s",
              }}
            />
          </Link>
        </Box>
      ))}
    </Flex>
    <Flex align="center" justify="center">
      <Text fontSize={{
          base: "5px",
          sm: "10px",
          md: "15px",
          lg: "20px",
          xl: "25px",
        }}>
        If you don't know your sign, press {" "}
        <Link to="/find-your-sign">
          HERE.
        </Link>
      </Text>
    </Flex>
    </ChakraProvider>
  );
};

export default AboutYourSign;
