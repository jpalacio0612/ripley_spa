import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import { Text, Flex, Table, Thead, Th, Tr, Tbody, Td } from '@chakra-ui/react';

const Record = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    axios.get('/transfers').then(res => setTransfers(res.data));
  }, []);

  return (
    <Flex
      justifyContent="center"
      direction="column"
      alignItems="center"
      maxWidth="3xl"
      marginX="auto"
      paddingX={4}
    >
      <Text marginY={6} fontSize="2xl" fontWeight="bold">
        Historial
      </Text>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Nombre Destinatario</Th>
            <Th>RUT</Th>
            <Th>Banco</Th>
            <Th>Número de Cuenta</Th>
            <Th isNumeric>Monto</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transfers.map(transfer => (
            <Tr>
              <Td>{transfer.recipient.name}</Td>
              <Td>{transfer.recipient.rut}</Td>
              <Td>{transfer.recipient.bank}</Td>
              <Td>{transfer.recipient.accountNumber}</Td>
              <Td isNumeric>{transfer.amount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default Record;
