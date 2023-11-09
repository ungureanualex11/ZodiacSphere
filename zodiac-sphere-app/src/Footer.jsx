import React from "react";
import { ChakraProvider, Heading, Box, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <ChakraProvider>
      <Box height="1px" bgColor="#a3abc9"></Box>
      <Box bg="#141d39" p={3} color="white">
        <Box>© for this Website: <b>Alex Ungureanu - {year}</b></Box>

        <Box>
          © for Background image: &nbsp;
          <Link
            href="https://pngtree.com/freebackground/constellations-blue-red-galaxy_1371913.html?sol=downref&id=bef"
            isExternal // Opens the link in a new tab
          >
            Constellations Blue Red Galaxy Background
          </Link>
        </Box>
        <Box>
          © for Zodiac signs art: &nbsp;
          <Link
            href="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Zodiac-PNG/Transparent_Zodiac_Signs_Set_PNG_Image.png?m=1507172106"
            isExternal // Opens the link in a new tab
          >
            Transparent Zodiac Signs Set PNG Image
          </Link>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
