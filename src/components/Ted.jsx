import { HStack, Image, Text, Grid, Box } from '@chakra-ui/react';
import './Ted.css';

const Ted = () => {
  return (
    <>
      <Text
        textAlign="center"
        px="50px"
        pt="50px"
        color="#000"
        fontSize="4xl"
        fontWeight="bold"
      >
        TED talks
      </Text>

      <Text
        textAlign="center"
        px="50px"
        pb="25px"
        color="#000"
        fontSize="xl"
        fontWeight="normal"
      >
        For lovers of procrastination
      </Text>

      <Box display="flex" justifyContent={"center"} pb="50px">
        <Grid className="video__iframe">
          {/* card#1 */}
            <Box >
              <iframe
              src="https://www.youtube.com/embed/5MgBikgcWnY?start=11"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              >
              </iframe>
            </Box>

          {/* card#2 */}
            <Box >
            <iframe
              src="https://www.youtube.com/embed/arj7oStGLkU?start=11"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
            </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Ted;
