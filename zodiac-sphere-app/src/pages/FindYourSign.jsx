import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "../css/date_picker.css";
import DatePicker from "react-datepicker";
import {
  Flex,
  Image,
  Text,
  Box,
  ChakraProvider,
  Button,
  Center,
} from "@chakra-ui/react";
import { m } from "framer-motion";

const FindYourSign = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [zodiacSign, setZodiacSign] = useState(null);
  const [showError,setShowError]=useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const currentDate = new Date();

  const getZodiacSign = (day, month) => {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return "gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return "cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return "leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return "virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return "libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return "scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return "sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return "capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "aquarius";
    } else {
      return "pisces";
    }
  };
  const [showImage, setShowImage] = useState(false);
  const [age, setAge] = useState(null);

  const handleFindSignButton = () => {
    if (!selectedDate) {    
      setShowImage(false);
      setAge(null);
      setShowError(true);
      return;
    }
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1; //adjusted to 1-12 indexing
    const day = selectedDate.getDate();
    setZodiacSign(getZodiacSign(day, month));
    setShowImage(true);
    setShowError(false);
    //..calculate the exact age..//

    let calculatedAge = currentDate.getFullYear() - year; //calculate years

    //if the birthday hasn't happened yet, we have
    //to subtract one year from the initial age calculation
    if (
      currentDate.getMonth() + 1 < month ||
      (currentDate.getMonth() + 1 === month && currentDate.getDate() < day)
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  return (
    <ChakraProvider>
      <Flex flexDirection="column">
        <Text fontSize="xl" mb={4} align="center">
          Please select your birthday date
        </Text>

        <Center ml="20vw" mr="20vw" flexDirection="column">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            yearDropdownItemNumber={70}
            placeholderText=" Select birth date"
            scrollableYearDropdown
            maxDate={currentDate}
          />

          <Button mt="20px" ml="20px" onClick={handleFindSignButton}>
            Find Sign
          </Button>
        </Center>

        {showImage && (
          <Center>
            <Link to={`/${zodiacSign}`}>
              <Image
                marginTop="15vh"
                height="40vh"
                src={`/images/signs/${zodiacSign}.png`}
                _hover={{
                  transform: "scale(1.5)",
                  transition: "transform 0.2s",
                }}
              />
            </Link>
          </Center>
        )}

        {age !== null && ( // Rendering age if it's not null
          <Center>
            <Text textAlign="center" fontSize="xl" marginTop="10px">
              You are a {age} year old{" "}
              {zodiacSign.charAt(0).toUpperCase() + zodiacSign.slice(1)}.
            </Text>
          </Center>
        )}
         {showError && ( // Rendering the error message
          <Center>
            <Text textAlign="center" color="yellow" fontSize="xl" marginTop="20px">
            Please select a date to find your zodiac sign!
            </Text>
          </Center>
        )}
      </Flex>
    </ChakraProvider>
  );
};

export default FindYourSign;
