import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useMediaQuery,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import logoRipley from '../assets/images/logo-ripley.png';

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
            <Image width={150} src={logoRipley} />
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
            <Image width={150} src={logoRipley} />
          </Link>
        </Menu>
      )}
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
