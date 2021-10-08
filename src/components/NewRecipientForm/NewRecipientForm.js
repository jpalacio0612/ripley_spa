import React, { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Select,
  VStack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from '../../lib/axios';
import schema from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const NewRecipientForm = () => {
  const [banks, setBanks] = useState([]);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const { errors } = formState;

  useEffect(() => {
    axios
      .get('https://bast.dev/api/banks.php')
      .then(res => setBanks(res.data.banks))
      .catch(error => console.log(error));
  }, []);

  const onSubmit = data => {
    axios
      .post('/recipients', data)
      .then(() => {
        toast({
          title: 'El Nuevo Destinatario ha sido creado exitosamente',
          status: 'success',
          duration: 5000,
          isClosable: true,
          variant: 'top-accent',
        });
        toast({
          title: 'Advertencia',
          description:
            'Al crear un Nuevo Destinatario, el monto máximo de la primera transferencia es de $300.000. Posteriormente, deberán transcurrir 24 horas para realizar una nueva transferencia sin esta restricción.',
          status: 'warning',
          duration: null,
          isClosable: false,
          variant: 'top-accent',
        });
        reset();
      })
      .catch(() => {
        toast({
          title: 'No se pudo crear el Nuevo Destinatario',
          status: 'error',
          duration: 5000,
          isClosable: true,
          variant: 'top-accent',
        });
      });
  };

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      width="100%"
      spacing={4}
    >
      <Input placeholder="RUT" {...register('rut')} isInvalid={errors.rut} />
      {errors.rut && <Text color="red.500">{errors.rut.message}</Text>}
      <Input
        placeholder="Nombre"
        {...register('name')}
        isInvalid={errors.name}
      />
      {errors.name && <Text color="red.500">{errors.name.message}</Text>}
      <Input
        placeholder="Correo"
        {...register('email')}
        isInvalid={errors.email}
      />
      {errors.email && <Text color="red.500">{errors.email.message}</Text>}
      <Input
        placeholder="Teléfono"
        {...register('phone')}
        isInvalid={errors.phone}
      />
      {errors.phone && <Text color="red.500">{errors.phone.message}</Text>}
      <Select placeholder="Banco" {...register('bank')} isInvalid={errors.bank}>
        {banks.map(bank => (
          <option value={bank.name}>{bank.name}</option>
        ))}
      </Select>
      {errors.bank && <Text color="red.500">{errors.bank.message}</Text>}
      <Select
        placeholder="Tipo de Cuenta"
        {...register('accountType')}
        isInvalid={errors.accountType}
      >
        <option value="Corriente">Cuenta Corriente/ Cuenta Vista</option>
        <option value="Ahorro">Cuenta Ahorro</option>
      </Select>
      {errors.accountType && (
        <Text color="red.500">{errors.accountType.message}</Text>
      )}
      <Input
        placeholder="Número de Cuenta"
        {...register('accountNumber')}
        isInvalid={errors.accountNumber}
      />
      {errors.accountNumber && (
        <Text color="red.500">{errors.accountNumber.message}</Text>
      )}
      <Button colorScheme="purple" type="submit" isFullWidth>
        Crear
      </Button>
    </VStack>
  );
};

export default NewRecipientForm;
