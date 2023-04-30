
import { HStack, Image, Text, useMediaQuery, Box } from '@chakra-ui/react';
import introImage from "../../assets/intro-image.png"
import "./intro.css";

const Intro = () => {


  return (
    <Box    w={["320px", "375px", "425px", "768px", "1024px", "1440px"]}>
        <HStack  justifyContent="space-around">
            <div className="intro" >
                <Text className="introTextLarge"  color="#000" fontWeight="bold">
                    Learning How to Learn
                </Text>

                <Text
                    className="introTextMedium"
                    color="#000"
                    fontWeight="normal">
                    The most effective cutting-edge learning techniques that you can
                    apply in your daily life
                </Text>
            </div>
            <Image className="introImage" src={introImage} marginRight="10"  />

        </HStack>
    </Box>

)
};

export default Intro;


