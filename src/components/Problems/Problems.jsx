import { HStack, Text, Box, Grid } from '@chakra-ui/react';
import "../Intro/intro.css";

const Problems = () => {
  return (
    <Box w="100%">
    <HStack  justifyContent="space-between">
      <Box alignSelf="flex-start" pt="30px">
        <Text className="introTextLarge"   px="50px" color="#000" fontWeight="bold">
          The main problem with education
        </Text>
      </Box>
      <Box alignSelf="flex-start" pt="40px">
        <Text className="introTextMedium"  mr="5px" pb="20px" color="#000" fontWeight="normal">
          Whether it's at school or university, the one thing no one ever
          teaches you is how to teach yourself. We often just end up drilling
          specific exercises and mindlessly memorizing information so that when
          exam time comes around, we pass the test. But once the test is over,
          that information has outlived its usefulness, and there's no guarantee
          that information will be retained. In the end, we're really just
          learning how to pass our tests.
        </Text>
        <Text className="introTextMedium"  mr="5px" pb="20px" color="#000" fontWeight="normal">
          Here's the real question: does this approach of repetition and
          memorization help us truly understand the subject material? The
          academic consensus nowadays is that it doesn't. In fact, what's more
          important than any individual topic is knowing how to study, but for
          some reason, this point is often overlooked. So, what can we do to
          remedy this?
        </Text>
        <Text
          className="introTextMedium"
          mr="5px"
          pb="30px"
          color="#000"
          fontWeight="normal"
        >
          Whether it's at school or university, the one thing no one ever
          teaches you is how to teach yourself. We often just end up drilling
          specific exercises and mindlessly memorizing information so that when
          exam time comes around, we pass the test. But once the test is over,
          that information has outlived its usefulness, and there's no guarantee
          that information will be retained. In the end, we're really just
          learning how to pass our tests. Here's the real question: does this
          approach of repetition and memorization help us truly understand the
          subject material? The academic consensus nowadays is that it doesn't.
          In fact, what's more important than any individual topic is knowing
          how to study, but for some reason, this point is often overlooked. So,
          what can we do to remedy this? Well, there are various techniques and
          exercises that can be applied to the educational process to help make
          it more efficient and engaging. Keep scrolling to uncover some of the
          secrets of effective learning.
        </Text>
      </Box>
    </HStack>
    </Box>
  );
};

export default Problems;
