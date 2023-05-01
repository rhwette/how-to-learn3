import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Box, Heading, Text } from '@chakra-ui/react';

import Header from './components/Header.jsx';
import Intro from './components/Intro/Intro.jsx';
import Problems from './components/Problems/Problems.jsx';
import Techniques from './components/Techniques/Techniques.jsx';
import Ted from './components/Ted';
import Oakley from './components/Oakley';
import Feynman from './components/Feynman';
import FactsAndFigs from './components/FactsAndFigs';
import Kahan from './components/Kahan';
import Principles from './components/Principles';
import Resources from './components/Resources';
import Footer from './components/Footer';
// import './components/Page/page.css';

function App() {
  return (
    <Box
      w={['320px', '375px', '425px', '768px', '1024px', '1440px']}
      // w="100%"
      h="100%"
      bg="blue.100"
    >
      <Grid
        templateAreas={`  "header"
                                "intro"
                                "problems"
                                "techniques"
                                "ted"
                                "oakleyaside"
                                "feynman"
                                "factsandfigs"
                                "kahan"
                                "principles"
                                "resources"
                                "footer"
                                `}
      >
        <GridItem area="header">
          <Header></Header>
        </GridItem>

        <GridItem area="intro">
          <Intro />
        </GridItem>

        <GridItem area="problems">
          <Problems />
        </GridItem>

        <GridItem area="techniques">
          <Techniques />
        </GridItem>

        {/* <GridItem area="ted">
          <Ted />
        </GridItem> */}

        {/* <GridItem area="oakleyaside" bg="orange">
          <Oakley />
        </GridItem> */}

        {/* <GridItem area="feynman">
          <Feynman />
        </GridItem> */}

        {/* <GridItem area="factsandfigs">
          <FactsAndFigs />
        </GridItem> */}

        {/* <GridItem area="kahan" bg="gray">
          <Kahan />
        </GridItem> */}

        {/* <GridItem area="principles" bg="black">
          <Principles />
        </GridItem> */}

        {/* <GridItem area="resources" bg="#D3D3D3">
          <Resources />
        </GridItem> */}

        <GridItem area="footer" bg="black">
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
