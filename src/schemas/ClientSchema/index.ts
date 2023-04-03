import * as yup from 'yup';

export const clientSchema = yup
    .object().shape({
        fullname: yup.string().required(),
        email: yup.string().email().required(),
        telefone: yup.string().required()
    })

// export const UpdateClientSchema = yup.object().shape({
//     fullname: yup.string(),
//     email: yup.string().email(),
//     telefone: yup.string()
// })