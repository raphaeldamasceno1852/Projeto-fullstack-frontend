import * as yup from 'yup';

export const registerSchema = yup
  .object().shape({
    firstName: yup
      .string().required('Primeiro nome obrigátório'),
    lastName: yup
      .string().required('Sobrenome obrigátório'),
    email: yup
      .string()
      .required('Email é obrigatório')
      .email('Deve ser um e-mail válido'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
      .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
      .matches(/(\d)/, 'Deve conter ao menos um número')
      .matches(/(\W)|_/, 'Deve conter um caracter especial')
      .matches(/.{8,}/, 'Deve ter no minimo 8 digitos'),
    confirmPassword: yup.string().required('Confirmação de senha obrigatória').oneOf([yup.ref('password')], 'Deve ser igual a senha'),
    phone: yup.string().max(11).required()
  })
