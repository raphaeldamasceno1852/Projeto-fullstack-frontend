import * as yup from 'yup';


const loginSchema = yup
  .object().shape({
    email: yup
      .string()
      .required('Email é obrigatório'),
    userPassword: yup
      .string()
      .required('Senha é obrigatória')
  })

  export default loginSchema