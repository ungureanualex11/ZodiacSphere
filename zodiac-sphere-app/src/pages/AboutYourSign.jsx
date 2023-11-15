import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

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

  return (
    <Flex align="center" justify="center" h="100vh">
      {signs.map((sign,index) => (
        <Box
          key={index}
          position="absolute"
          transform={`rotate(${30 * index}deg) translate(200px) rotate(${
            -30 * index
          }deg) `}
        >
          <Image
            height="100px"
            src={`/images/signs/${sign}.png`}
            alt={`Image ${index}`}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default AboutYourSign;
