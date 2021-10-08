import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  Button,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)');

  return (
    <HStack
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      paddingX={4}
      paddingY={4}
      height="auto"
      fontWeight="bold"
      flexWrap="wrap"
    >
      {isDesktop ? (
        <>
          <Link to="/">
            <Text align="center" fontSize="2xl">
              Mi Banco
            </Text>
          </Link>
          <Link to="/nuevo-destinatario">
            <Button minWidth="3xs" colorScheme="purple">
              Nuevo Destinatario
            </Button>
          </Link>
          <Link to="/transferencia">
            <Button minWidth="3xs" colorScheme="purple">
              Transferencia
            </Button>
          </Link>
          <Link to="/historial">
            <Button minWidth="3xs" colorScheme="purple">
              Historial
            </Button>
          </Link>
        </>
      ) : (
        <Menu>
          <MenuButton as={IconButton} icon={<HamburgerIcon />} />
          <MenuList>
            <MenuItem>
              <Link to="/nuevo-destinatario">Nuevo Destinario</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/transferencia">Transferencia</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/historial">Historial</Link>
            </MenuItem>
          </MenuList>
          <Link to="/">
            <Text align="center" fontSize="2xl">
              Mi Banco
            </Text>
          </Link>
        </Menu>
      )}
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
