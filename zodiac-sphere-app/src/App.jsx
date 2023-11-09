import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import FindYourSign from "./pages/FindYourSign";
import AboutYourSign from "./pages/AboutYourSign";
import Compatibility from "./pages/Compatibility";
import Footer from "./Footer";

function App() {
  return (
    <ChakraProvider>
      <Router>
      <Navbar />
        <Box
          pt={{ base: "370px", lg: "94px" }}
          bgImage="url('images/background.jpg')"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          width="100%"
          minHeight="100vh"
        >
          <Box bg={`rgba(20, 29, 40, 0.8)`} color="white"  pt="20px" pb="20px" pl="5" pr="5" ml="6%" mr="6%" minHeight="100vh">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-your-sign" element={<FindYourSign />} />
              <Route path="/about-your-sign" element={<AboutYourSign />} />
              <Route path="/compatibility" element={<Compatibility />} />
            </Routes>
          </Box>
        </Box>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
