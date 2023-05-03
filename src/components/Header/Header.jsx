import { HStack, Image, Text, Box } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Box >
      <HStack justify="space-between" w="100%" >
        <Image m="10px" src={logo} boxSize="60px" />
      </HStack>
    </Box>
  );
};

export default Header;


