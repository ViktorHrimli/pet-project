import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { ErrorMessage } from 'formik';

import * as yup from 'yup';
import InputField from './inputField/InputField';
import { nanoid } from 'nanoid';
import MultiStepForm, { FormStep } from './multiStepForm/MultiStepForm';
// import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
// import {
//   passwordVisibility,
//   rightIcon,
//   handlePasswordVisibility,
// } from "../../hooks/useTogglePasswordVisibility";
import ContainerRegister from './containerRegister/ContainerRegister';
import {
  PageTitle,
  EntryFieldLabel,
  ErrorBox,
  Message,
  BgImageBox,
  WaveImg,
} from './RegisterForm.styled';
// import wave from '../../images/background/part-1.png';

// const wave = new URL('../../images/background/part-1.png');

const EmailInputId = nanoid();
const PasswordInputId = nanoid();
// const ConfirmPasswordInputId = nanoid();
const NameInputId = nanoid();
const AddressInputId = nanoid();
const PhoneInputId = nanoid();

const initialValues = {
  email: '',
  password: '',
  name: '',
  address: '',
  phone: '',
};
const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    // .matches(
    //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%^&*])(?=.{8,})",
    //   "Need one special character"
    // )
    .max(32, 'Must be 15 characters or less')
    .min(7, 'Must be at least 7 characters')
    .required('This field is required'),
  confirm_password: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Both password need to be the same'),
    name: yup.string().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
  }),
});
console.log('validationSchema', validationSchema);

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
    alert(JSON.stringify(values, null, 2));
    console.log('data send', values);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //       name: form.elements.name.value,
  //       address: form.elements.address.value,
  //       phone: form.elements.phone.value,
  //     })
  //   );
  //   form.reset();
  //   console.log('form', form);
  //   console.log('register', register);
  // };

  return (
    <>
      <ContainerRegister>
        <PageTitle>Registration</PageTitle>
        <MultiStepForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // onSubmit={values => {
          //   console.log(values);
          //   alert(JSON.stringify(values, null, 2));
          // }}
        >
          <FormStep
            stepName="Person"
            onSubmit={() => console.log('Step1')}
            validationSchema={validationSchema}
          >
            <EntryFieldLabel htmlFor={EmailInputId}>
              <InputField
                autoComplete="off"
                type="text"
                name="email"
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
              <ErrorBox>
                <ErrorMessage
                  name="email"
                  render={msg => <Message>{`Please, enter Email`}</Message>}
                />
              </ErrorBox>
            </EntryFieldLabel>
            <EntryFieldLabel htmlFor={PasswordInputId}>
              <InputField
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorBox>
                <ErrorMessage
                  name="password"
                  render={msg => <Message>{`Please, enter Password`}</Message>}
                />
              </ErrorBox>
            </EntryFieldLabel>
            <EntryFieldLabel>
              <InputField
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
              />
              <ErrorBox>
                <ErrorMessage
                  name="password"
                  render={msg => (
                    <Message>{`Please, сonfirm  Password`}</Message>
                  )}
                />
              </ErrorBox>
            </EntryFieldLabel>
          </FormStep>

          {/* step 2 */}
          <FormStep
            stepName="Address"
            onSubmit={() => console.log('Step2 - Register')}
            validationSchema={validationSchema}
          >
            <EntryFieldLabel htmlFor={NameInputId}>
              <InputField
                type="text"
                name="name"
                placeholder="Name"
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorBox>
                <ErrorMessage
                  name="name"
                  render={msg => <Message>{`Please, enter Name`}</Message>}
                />
              </ErrorBox>
            </EntryFieldLabel>
            <EntryFieldLabel htmlFor={AddressInputId}>
              <InputField
                type="text"
                name="address"
                placeholder="City, region"
              />
              <ErrorBox>
                <ErrorMessage
                  name="address"
                  render={msg => <Message>{`Please, enter City`}</Message>}
                />
              </ErrorBox>
            </EntryFieldLabel>
            <EntryFieldLabel htmlFor={PhoneInputId}>
              <InputField type="text" name="phone" placeholder="Mobile phone" />
              <ErrorBox>
                <ErrorMessage
                  name="phone"
                  render={msg => <Message>{`Please, enter Phone`}</Message>}
                />
              </ErrorBox>
            </EntryFieldLabel>
          </FormStep>
        </MultiStepForm>
        {/* <BgImageBox>
          <WaveImg src={wave} />
        </BgImageBox> */}
      </ContainerRegister>
    </>
  );
}
