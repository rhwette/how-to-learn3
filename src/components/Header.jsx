import { HStack, Image, Text, Box } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Box bg="blue">
      <HStack justify="space-between" w="100%" >
        <Image m="10px" src={logo} boxSize="60px" />
        <Text >  header right side</Text>
      </HStack>
    </Box>
  );
};

export default Header;


