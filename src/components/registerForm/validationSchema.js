import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required').email(),
  password: yup
    .string('any letters and symbols except spaces. min 7 characters max 32')
    .matches(/^[^ ]{7,32}$/)

    .max(32, 'Must be 15 characters or less')
    .min(7, 'Must be at least 7 characters')
    .required('This field is required'),

  confirm_password: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Both password need to be the same'),

    name: yup
      .string()
      .required()
      .matches(/^[a-zA-zа-яіїєА-ЯІЇЄ ]+$/),

    location: yup
      .string()
      .matches(/^[a-zA-Z]+[,][ ][a-zA-Z]+$/)
      .required(
        'The address must consist of two words separated by a comma, for example: Kyiv, Kyiv'
      ),

    phone: yup
      .string()
      .matches(/^[+]{1}[0-9]{12}$/)
      .required('The phone number must be in the format +380123456789'),
  }),
});
