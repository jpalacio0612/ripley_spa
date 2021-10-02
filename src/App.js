import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NewRecipient from './pages/NewRecipient';
import TransferMoney from './pages/TransferMoney';
import Record from './pages/Record';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <ColorModeSwitcher />
        {/*<NewRecipient />*/}
        {/*<TransferMoney />*/}
        <Record />
      </Box>
    </ChakraProvider>
  );
}

export default App;
