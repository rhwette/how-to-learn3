import { Text, Image, Box } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <Box  w={["320px", "375px", "425px", "768px", "1024px", "1440px"]}>
      <Image m="30px" src={logo} boxSize="60px" />
    <Text textAlign={'left'} color="#D3D3D3" px="25px">
      &#169; 2023 rhwette
    </Text>
    </Box>
  );
};

export default Footer;


