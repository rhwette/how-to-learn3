import { HStack, Image, Text, Box } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Box   w={["320px", "375px", "425px", "768px", "1024px", "1440px"]}>
    <HStack justify="space-between">
      <Image m="10px" src={logo} boxSize="60px" />
      {/* <Text pr="10px">  header right side</Text> */}
    </HStack>
    </Box>
  );
};

export default Header;
