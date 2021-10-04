import React from 'react';
import { Box } from '@chakra-ui/react';
import background from '../assets/images/home.png';

function Home() {
  return (
    <Box
      bgImage={background}
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100%"
      height="800px"
      bgSize="cover"
    />
  );
}

export default Home;
