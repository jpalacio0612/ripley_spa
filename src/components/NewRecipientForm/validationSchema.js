import { object, number, string } from 'yup';

const validationSchema = object().shape({
  rut: string().required('El campo RUT es obligatorio').min(9, 'RUT inválido'),
  name: string().required('El campo Nombre es obligatorio'),
  email: string()
    .required('El campo Correo es obligatorio')
    .email('Ingrese un Correo Electrónico válido'),
  phone: string()
    .required('El campo Teléfono es obligatorio')
    .min(9, 'Ingrese un Teléfono válido'),
  bank: string().required('Seleccione un Banco'),
  accountType: string().required('Seleccione un Tipo de Cuenta'),
  accountNumber: string().required('El campo Número de Cuenta es obligatorio'),
});

export default validationSchema;
