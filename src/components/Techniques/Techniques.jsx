import { Image, Grid, Box, Text, Center } from '@chakra-ui/react';
import techImage1 from '../../assets/learning-techniques-book.png';
import techImage2 from '../../assets/learning-techniques-competence.png';
import techImage3 from '../../assets/learning-techniques-interleaving.png';
import techImage4 from '../../assets/learning-techniques-question.png';
import techImage5 from '../../assets/learning-techniques-recall.png';
import "../Intro/intro.css";

const Techniques = () => {
  return (
    <Box    w={["320px", "375px", "425px", "768px", "1024px", "1440px"]}>
      <Text className="introTextLarge" 
        textAlign="center"
        px="50px"
        color="#000"
        fontWeight="bold"
      >
        Learning Techniques
      </Text>

      <Text
        className="introTextMedium" 
        textAlign="center"
        px="50px"
        color="#000"
        fontWeight="normal"
      >
        Five Strategies from Barbara Oakley
      </Text>

      <Center>
        <Grid className="techniques"

        >
          <Box className="introTextMedium"  padding="4">
            <Image src={techImage1} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000"  fontWeight="bold" paddingLeft={"5px"}>
              Two Ways of Thinking
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontWeight="normal"
              paddingLeft={"10px"}
            >
              Deep understanding comes from being able to toggle back and forth
              between focused and diffused thinking.
            </Text>
          </Box>

          <Box className="introTextMedium"  padding="4">
            <Image src={techImage2} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000" fontWeight="bold" paddingLeft={"5px"}>
              Illusion of Competence
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontWeight="normal"
              paddingLeft={"10px"}
            >
              Test yourself, write it down, tell other people, and repeat the
              process in different settings. Only then can you be truly certain
              you've understood something.
            </Text>
          </Box>

          <Box className="introTextMedium"  padding="4">
            <Image src={techImage3} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000"  fontWeight="bold" paddingLeft={"5px"}>
              Interleaving
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontWeight="normal"
              paddingLeft={"10px"}
            >
              When you learn multiple skills at the same time, they reinforce
              each other.
            </Text>
          </Box>

          <Box className="introTextMedium"  padding="4">
            <Image src={techImage4} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000"  fontWeight="bold" paddingLeft={"5px"}>
              Questions
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontWeight="normal"
              paddingLeft={"10px"}
            >
              When listening to your teacher, think up a good question,
              something that you're really itching to know.
            </Text>
          </Box>

          <Box className="introTextMedium"  padding="4">
            <Image src={techImage5} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000"  fontWeight="bold" paddingLeft={"5px"}>
              Recall
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontWeight="normal"
              paddingLeft={"10px"}
            >
              Improving your ability to remember key bits of information helps
              to connect different part of the brain.
            </Text>
          </Box>

        </Grid>
      </Center>
    </Box>
  );
};

export default Techniques;
