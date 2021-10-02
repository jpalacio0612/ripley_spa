import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import NewRecipientForm from '../components/NewRecipientForm/NewRecipientForm';

const NewRecipient = () => {
  return (
    <Flex
      justifyContent="center"
      direction="column"
      alignItems="center"
      maxWidth="sm"
      marginX="auto"
      paddingX={4}
    >
      <Text marginY={6} fontSize="2xl" fontWeight="bold">
        Nuevo Destinatario
      </Text>
      <NewRecipientForm />
    </Flex>
  );
};

export default NewRecipient;
