import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { ErrorMessage } from 'formik';

import { validationSchema } from './validationSchema';
import InputField from './inputField/InputField';
import { nanoid } from 'nanoid';
import MultiStepForm, { FormStep } from './multiStepForm/MultiStepForm';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import ContainerRegister from './containerRegister/ContainerRegister';
import {
  PageTitle,
  EntryFieldLabel,
  LabelPass,
  LabelConfirmPass,
  ButtonIconPass,
  ButtonIconConfirmPass,
  ErrorBox,
  Message,
  // BgImageBox,
  // WaveImg,
} from './RegisterForm.styled';

const EmailInputId = nanoid();
const PasswordInputId = nanoid();
// const ConfirmPasswordInputId = nanoid();
const NameInputId = nanoid();
const LocationInputId = nanoid();
const PhoneInputId = nanoid();

const initialValues = {
  email: '',
  password: '',
  confirm_password: '',
  name: '',
  location: '',
  phone: '',
};

export default function RegisterForm() {
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password, confirm_password, name, location, phone } = values;
    console.log('values', values);
    if (password === confirm_password) {
      dispatch(
        register({
          email: email,
          password: password,
          name: name,
          location: location,
          phone: phone,
        })
      );
    }
    resetForm();
    alert(JSON.stringify(values, null, 2));
    console.log('data send', values);
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const toggleConfirmPassword = () => {
    if (confirmPasswordType === 'password') {
      setConfirmPasswordType('text');
      return;
    }
    setConfirmPasswordType('password');
  };

  return (
    <>
      <ContainerRegister>
        <PageTitle>Registration</PageTitle>
        <MultiStepForm initialValues={initialValues} onSubmit={handleSubmit}>
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
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Email must contain @ . Example: your_mail@mail.com"
              />
              <ErrorBox>
                <ErrorMessage
                  name="email"
                  render={msg => (
                    <Message>{`Email must contain @ Example: yourmail@mail.com`}</Message>
                  )}
                />
              </ErrorBox>
            </EntryFieldLabel>
            <LabelPass htmlFor={PasswordInputId}>
              <InputField
                type={passwordType}
                name="password"
                placeholder="Password"
                title="Any letters and symbols except spaces. min 7 characters max 32"
                // pattern="/^[^ ]{7,32}$/"
              />
              <ButtonIconPass type="button" onClick={togglePassword}>
                {passwordType === 'password' ? <RxEyeClosed /> : <RxEyeOpen />}
              </ButtonIconPass>
              <ErrorBox>
                <ErrorMessage
                  name="password"
                  render={msg => (
                    <Message>{`Any letters and symbols except spaces. min 7 characters max 32`}</Message>
                  )}
                />
              </ErrorBox>
            </LabelPass>
            <LabelConfirmPass>
              <InputField
                type={confirmPasswordType}
                name="confirm_password"
                placeholder="Confirm Password"
              />
              <ButtonIconConfirmPass
                type="button"
                onClick={toggleConfirmPassword}
              >
                {confirmPasswordType === 'password' ? (
                  <RxEyeClosed />
                ) : (
                  <RxEyeOpen />
                )}
              </ButtonIconConfirmPass>
              <ErrorBox>
                <ErrorMessage
                  name="password"
                  render={msg => (
                    <Message>{`Both password need to be the same. Please, сonfirm  Password`}</Message>
                  )}
                />
              </ErrorBox>
            </LabelConfirmPass>
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
                // pattern="/^[a-zA-zа-яіїєА-ЯІЇЄ ]+$/"
                title="Name may contain any letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorBox>
                <ErrorMessage
                  name="name"
                  render={msg => (
                    <Message>{`Name may contain any letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`}</Message>
                  )}
                />
              </ErrorBox>
            </EntryFieldLabel>
            <EntryFieldLabel htmlFor={LocationInputId}>
              <InputField
                type="text"
                name="location"
                placeholder="City, region"
                // pattern="/^[a-zA-Z]+[,][ ][a-zA-Z]+$/"
                title="The location must consist of two words separated by a comma, for example: Kyiv, Kyiv"
              />
              <ErrorBox>
                <ErrorMessage
                  name="location"
                  render={msg => (
                    <Message>{`The location must consist of two words separated by a comma, for example: Kyiv, Kyiv`}</Message>
                  )}
                />
              </ErrorBox>
            </EntryFieldLabel>
            <EntryFieldLabel htmlFor={PhoneInputId}>
              <InputField
                type="text"
                name="phone"
                placeholder="Mobile phone"
                // pattern="/^[+]{1}[0-9]{12}$/"
                title="The phone number must be in the format +380123456789"
              />
              <ErrorBox>
                <ErrorMessage
                  name="phone"
                  render={msg => (
                    <Message>{`The phone number must be in the format +380123456789`}</Message>
                  )}
                />
              </ErrorBox>
            </EntryFieldLabel>
          </FormStep>
        </MultiStepForm>
      </ContainerRegister>
    </>
  );
}
