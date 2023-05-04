import { HStack, Text, Box, Grid, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import "../Intro/intro.css";

function truncatedText(text, limit) {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  } else {
    return text;
  }
}



const Problems = () => {
  const textA = "Whether it's at school or university, the one thing no one ever teaches you is how to teach yourself. We often just end up drilling specific exercises and mindlessly memorizing information so that when exam time comes around, we pass the test. But once the test is over, that information has outlived its usefulness, and there's no guarantee that information will be retained. In the end, we're really just learning how to pass our tests.";
  const textB = "Here's the real question: does this approach of repetition and memorization help us truly understand the subject material? The academic consensus nowadays is that it doesn't. In fact, what's more important than any individual topic is knowing how to study, but for some reason, this point is often overlooked. So, what can we do to remedy this?"
  const textC = "Well, there are various techniques and exercises that can be applied to the educational process to help make it more efficient and engaging. Keep scrolling to uncover some of the secrets of effective learning."
  
  const [isSmallerThan768] = useMediaQuery( "(max-width: 768px)" );
  const [isTruncatedA, setIsTruncatedA] = useState(true);
  const [isTruncatedB, setIsTruncatedB] = useState(true);
  const [isTruncatedC, setIsTruncatedC] = useState(true);


  const truncatedTextA = isSmallerThan768 
      ? isTruncatedA 
        ? truncatedText(textA, 25) 
        : textA
      : textA;

  const truncatedTextB = isSmallerThan768 
      ? isTruncatedB
        ? truncatedText(textB, 25) 
        : textB
      : textB;

  const truncatedTextC = isSmallerThan768 
      ? isTruncatedC
        ? truncatedText(textC, 25) 
        : textC
      : textC;

  function handleTextClickA () {
    setIsTruncatedA (false)
  }

  function handleTextClickB () {
    setIsTruncatedB (false)
  }

  function handleTextClickC () {
    setIsTruncatedC (false)
  }

 
  return (

    <Box w="100%">
    <HStack  justifyContent="space-between">
      <Box alignSelf="flex-start" pt="30px">
        <Text className="introTextLarge"   px="50px" color="#000" fontWeight="bold">
          The main problem with education
        </Text>
      </Box>

      <Box alignSelf="flex-start" pt="40px">

        <Text 
          className="introTextMedium"  
          mr="5px" 
          pb="20px" 
          color="#000" 
          fontWeight="normal"
          onClick = { handleTextClickA }
          cursor = "pointer">
           {truncatedTextA}
        </Text>


        <Text 
          className="introTextMedium"  
          mr="5px" 
          pb="20px" 
          color="#000" 
          fontWeight="normal" 
          onClick = { handleTextClickB } 
          cursor = "pointer">
           {truncatedTextB}
        </Text>

        <Text
          className="introTextMedium"
          mr="5px"
          pb="30px"
          color="#000"
          fontWeight="normal"
          onClick = { handleTextClickC }
          cursor = "pointer">
           {truncatedTextC}
        </Text>

      </Box>
    </HStack>
    </Box>
  );
};

export default Problems;
