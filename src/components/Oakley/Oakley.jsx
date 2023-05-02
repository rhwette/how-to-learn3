import { Text, Flex, Box, HStack } from '@chakra-ui/react';
import "../Intro/intro.css";

const Oakley = () => {
  return (
      <Box w="100%" >
        <HStack  justifyContent="space-between">
            <Box alignSelf="flex-start" pt="30px">
                <Text
                  className="introTextLarge" 
                  textAlign="left"
                  px="50px"
                  color="#000"
                  fontWeight="bold"
                >
                  Barbara Oakley's story.
                </Text>
            </Box>

            <Box alignSelf="flex-start" pt="40px">
              <Text className="introTextMedium"
                textAlign="left"
                color="#000"
                fontWeight="normal"
                pb="20px"
              >
                Math didn't come naturally to Barbara in childhood. She thought of
                herself as more of a humanities person, and not a brilliant one at
                that. With an eye to becoming a linguist, after school she enlisted in
                the army, who sent her to learn Russian. After several years of
                service, during which she rose to the rank of Captain, Barbara left
                the army and decided to study engineering. In was during this time
                that she developed her learning methodology as she was forced to
                reprogram her brain for a different kind of learning. It turns out
                that when something doesn't come naturally to you, having to work hard
                to gain the knowledge that other people may get at first glance gives
                you a deeper, more comprehensive understanding of the subject matter.
              </Text>
            </Box>
        </HStack>
      </Box>
  );
};

export default Oakley;
