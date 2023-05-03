import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';

import Header from './components/Header/Header.jsx';
import Intro from './components/Intro/Intro.jsx';
import Problems from './components/Problems/Problems.jsx';
import Techniques from './components/Techniques/Techniques.jsx';
import Ted from './components/Ted/Ted.jsx';
import Oakley from './components/Oakley/Oakley.jsx';
import Feynman from './components/Feynman/Feynman.jsx';
import FactsAndFigs from './components/FactsAndFigs/FactsAndFigs.jsx';
import Kahan from './components/Kahan/Kahan.jsx';
import Principles from './components/Principles/Principles.jsx';
import Resources from './components/Resources/Resources.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <Box className="container">
      <Box marginRight={'10px'} marginLeft={'10px'} h="100%">
        <Grid
          templateAreas={`  "header"
                                  "intro"
                                  "problems"
                                  "techniques"
                                  "ted"
                                  "oakley"
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

          <GridItem area="ted">
            <Ted />
          </GridItem>

          <GridItem area="oakley">
            <Oakley />
          </GridItem>

          <GridItem area="feynman">
            <Feynman />
          </GridItem>

          <GridItem area="factsandfigs">
            <FactsAndFigs />
          </GridItem>

          <GridItem area="kahan">
            <Kahan />
          </GridItem>

          <GridItem area="principles" bg="black">
            <Principles />
          </GridItem>

          <GridItem area="resources" bg="#D3D3D3">
            <Resources />
          </GridItem>

          <GridItem area="footer" bg="black">
            <Footer />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
