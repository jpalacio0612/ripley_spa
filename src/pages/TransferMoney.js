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
import axios from '../lib/axios';

const TransferMoney = () => {
  const [input, setInput] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [foundRecipients, setFoundRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [amount, setAmount] = useState(0);
  const toast = useToast();

  useEffect(() => {
    axios.get('/recipients').then(response => setRecipients(response.data));
  }, []);

  useEffect(() => {
    searchRecipients();
  }, [input]);

  const searchRecipients = () => {
    const recipientsFound = recipients.filter(recipient => {
      const lowerCaseName = recipient.name.toLowerCase();
      return lowerCaseName.startsWith(input.toLowerCase());
    });
    setFoundRecipients(input === '' ? [] : recipientsFound);
  };

  const sendTransfer = () => {
    axios
      .post('/transfers', {
        recipientId: selectedRecipient._id,
        amount: amount,
      })
      .then(() => {
        setSelectedRecipient(null);
        setInput('');
        setAmount(0);
        toast({
          title: `Transferencia a ${selectedRecipient.name} realizada con éxito`,
          status: 'success',
          duration: 10000,
          isClosable: false,
          variant: 'top-accent',
        });
      })
      .catch(() => {
        toast({
          title: 'En este momento no fue posible realizar la transferencia',
          status: 'error',
          duration: 5000,
          isClosable: true,
          variant: 'top-accent',
        });
      });
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
      {selectedRecipient && (
        <Box textAlign="left" marginY={8} width="100%">
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
      )}
      <Text fontWeight="bold" marginTop={4}>
        Monto
      </Text>
      <NumberInput
        min={0}
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
        disabled={amount <= 0 || !selectedRecipient}
      >
        Transferir
      </Button>
    </Flex>
  );
};

export default TransferMoney;
