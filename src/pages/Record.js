import React from 'react';
import { Text, Flex, Table, Thead, Th, Tr, Tbody, Td } from '@chakra-ui/react';

const transfers = [
  {
    id: 0,
    name: 'Alejandra Lorduy M',
    rut: '259045320',
    bank: 'Banco Estado',
    accountNumber: '25904532',
    amount: 20000,
  },
  {
    id: 1,
    name: 'Laura Bernal C',
    rut: '253450177',
    bank: 'Banco Estado',
    accountNumber: '25345017',
    amount: 250000,
  },
  {
    id: 2,
    name: 'Felipe Herrera V',
    rut: '253450088',
    bank: 'Banco Estado',
    accountNumber: '25345008',
    amount: 89000,
  },
  {
    id: 3,
    name: 'Jonathan Palacio',
    rut: '255678430',
    bank: 'Banco Estado',
    accountNumber: '25567843',
    amount: 10000,
  },
];

const Record = () => {
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
              <Td>{transfer.name}</Td>
              <Td>{transfer.rut}</Td>
              <Td>{transfer.bank}</Td>
              <Td>{transfer.accountNumber}</Td>
              <Td isNumeric>{transfer.amount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default Record;
