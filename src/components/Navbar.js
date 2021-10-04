import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction="column"
      paddingX={4}
      height="10vh"
      fontSize="2xl"
      fontWeight="bold"
    >
      <Link to="/">
        <Text>Mi Banco</Text>
      </Link>
      <Link to="/Nuevodestinatario">
        <Button minWidth="200" margin={10} colorScheme="purple">
          Nuevo Destinatario
        </Button>
      </Link>
      <Link to="/Transferencia">
        <Button minWidth="200" margin={10} colorScheme="purple">
          Transferencia
        </Button>
      </Link>
      <Link to="/Historial">
        <Button minWidth="200" margin={10} colorScheme="purple">
          Historial
        </Button>
      </Link>
      <ColorModeSwitcher />
    </Box>
  );
};

export default Navbar;
