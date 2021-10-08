import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import NewRecipient from './pages/NewRecipient';
import TransferMoney from './pages/TransferMoney';
import Record from './pages/Record';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/nuevo-destinatario" exact component={NewRecipient} />
            <Route path="/transferencia" exact component={TransferMoney} />
            <Route path="/historial" exact component={Record} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
