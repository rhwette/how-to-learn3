import { Image, Text, Center, Box, Stack } from '@chakra-ui/react';
import kahanImage from '../../assets/khan-book-2.png';
import "../Intro/intro.css";

const Kahan = () => {
  return (
    <>
    <Box w="100%">
      <Text
        className="introTextLarge"
        textAlign="left"
        pt="25px"
        px="50px"
        color="#000"
        fontWeight="bold"
      >
        Salman Khan
      </Text>

      <Text
        className="introTextMedium"
        textAlign="left"
        pt="5px"
        px="50px"
        color="#000"
        fontWeight="bold"
      >
        The One World Schoolhouse

      </Text>

      <Text
        className="introTextMedium"
        textAlign="left"
        lineHeight={'100%'}
        pt="5px"
        px="100px"
        color="#000"
        fontWeight="normal"
      >
        Sal Khan's passion and innovation is transforming learning for millions
        of students worldwide. The One World Schoolhouse is a must-read for all
        who are committed to improving education so students everywhere can gain
        the skills and knowledge to be successful in school, careers and life.
      </Text>

        <Box maxWidth="250px" margin="auto">
          <Image src={kahanImage} w="100%" mt="25px" />
        </Box>
    </Box>
    </>


  );
};

export default Kahan;
