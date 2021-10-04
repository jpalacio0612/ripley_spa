import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Input,
  Button,
  HStack,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react';

const recipients = [
  {
    id: 0,
    name: 'Alejandra Lorduy M',
    email: 'alelorduym@gmail.com',
    bank: 'Banco Estado',
    accountNumber: '25904532',
  },
  {
    id: 1,
    name: 'Laura Bernal C',
    email: 'laurabernalc@gmail.com',
    bank: 'Banco Estado',
    accountNumber: '25345017',
  },
  {
    id: 2,
    name: 'Felipe Herrera V',
    email: 'fherrera@gmail.com',
    bank: 'Banco Estado',
    accountNumber: '25345008',
  },
  {
    id: 3,
    name: 'Jonathan Palacio',
    email: 'jpalacio@gmail.com',
    bank: 'Banco Estado',
    accountNumber: '25567843',
  },
];

const TransferMoney = () => {
  const [input, setInput] = useState('');
  const [foundRecipients, setFoundRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState({});
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    searchRecipients();
  }, [input]);

  const searchRecipients = () => {
    const recipientsFound = recipients.filter(recipient =>
      recipient.name.startsWith(input)
    );
    setFoundRecipients(input === '' ? [] : recipientsFound);
  };

  const sendTransfer = () => {
    console.log(selectedRecipient.id);
    console.log(amount);
  };

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
        Transferencia
      </Text>
      <Input
        value={input}
        placeholder="Buscar Destinatario"
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      {foundRecipients.map(recipient => (
        <Button
          isFullWidth
          onClick={e => {
            setInput(e.target.innerText);
            setSelectedRecipient(recipient);
          }}
        >
          {recipient.name}
        </Button>
      ))}
      <Box textAlign="left" marginY={8}>
        <Text marginY={4} fontWeight="bold">
          Información del Destinatario
        </Text>
        <HStack>
          <Text>Nombre:</Text>
          <Text>{selectedRecipient.name}</Text>
        </HStack>
        <HStack>
          <Text>Correo:</Text>
          <Text>{selectedRecipient.email}</Text>
        </HStack>
        <HStack>
          <Text>Banco:</Text>
          <Text>{selectedRecipient.bank}</Text>
        </HStack>
        <HStack>
          <Text>Número de Cuenta:</Text>
          <Text>{selectedRecipient.accountNumber}</Text>
        </HStack>
      </Box>
      <Text fontWeight="bold">Monto</Text>
      <NumberInput
        min={0}
        defaultValue={0}
        width="100%"
        value={amount}
        onChange={value => setAmount(value)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        colorScheme="purple"
        type="submit"
        isFullWidth
        marginY={8}
        onClick={() => sendTransfer()}
      >
        Transferir
      </Button>
    </Flex>
  );
};

export default TransferMoney;
