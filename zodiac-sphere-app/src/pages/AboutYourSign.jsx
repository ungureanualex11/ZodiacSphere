import React, { useEffect, useState } from "react";
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
  const [translationValue, setTranslationValue] = useState(
    Math.min((40 * window.innerWidth) / 100, (40 * window.innerHeight) / 100)
  );
  const handleResize = () => {
    if (window.innerWidth > 850)
      setTranslationValue(
        Math.min(
          (40 * window.innerWidth) / 100,
          (35 * window.innerHeight) / 100
        )
      );
    else
      setTranslationValue(
        Math.min(
          (40 * window.innerWidth) / 100,
          (35 * window.innerHeight) / 100
        ) - 35
      );
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Flex align="center" justify="center" h="100vh">
      {signs.map((sign, index) => (
        <Box
          key={index}
          position="absolute"
          transform={`rotate(${
            30 * index
          }deg) translate(${translationValue}px) rotate(${-30 * index}deg) `}
        >
          <Image
            height={{ base: "40px", sm: "50px", md:"80px", lg: "100px", xl:"130" }}
            src={`/images/signs/${sign}.png`}
            alt={`Image ${index}`}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default AboutYourSign;
