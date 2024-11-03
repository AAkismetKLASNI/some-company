import * as yup from 'yup';

export const contactScheme = yup.object().shape({
  name: yup.string().required('name must be filled'),
  email: yup
    .string()
    .required('email must be filled')
    .email('email must be valid'),
  message: yup.string().required('message must be filled'),
});
