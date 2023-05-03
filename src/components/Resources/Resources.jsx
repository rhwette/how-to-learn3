import { Text, Center, Image, Grid, Box } from '@chakra-ui/react';
import resourceImageA from '../../assets/resources-tedED.png';
import resourceImageB from '../../assets/resources-Medium.png';
import resourceImageC from '../../assets/resources-dezeen.png';
import resourceImageD from '../../assets/resources-goodreads.png';
import "../Intro/intro.css";
import "./Resources.css";

const Resources = () => {
  return (
    <>
      <Center>
        <Text
          className="introTextLarge"
          textAlign="center"
          pt="50px"
          px="50px"
          color="black"
          fontWeight="bold"
        >
          Useful Resources
        </Text>
      </Center>

      <Center>
        <Text
          className="introTextMedium"
          textAlign="center"
          px="50px"
          pb="20px"
          color="black"
          fontWeight="bold"
        >
          Further materials on learning techniques and hacks
        </Text>
      </Center>

      <Box display={"flex"} justifyContent={"Center"} pb="100px">
        <Grid className="resourceItems">
            <Image src={resourceImageA} maxW="300px" marginLeft="20px" marginRight="20px" pb="40px" />
            <Image src={resourceImageB} maxW="300px" marginLeft="20px" marginRight="20px" pb="40px" />
            <Image src={resourceImageC} maxW="300px" marginLeft="20px" marginRight="20px" pb="40px" />
            <Image src={resourceImageD} maxW="300px" marginLeft="20px" marginRight="20px" pb="40px" />
        </Grid>
      </Box> 

    </>
  );
};

export default Resources;
