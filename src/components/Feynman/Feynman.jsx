import { Image, Text, Center, Box } from '@chakra-ui/react';
import feynmanImage from '../../assets/feynman.png';
import "../Intro/intro.css";

const Feynman = () => {
  return (
    <Center>
      <Box pt="100px" >
        <Image src={feynmanImage} />
        <Text
          className="introTextLarge" 
          textAlign="center"
          pt="50px"
          px="50px"
          color="#000"
          fontWeight="bold"
        >
          The Feynman Technique
        </Text>
        <Text
          className="introTextMedium"
          textAlign="center"
          px="50px"
          color="#000"
          fontWeight="normal"
        >
          Learn without forgetting
        </Text>
      </Box>
    </Center>
  );
};

export default Feynman;
