import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../css/date_picker.css"
import DatePicker from "react-datepicker";
import { Flex, Image,Text, Box,ChakraProvider, Button, Center } from "@chakra-ui/react";

const FindYourSign = () => {
  
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const currentDate = new Date();
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
          placeholderText="Select birth date"
          scrollableYearDropdown
          maxDate={currentDate}
  
        />

        <Button mt="20px" ml="20px">Find Sign</Button>
        </Center>
      
      </Flex>
    </ChakraProvider>
  );
};

export default FindYourSign;