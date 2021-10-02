import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NewRecipient from './pages/NewRecipient';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <ColorModeSwitcher />
        <NewRecipient />
      </Box>
    </ChakraProvider>
  );
}

export default App;
